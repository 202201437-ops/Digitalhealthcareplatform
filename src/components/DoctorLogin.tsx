import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

type DoctorLoginProps = {
  onLogin: () => void;
  onBack: () => void;
};

export function DoctorLogin({ onLogin, onBack }: DoctorLoginProps) {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [useOTP, setUseOTP] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
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
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] rounded-3xl mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 8C12.7 8 10 10.7 10 14v4h12v-4c0-3.3-2.7-6-6-6z" fill="white"/>
                <path d="M16 4v4M8 16h16M12 24h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-[#1A1A1A] mb-2">Doctor Login</h2>
            <p className="text-[#666]">Access your professional dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border-2 border-[#E9F2FF] rounded-3xl p-8">
            {/* Login Method Toggle */}
            <div className="flex gap-2 mb-6 p-1 bg-[#F7F9FC] rounded-xl">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  loginMethod === 'email'
                    ? 'bg-white text-[#3A8DFF] shadow-sm'
                    : 'text-[#666]'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  loginMethod === 'phone'
                    ? 'bg-white text-[#3A8DFF] shadow-sm'
                    : 'text-[#666]'
                }`}
              >
                Phone
              </button>
            </div>

            {/* Email/Phone Input */}
            {loginMethod === 'email' ? (
              <div className="mb-4">
                <Label className="text-[#666] mb-2">Email Address</Label>
                <Input
                  type="email"
                  placeholder="doctor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl border-[#E9F2FF]"
                  required
                />
              </div>
            ) : (
              <div className="mb-4">
                <Label className="text-[#666] mb-2">Mobile Number</Label>
                <div className="flex gap-3">
                  <div className="bg-[#F7F9FC] rounded-xl px-4 py-3 flex items-center">
                    <span className="text-[#1A1A1A]">+91</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.slice(0, 10))}
                    className="flex-1 h-12 rounded-xl border-[#E9F2FF]"
                    required
                  />
                </div>
              </div>
            )}

            {/* Password or OTP Toggle */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-[#666]">
                  {useOTP ? 'One Time Password' : 'Password'}
                </Label>
                <Button
                  type="button"
                  variant="link"
                  className="text-[#3A8DFF] p-0 h-auto text-sm"
                  onClick={() => setUseOTP(!useOTP)}
                >
                  {useOTP ? 'Use Password' : 'Login with OTP'}
                </Button>
              </div>
              {!useOTP ? (
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-xl border-[#E9F2FF] pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              ) : (
                <div className="bg-[#E9F2FF] rounded-xl p-4 text-center">
                  <p className="text-sm text-[#3A8DFF]">
                    OTP will be sent to your registered email/phone
                  </p>
                </div>
              )}
            </div>

            {!useOTP && (
              <div className="text-right mb-6">
                <Button
                  type="button"
                  variant="link"
                  className="text-[#3A8DFF] p-0 h-auto text-sm"
                >
                  Forgot Password?
                </Button>
              </div>
            )}

            {/* Login Button */}
            <Button 
              type="submit"
              className="w-full h-12 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl mb-4"
            >
              {useOTP ? 'Send OTP' : 'Login'}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E9F2FF]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#666]">New doctor?</span>
              </div>
            </div>

            {/* Register Link */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-xl border-[#3A8DFF] text-[#3A8DFF] hover:bg-[#E9F2FF]"
            >
              Register as Doctor
            </Button>
          </form>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#999]">
              By logging in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
