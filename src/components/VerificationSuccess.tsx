import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

type VerificationSuccessProps = {
  onContinue: () => void;
};

export function VerificationSuccess({ onContinue }: VerificationSuccessProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="relative mx-auto mb-6">
            {/* Animated success circle */}
            <div className="w-32 h-32 bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] rounded-full mx-auto flex items-center justify-center animate-scale-in shadow-lg">
              <CheckCircle className="w-16 h-16 text-white" strokeWidth={3} />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-[#2E7D3220] rounded-full animate-ping-slow"></div>
          </div>

          <h1 className="text-[#1A1A1A] mb-3">
            Your Verification Is Complete! 🎉
          </h1>
          <p className="text-[#666] leading-relaxed">
            Your documents have been successfully verified. You can now start managing appointments, video consultations, and your doctor profile.
          </p>
        </div>

        {/* Checklist */}
        <div className="bg-[#F7F9FC] rounded-3xl p-6 mb-8">
          <div className="space-y-4">
            {[
              'Profile Verified',
              'Video Consult Enabled',
              'Appointments Activated'
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7L6 10L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onContinue}
          className="w-full h-14 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Go to Dashboard
        </Button>

        {/* Optional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#999]">
            Welcome to the HealthConnect professional network
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes slide-in {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
}
