import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ArrowLeft, User, Mail, MapPin, Calendar } from 'lucide-react';

type ProfileCompletionProps = {
  onComplete: () => void;
  onBack: () => void;
};

export function ProfileCompletion({ onComplete, onBack }: ProfileCompletionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    location: '',
    bloodGroup: '',
    healthHistory: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (formData.fullName && formData.age && formData.gender && formData.email && formData.location) {
      onComplete();
    }
  };

  const isFormValid = () => {
    return formData.fullName && formData.age && formData.gender && formData.email && formData.location;
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h2 className="text-[#1A1A1A]">Complete Your Profile</h2>
            <p className="text-sm text-[#666]">Help us serve you better</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl flex items-center justify-center">
            <User className="w-6 h-6 text-[#3A8DFF]" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#666]">Profile Completion</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 bg-[#E9F2FF] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#3A8DFF] transition-all"
                  style={{ 
                    width: `${Object.values(formData).filter(v => v !== '').length / Object.keys(formData).length * 100}%` 
                  }}
                />
              </div>
              <span className="text-xs text-[#3A8DFF]">
                {Math.round(Object.values(formData).filter(v => v !== '').length / Object.keys(formData).length * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 pb-24">
        <div className="bg-white rounded-2xl p-6 space-y-6">
          {/* Full Name */}
          <div>
            <Label className="text-[#1A1A1A] mb-2 flex items-center gap-2">
              Full Name <span className="text-[#FF4444]">*</span>
            </Label>
            <Input
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="h-12 rounded-xl border-[#E9F2FF]"
              required
            />
          </div>

          {/* Age and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-[#1A1A1A] mb-2 flex items-center gap-2">
                Age <span className="text-[#FF4444]">*</span>
              </Label>
              <Input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="h-12 rounded-xl border-[#E9F2FF]"
                required
              />
            </div>
            <div>
              <Label className="text-[#1A1A1A] mb-2 flex items-center gap-2">
                Gender <span className="text-[#FF4444]">*</span>
              </Label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full h-12 rounded-xl border-2 border-[#E9F2FF] px-3 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#3A8DFF]"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Email */}
          <div>
            <Label className="text-[#1A1A1A] mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address <span className="text-[#FF4444]">*</span>
            </Label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 rounded-xl border-[#E9F2FF]"
              required
            />
          </div>

          {/* Location */}
          <div>
            <Label className="text-[#1A1A1A] mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location <span className="text-[#FF4444]">*</span>
            </Label>
            <Input
              placeholder="City, State"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="h-12 rounded-xl border-[#E9F2FF]"
              required
            />
          </div>

          {/* Blood Group */}
          <div>
            <Label className="text-[#1A1A1A] mb-2">
              Blood Group <span className="text-[#666] text-sm">(Optional)</span>
            </Label>
            <select
              value={formData.bloodGroup}
              onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
              className="w-full h-12 rounded-xl border-2 border-[#E9F2FF] px-3 bg-white text-[#1A1A1A] focus:outline-none focus:border-[#3A8DFF]"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Health History */}
          <div>
            <Label className="text-[#1A1A1A] mb-2">
              Health History <span className="text-[#666] text-sm">(Optional but recommended)</span>
            </Label>
            <Textarea
              placeholder="Any chronic conditions, allergies, or medications you're currently taking..."
              value={formData.healthHistory}
              onChange={(e) => setFormData({ ...formData, healthHistory: e.target.value })}
              className="min-h-[100px] rounded-xl border-[#E9F2FF]"
            />
            <p className="text-xs text-[#666] mt-2">
              This information helps doctors provide better care
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#E9F2FF] rounded-2xl p-4 mt-4">
          <p className="text-sm text-[#3A8DFF]">
            <span className="inline-block mr-2">ℹ️</span>
            Your information is secure and will only be shared with your healthcare providers
          </p>
        </div>
      </form>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9F2FF] px-6 py-4">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full h-14 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isFormValid()}
        >
          Complete Profile & Continue
        </Button>
      </div>
    </div>
  );
}
