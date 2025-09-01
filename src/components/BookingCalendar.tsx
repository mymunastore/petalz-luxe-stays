import { useState, useEffect } from 'react';
import { Calendar, Check, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { analytics } from '@/utils/analytics';

interface BookingCalendarProps {
  roomType?: string;
  onDateSelect?: (dates: { checkIn: string; checkOut: string }) => void;
}

const BookingCalendar = ({ roomType = 'studio', onDateSelect }: BookingCalendarProps) => {
  const { t } = useLanguage();
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: string | null;
    checkOut: string | null;
  }>({
    checkIn: null,
    checkOut: null
  });
  
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching availability data
  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock availability (available dates for next 30 days)
      const available: string[] = [];
      const bookedDates = [
        // Mock some booked dates
        '2024-01-15', '2024-01-16', '2024-01-25', '2024-01-26'
      ];
      
      for (let i = 0; i < 60; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const dateString = date.toISOString().split('T')[0];
        
        if (!bookedDates.includes(dateString)) {
          available.push(dateString);
        }
      }
      
      setAvailableDates(available);
      setLoading(false);
    };

    fetchAvailability();
  }, [roomType]);

  const handleDateSelect = (date: string) => {
    analytics.bookingStarted(roomType);
    
    if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
      // First selection or reset
      setSelectedDates({ checkIn: date, checkOut: null });
    } else if (selectedDates.checkIn && !selectedDates.checkOut) {
      // Second selection
      if (new Date(date) > new Date(selectedDates.checkIn)) {
        const newDates = { checkIn: selectedDates.checkIn, checkOut: date };
        setSelectedDates(newDates);
        onDateSelect?.(newDates);
      } else {
        // If selected date is before check-in, make it the new check-in
        setSelectedDates({ checkIn: date, checkOut: null });
      }
    }
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    const days = [];
    
    // Add previous month's trailing days
    for (let i = firstDay.getDay(); i > 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i);
      days.push({
        date,
        isCurrentMonth: false,
        dateString: date.toISOString().split('T')[0]
      });
    }
    
    // Add current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(currentYear, currentMonth, day);
      days.push({
        date,
        isCurrentMonth: true,
        dateString: date.toISOString().split('T')[0]
      });
    }
    
    // Add next month's leading days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(currentYear, currentMonth + 1, day);
      days.push({
        date,
        isCurrentMonth: false,
        dateString: date.toISOString().split('T')[0]
      });
    }
    
    return days;
  };

  const getDayStatus = (dateString: string) => {
    const today = new Date().toISOString().split('T')[0];
    
    if (dateString < today) return 'past';
    if (!availableDates.includes(dateString)) return 'booked';
    if (selectedDates.checkIn === dateString) return 'checkin';
    if (selectedDates.checkOut === dateString) return 'checkout';
    
    // Check if date is in range
    if (selectedDates.checkIn && selectedDates.checkOut) {
      if (dateString > selectedDates.checkIn && dateString < selectedDates.checkOut) {
        return 'inrange';
      }
    }
    
    return 'available';
  };

  const getDayStyles = (status: string) => {
    const baseStyles = "w-8 h-8 text-sm rounded-full flex items-center justify-center transition-all duration-200";
    
    switch (status) {
      case 'past':
        return `${baseStyles} text-gray-300 cursor-not-allowed`;
      case 'booked':
        return `${baseStyles} bg-red-100 text-red-600 cursor-not-allowed`;
      case 'available':
        return `${baseStyles} hover:bg-petalz-gold/20 hover:text-petalz-gold cursor-pointer`;
      case 'checkin':
        return `${baseStyles} bg-petalz-gold text-petalz-black font-semibold`;
      case 'checkout':
        return `${baseStyles} bg-petalz-gold text-petalz-black font-semibold`;
      case 'inrange':
        return `${baseStyles} bg-petalz-gold/30 text-petalz-gold`;
      default:
        return baseStyles;
    }
  };

  if (loading) {
    return (
      <div className="petalz-card">
        <div className="flex items-center justify-center py-8">
          <Clock className="h-6 w-6 animate-spin text-petalz-gold mr-2" />
          <span>Loading availability...</span>
        </div>
      </div>
    );
  }

  const calendarDays = generateCalendarDays();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="petalz-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-2xl font-bold flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-petalz-gold" />
          Check Availability
        </h3>
        <div className="text-sm text-muted-foreground">
          {selectedDates.checkIn && selectedDates.checkOut ? (
            <span className="text-petalz-gold font-medium">
              {new Date(selectedDates.checkIn).toLocaleDateString()} - {new Date(selectedDates.checkOut).toLocaleDateString()}
            </span>
          ) : (
            'Select dates'
          )}
        </div>
      </div>

      {/* Calendar Header */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-center mb-4">
          {monthNames[new Date().getMonth()]} {new Date().getFullYear()}
        </h4>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map((day, index) => {
          const status = getDayStatus(day.dateString);
          const canSelect = status === 'available';
          
          return (
            <button
              key={index}
              onClick={() => canSelect && handleDateSelect(day.dateString)}
              disabled={!canSelect}
              className={getDayStyles(status)}
            >
              {day.date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-petalz-gold rounded-full mr-2"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 border-2 border-gray-300 rounded-full mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
          <span>Past</span>
        </div>
      </div>

      {/* Action Buttons */}
      {selectedDates.checkIn && selectedDates.checkOut && (
        <div className="mt-6 pt-4 border-t">
          <Button 
            onClick={() => {
              const whatsappMessage = `Hi! I'd like to book the ${roomType} from ${selectedDates.checkIn} to ${selectedDates.checkOut}. Is it available?`;
              const encodedMessage = encodeURIComponent(whatsappMessage);
              window.open(`https://wa.me/2348144257874?text=${encodedMessage}`, '_blank');
              analytics.bookingCompleted(roomType, roomType === 'studio' ? 35000 : roomType === 'suite' ? 45000 : 60000);
            }}
            className="w-full petalz-btn-primary"
          >
            Book Selected Dates
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;