import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { ArrowLeft, Clock, Calendar as CalendarIcon, CreditCard } from 'lucide-react';
import type { Doctor } from '../App';

type AppointmentBookingProps = {
  doctor: Doctor;
  onBack: () => void;
  onSuccess: () => void;
};

const timeSlots = [
  { time: '9:00 AM', available: true },
  { time: '9:30 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '10:30 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '11:30 AM', available: true },
  { time: '2:00 PM', available: true },
  { time: '2:30 PM', available: false },
  { time: '3:00 PM', available: true },
  { time: '3:30 PM', available: true },
  { time: '4:00 PM', available: true },
  { time: '4:30 PM', available: true },
];

export function AppointmentBooking({ doctor, onBack, onSuccess }: AppointmentBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'datetime' | 'payment'>('datetime');
  const [selectedPayment, setSelectedPayment] = useState<string>('upi');

  const handleContinue = () => {
    if (step === 'datetime' && selectedDate && selectedTime) {
      setStep('payment');
    } else if (step === 'payment') {
      // Simulate payment success
      setTimeout(() => {
        onSuccess();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={step === 'payment' ? () => setStep('datetime') : onBack}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-[#1A1A1A]">
            {step === 'datetime' ? 'Book Appointment' : 'Payment'}
          </h2>
        </div>
      </div>

      {step === 'datetime' ? (
        <>
          {/* Doctor Summary */}
          <div className="bg-white px-6 py-4 mb-4">
            <div className="flex gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-[#1A1A1A]">{doctor.name}</h3>
                <p className="text-sm text-[#666]">{doctor.specialty}</p>
                <p className="text-[#3A8DFF] mt-1">₹{doctor.fees}</p>
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white px-6 py-6 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-5 h-5 text-[#3A8DFF]" />
              <h3 className="text-[#1A1A1A]">Select Date</h3>
            </div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-2xl border-0"
              disabled={(date) => date < new Date()}
            />
          </div>

          {/* Time Slots */}
          <div className="bg-white px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#3A8DFF]" />
              <h3 className="text-[#1A1A1A]">Select Time Slot</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  disabled={!slot.available}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`py-3 rounded-xl border-2 transition-all ${
                    !slot.available
                      ? 'bg-[#F7F9FC] border-[#E9F2FF] text-[#999] cursor-not-allowed'
                      : selectedTime === slot.time
                      ? 'bg-[#3A8DFF] border-[#3A8DFF] text-white'
                      : 'bg-white border-[#E9F2FF] text-[#1A1A1A] hover:border-[#3A8DFF]'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Appointment Summary */}
          <div className="bg-white px-6 py-6 mb-4">
            <h3 className="text-[#1A1A1A] mb-4">Appointment Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#666]">Doctor</span>
                <span className="text-[#1A1A1A]">{doctor.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Date</span>
                <span className="text-[#1A1A1A]">
                  {selectedDate?.toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Time</span>
                <span className="text-[#1A1A1A]">{selectedTime}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#E9F2FF]">
                <span className="text-[#666]">Consultation Fee</span>
                <span className="text-[#3A8DFF]">₹{doctor.fees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Platform Fee</span>
                <span className="text-[#1A1A1A]">₹50</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#E9F2FF]">
                <span className="text-[#1A1A1A]">Total Amount</span>
                <span className="text-[#3A8DFF]">₹{doctor.fees + 50}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-[#3A8DFF]" />
              <h3 className="text-[#1A1A1A]">Payment Method</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { id: 'upi', label: 'UPI (GPay, PhonePe, Paytm)', icon: '📱' },
                { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                { id: 'wallet', label: 'Wallet', icon: '👛' },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    selectedPayment === method.id
                      ? 'bg-[#E9F2FF] border-[#3A8DFF]'
                      : 'bg-white border-[#E9F2FF]'
                  }`}
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span className="flex-1 text-left text-[#1A1A1A]">{method.label}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === method.id
                      ? 'border-[#3A8DFF]'
                      : 'border-[#E9F2FF]'
                  }`}>
                    {selectedPayment === method.id && (
                      <div className="w-3 h-3 bg-[#3A8DFF] rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9F2FF] px-6 py-4">
        {step === 'datetime' ? (
          <Button
            className="w-full h-14 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl"
            onClick={handleContinue}
            disabled={!selectedDate || !selectedTime}
          >
            Continue to Payment
          </Button>
        ) : (
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-[#666]">Total Amount</span>
              <span className="text-[#3A8DFF]">₹{doctor.fees + 50}</span>
            </div>
            <Button
              className="w-full h-14 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl"
              onClick={handleContinue}
            >
              Pay Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
