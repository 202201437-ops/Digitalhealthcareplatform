import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  User, 
  Heart, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Edit
} from 'lucide-react';

type PatientProfileProps = {
  onBack: () => void;
  onLogout: () => void;
};

const savedDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Anderson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1685022036245-380a447e03bf?w=400'
  },
];

const recentPayments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Anderson',
    amount: 850,
    date: 'Nov 15, 2024',
    status: 'Completed'
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    amount: 650,
    date: 'Nov 8, 2024',
    status: 'Completed'
  },
];

export function PatientProfile({ onBack, onLogout }: PatientProfileProps) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] px-6 pt-4 pb-20">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full text-white hover:bg-white/20 mb-4" 
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile Card */}
      <div className="px-6 -mt-16 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">👤</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[#1A1A1A] mb-1">Rahul Verma</h2>
                  <p className="text-sm text-[#666]">+91 98765 43210</p>
                  <p className="text-sm text-[#666]">rahul.verma@email.com</p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Edit className="w-5 h-5 text-[#3A8DFF]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E9F2FF]">
            <div className="text-center">
              <div className="text-[#3A8DFF] mb-1">12</div>
              <p className="text-xs text-[#666]">Appointments</p>
            </div>
            <div className="text-center border-x border-[#E9F2FF]">
              <div className="text-[#3A8DFF] mb-1">8</div>
              <p className="text-xs text-[#666]">Reports</p>
            </div>
            <div className="text-center">
              <div className="text-[#3A8DFF] mb-1">2</div>
              <p className="text-xs text-[#666]">Saved Doctors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Health Info */}
      <div className="px-6 mb-6">
        <h3 className="text-[#1A1A1A] mb-3">Health Information</h3>
        <div className="bg-white rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#666] mb-1">Blood Group</p>
              <p className="text-[#1A1A1A]">O+</p>
            </div>
            <div>
              <p className="text-xs text-[#666] mb-1">Age</p>
              <p className="text-[#1A1A1A]">32 years</p>
            </div>
            <div>
              <p className="text-xs text-[#666] mb-1">Height</p>
              <p className="text-[#1A1A1A]">175 cm</p>
            </div>
            <div>
              <p className="text-xs text-[#666] mb-1">Weight</p>
              <p className="text-[#1A1A1A]">72 kg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Doctors */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#1A1A1A]">Saved Doctors</h3>
          <Button variant="link" className="text-[#3A8DFF] p-0 h-auto">View All</Button>
        </div>
        <div className="space-y-3">
          {savedDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl p-4 flex items-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="text-[#1A1A1A]">{doctor.name}</h4>
                <p className="text-sm text-[#666]">{doctor.specialty}</p>
              </div>
              <Heart className="w-5 h-5 fill-[#FF4444] text-[#FF4444]" />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#1A1A1A]">Recent Payments</h3>
          <Button variant="link" className="text-[#3A8DFF] p-0 h-auto">View All</Button>
        </div>
        <div className="space-y-3">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="bg-white rounded-2xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-[#1A1A1A]">{payment.doctor}</h4>
                  <p className="text-sm text-[#666]">{payment.date}</p>
                </div>
                <Badge className="bg-[#E5F5E5] text-[#2E7D32]">
                  {payment.status}
                </Badge>
              </div>
              <p className="text-[#3A8DFF]">₹{payment.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Menu */}
      <div className="px-6">
        <h3 className="text-[#1A1A1A] mb-3">Settings</h3>
        <div className="bg-white rounded-2xl overflow-hidden">
          {[
            { icon: User, label: 'Edit Profile', color: '#3A8DFF' },
            { icon: CreditCard, label: 'Payment Methods', color: '#3A8DFF' },
            { icon: Settings, label: 'App Settings', color: '#3A8DFF' },
            { icon: HelpCircle, label: 'Help & Support', color: '#3A8DFF' },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-4 px-4 py-4 hover:bg-[#F7F9FC] transition-colors border-b border-[#E9F2FF] last:border-0"
            >
              <div className="w-10 h-10 bg-[#E9F2FF] rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <span className="flex-1 text-left text-[#1A1A1A]">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-[#666]" />
            </button>
          ))}
          
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-4 py-4 hover:bg-[#FFE5E5] transition-colors"
          >
            <div className="w-10 h-10 bg-[#FFE5E5] rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-[#FF4444]" />
            </div>
            <span className="flex-1 text-left text-[#FF4444]">Logout</span>
            <ChevronRight className="w-5 h-5 text-[#666]" />
          </button>
        </div>
      </div>
    </div>
  );
}
