import { Button } from './ui/button';
import { User, Stethoscope } from 'lucide-react';
import type { UserRole } from '../App';

type RoleSelectionProps = {
  onRoleSelect: (role: UserRole) => void;
};

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
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
          <p className="text-[#666]">Who are you using this app as?</p>
        </div>

        {/* Role Cards */}
        <div className="space-y-4 mb-6">
          {/* Patient Card */}
          <button
            onClick={() => onRoleSelect('patient')}
            className="w-full bg-white border-2 border-[#E9F2FF] hover:border-[#3A8DFF] hover:bg-[#F7F9FC] rounded-3xl p-6 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[#1A1A1A] mb-2">Patient</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  Book doctors, video consults & manage your health
                </p>
              </div>
            </div>
          </button>

          {/* Doctor Card */}
          <button
            onClick={() => onRoleSelect('doctor')}
            className="w-full bg-white border-2 border-[#E9F2FF] hover:border-[#3A8DFF] hover:bg-[#F7F9FC] rounded-3xl p-6 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white border-2 border-[#3A8DFF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E9F2FF] transition-all">
                <Stethoscope className="w-8 h-8 text-[#3A8DFF]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[#1A1A1A] mb-2">Doctor</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  Manage appointments, video consults & earnings
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Help Text */}
        <p className="text-center text-xs text-[#999]">
          You can switch roles anytime from settings
        </p>
      </div>
    </div>
  );
}
