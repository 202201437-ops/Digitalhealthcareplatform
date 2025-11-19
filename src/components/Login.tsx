import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowLeft } from 'lucide-react';

type LoginProps = {
  onLogin: () => void;
  onBack: () => void;
};

export function Login({ onLogin, onBack }: LoginProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setStep('otp');
      // Start timer
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }

      // Auto-submit when all filled
      if (newOtp.every(digit => digit !== '') && index === 5) {
        setTimeout(onLogin, 300);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {step === 'phone' ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-[#1A1A1A] mb-2">Welcome Back</h2>
                <p className="text-[#666]">Enter your mobile number to continue</p>
              </div>

              <div className="bg-white border-2 border-[#E9F2FF] rounded-3xl p-8 mb-6">
                <label className="block text-[#666] mb-2">Mobile Number</label>
                <div className="flex gap-3 mb-6">
                  <div className="bg-[#F7F9FC] rounded-xl px-4 py-3 flex items-center">
                    <span className="text-[#1A1A1A]">+91</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.slice(0, 10))}
                    className="flex-1 h-12 rounded-xl border-[#E9F2FF]"
                  />
                </div>

                <Button 
                  className="w-full h-12 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl"
                  onClick={handleSendOtp}
                  disabled={phone.length !== 10}
                >
                  Send OTP
                </Button>
              </div>

              {/* Social Login */}
              <div className="text-center">
                <p className="text-[#666] mb-4">Or continue with</p>
                <div className="flex justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-[#F7F9FC] hover:bg-[#E9F2FF] flex items-center justify-center transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M19.8 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.5c-.2 1.2-1 2.2-2.1 2.9v2.5h3.4c2-1.8 3-4.5 3-7.2z" fill="#4285F4"/>
                      <path d="M10 20c2.7 0 5-1 6.6-2.6l-3.4-2.5c-.9.6-2 1-3.2 1-2.5 0-4.6-1.7-5.3-4H1.3v2.6C3 17.8 6.3 20 10 20z" fill="#34A853"/>
                      <path d="M4.7 11.9c-.4-1.2-.4-2.6 0-3.8V5.5H1.3c-1.3 2.6-1.3 5.4 0 8l3.4-2.6z" fill="#FBBC05"/>
                      <path d="M10 4c1.4 0 2.6.5 3.6 1.4l2.7-2.7C14.9 1.1 12.6 0 10 0 6.3 0 3 2.2 1.3 5.5l3.4 2.6C5.4 5.7 7.5 4 10 4z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#F7F9FC] hover:bg-[#E9F2FF] flex items-center justify-center transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                      <path d="M20 10c0-5.5-4.5-10-10-10S0 4.5 0 10c0 5 3.7 9.1 8.4 9.9v-7H5.9v-2.9h2.5V7.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V10h2.8l-.4 2.9h-2.3v7C16.3 19.1 20 15 20 10z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-[#1A1A1A] mb-2">Enter OTP</h2>
                <p className="text-[#666]">We've sent a code to +91 {phone}</p>
              </div>

              <div className="bg-white border-2 border-[#E9F2FF] rounded-3xl p-8 mb-6">
                <div className="flex gap-3 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-14 text-center rounded-xl border-[#E9F2FF] focus:border-[#3A8DFF]"
                    />
                  ))}
                </div>

                <div className="text-center mb-4">
                  {timer > 0 ? (
                    <p className="text-[#666]">Resend OTP in {timer}s</p>
                  ) : (
                    <Button variant="link" className="text-[#3A8DFF]" onClick={() => setTimer(30)}>
                      Resend OTP
                    </Button>
                  )}
                </div>

                <Button 
                  className="w-full h-12 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl"
                  onClick={onLogin}
                  disabled={otp.some(digit => digit === '')}
                >
                  Verify & Continue
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}