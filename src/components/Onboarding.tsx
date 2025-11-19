import { Button } from './ui/button';
import { Globe } from 'lucide-react';

type OnboardingProps = {
  onContinue: () => void;
};

export function Onboarding({ onContinue }: OnboardingProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] rounded-3xl mx-auto mb-4 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5V35M5 20H35" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-[#1A1A1A] mb-2">HealthConnect</h1>
          <p className="text-[#666]">Consult Doctors Anytime, Anywhere</p>
        </div>

        {/* Illustration */}
        <div className="bg-gradient-to-br from-[#E9F2FF] to-[#F7F9FC] rounded-3xl p-8 mb-8">
          <svg width="100%" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Doctor */}
            <circle cx="100" cy="80" r="30" fill="#3A8DFF"/>
            <rect x="70" y="110" width="60" height="80" rx="10" fill="#3A8DFF"/>
            {/* Patient */}
            <circle cx="200" cy="80" r="30" fill="#E9F2FF" stroke="#3A8DFF" strokeWidth="3"/>
            <rect x="170" y="110" width="60" height="80" rx="10" fill="#E9F2FF" stroke="#3A8DFF" strokeWidth="3"/>
            {/* Connection line */}
            <path d="M130 150 Q150 140 170 150" stroke="#3A8DFF" strokeWidth="3" strokeDasharray="5,5"/>
          </svg>
        </div>

        {/* CTAs */}
        <div className="space-y-3 mb-6">
          <Button 
            className="w-full h-14 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-2xl"
            onClick={onContinue}
          >
            Login / Sign Up
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-14 border-[#3A8DFF] text-[#3A8DFF] rounded-2xl hover:bg-[#E9F2FF]"
          >
            Continue as Guest
          </Button>
        </div>

        {/* Language Selector */}
        <button className="flex items-center justify-center gap-2 w-full text-[#666] hover:text-[#3A8DFF] transition-colors">
          <Globe className="w-5 h-5" />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
