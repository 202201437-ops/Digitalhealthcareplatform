import { Button } from './ui/button';
import { 
  Calendar, 
  Video, 
  DollarSign, 
  Users, 
  Clock,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

type DoctorDashboardProps = {
  onLogout: () => void;
};

const todayAppointments = [
  {
    id: 1,
    patient: 'Amit Patel',
    time: '10:00 AM',
    type: 'Video Consultation',
    status: 'upcoming'
  },
  {
    id: 2,
    patient: 'Priya Sharma',
    time: '11:30 AM',
    type: 'Clinic Visit',
    status: 'upcoming'
  },
  {
    id: 3,
    patient: 'Rahul Verma',
    time: '2:00 PM',
    type: 'Video Consultation',
    status: 'upcoming'
  },
];

export function DoctorDashboard({ onLogout }: DoctorDashboardProps) {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white mb-1">Dr. Sarah Anderson</h1>
            <p className="text-white/90 text-sm">Cardiologist</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Calendar, value: '12', label: 'Today', color: 'white' },
            { icon: Users, value: '234', label: 'Patients', color: 'white' },
            { icon: DollarSign, value: '₹45k', label: 'Earned', color: 'white' },
            { icon: TrendingUp, value: '4.8', label: 'Rating', color: 'white' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
                <Icon className="w-5 h-5 text-white mx-auto mb-2" />
                <div className="text-white mb-1">{stat.value}</div>
                <p className="text-xs text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Today's Appointments */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#1A1A1A]">Today's Appointments</h3>
            <Button variant="link" className="text-[#3A8DFF] p-0 h-auto">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-[#1A1A1A] mb-1">{appointment.patient}</h4>
                    <div className="flex items-center gap-3 text-sm text-[#666]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {appointment.time}
                      </span>
                      <span>•</span>
                      <span>{appointment.type}</span>
                    </div>
                  </div>
                  <div className="bg-[#E9F2FF] text-[#3A8DFF] text-xs px-3 py-1 rounded-full">
                    Upcoming
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 h-10 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    Join Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-10 rounded-xl border-[#E9F2FF] text-[#1A1A1A]"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-[#1A1A1A] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Calendar, label: 'Schedule', color: '#3A8DFF', bg: '#E9F2FF' },
              { icon: Users, label: 'Patients', color: '#2E7D32', bg: '#E5F5E5' },
              { icon: DollarSign, label: 'Earnings', color: '#FF9800', bg: '#FFF4E5' },
              { icon: Settings, label: 'Settings', color: '#666', bg: '#F7F9FC' },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: action.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: action.color }} />
                  </div>
                  <p className="text-[#1A1A1A]">{action.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h3 className="text-[#1A1A1A] mb-4">This Week</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#666]">Total Consultations</span>
              <span className="text-[#3A8DFF]">48</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#666]">New Patients</span>
              <span className="text-[#3A8DFF]">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#666]">Revenue Generated</span>
              <span className="text-[#3A8DFF]">₹38,400</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#E9F2FF]">
              <span className="text-[#1A1A1A]">Average Rating</span>
              <div className="flex items-center gap-2">
                <span className="text-[#FFB800]">⭐</span>
                <span className="text-[#3A8DFF]">4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full h-12 rounded-xl border-[#FF4444] text-[#FF4444] hover:bg-[#FFE5E5] flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
