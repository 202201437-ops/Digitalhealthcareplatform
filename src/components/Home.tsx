import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Bell, Search, Calendar, Video, FileText, Star } from 'lucide-react';
import type { Screen } from '../App';

type HomeProps = {
  onNavigate: (screen: Screen) => void;
};

const specialties = [
  { id: 1, name: 'Cardiology', icon: '❤️', color: '#FFE5E5' },
  { id: 2, name: 'Dermatology', icon: '🩺', color: '#E5F5FF' },
  { id: 3, name: 'Pediatrics', icon: '👶', color: '#FFF5E5' },
  { id: 4, name: 'Orthopedics', icon: '🦴', color: '#E5FFE5' },
  { id: 5, name: 'Neurology', icon: '🧠', color: '#F5E5FF' },
  { id: 6, name: 'General', icon: '⚕️', color: '#FFE5F5' },
];

const topDoctors = [
  {
    id: '1',
    name: 'Dr. Sarah Anderson',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.8,
    reviews: 234,
    fees: 800,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    verified: true,
    languages: ['English', 'Hindi'],
    gender: 'Female',
    about: 'Experienced cardiologist specializing in preventive cardiology and heart disease management.',
    qualifications: ['MBBS', 'MD Cardiology', 'Fellowship in Interventional Cardiology'],
    services: ['ECG', 'Echo', 'Stress Test', 'Heart Disease Consultation'],
    availability: 'Mon-Sat, 9 AM - 6 PM'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    experience: 12,
    rating: 4.9,
    reviews: 189,
    fees: 600,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    verified: true,
    languages: ['English'],
    gender: 'Male',
    about: 'Skin specialist with expertise in cosmetic dermatology and skin disorder treatment.',
    qualifications: ['MBBS', 'MD Dermatology'],
    services: ['Acne Treatment', 'Skin Allergy', 'Cosmetic Procedures', 'Hair Treatment'],
    availability: 'Mon-Fri, 10 AM - 8 PM'
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    experience: 10,
    rating: 4.7,
    reviews: 156,
    fees: 500,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
    verified: true,
    languages: ['English', 'Hindi', 'Tamil'],
    gender: 'Female',
    about: 'Child healthcare specialist focused on preventive care and childhood development.',
    qualifications: ['MBBS', 'MD Pediatrics'],
    services: ['Vaccination', 'Growth Monitoring', 'Child Development', 'Nutrition Counseling'],
    availability: 'Mon-Sat, 8 AM - 2 PM'
  },
];

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-20">
      {/* Top Bar */}
      <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#3A8DFF]" />
          <div>
            <p className="text-xs text-[#666]">Location</p>
            <p className="text-[#1A1A1A]">Mumbai, India</p>
          </div>
        </div>
        <button className="relative">
          <Bell className="w-6 h-6 text-[#1A1A1A]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF4444] rounded-full"></span>
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
          <Input
            placeholder="Search doctors, specialties..."
            className="h-14 pl-12 pr-4 rounded-2xl border-0 bg-white shadow-sm"
            onClick={() => onNavigate('search')}
            readOnly
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button 
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            onClick={() => onNavigate('search')}
          >
            <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl mx-auto mb-2 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#3A8DFF]" />
            </div>
            <p className="text-sm text-[#1A1A1A]">Book Appointment</p>
          </button>
          <button 
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            onClick={() => onNavigate('search')}
          >
            <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl mx-auto mb-2 flex items-center justify-center">
              <Video className="w-6 h-6 text-[#3A8DFF]" />
            </div>
            <p className="text-sm text-[#1A1A1A]">Online Consult</p>
          </button>
          <button 
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            onClick={() => onNavigate('records')}
          >
            <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl mx-auto mb-2 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#3A8DFF]" />
            </div>
            <p className="text-sm text-[#1A1A1A]">Upload Reports</p>
          </button>
        </div>

        {/* Specialties */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#1A1A1A]">Specialties</h3>
            <Button variant="link" className="text-[#3A8DFF] p-0 h-auto">View All</Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                className="flex-shrink-0 bg-white rounded-2xl p-4 w-32 text-center shadow-sm hover:shadow-md transition-shadow"
                onClick={() => onNavigate('search')}
              >
                <div 
                  className="w-16 h-16 rounded-xl mx-auto mb-2 flex items-center justify-center text-2xl"
                  style={{ backgroundColor: specialty.color }}
                >
                  {specialty.icon}
                </div>
                <p className="text-sm text-[#1A1A1A]">{specialty.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Top Rated Doctors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#1A1A1A]">Top Rated Doctors</h3>
            <Button 
              variant="link" 
              className="text-[#3A8DFF] p-0 h-auto"
              onClick={() => onNavigate('search')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {topDoctors.map((doctor) => (
              <button
                key={doctor.id}
                className="w-full bg-white rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => onNavigate('search')}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[#1A1A1A]">{doctor.name}</h4>
                        {doctor.verified && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#3A8DFF"/>
                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-[#666]">{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#666]">
                    <span>{doctor.experience} years exp.</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                      <span>{doctor.rating}</span>
                      <span>({doctor.reviews})</span>
                    </div>
                  </div>
                  <p className="text-[#3A8DFF] mt-1">₹{doctor.fees}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9F2FF] px-6 py-3 flex justify-around">
        <button className="flex flex-col items-center gap-1 text-[#3A8DFF]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#666]" onClick={() => onNavigate('search')}>
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#666]" onClick={() => onNavigate('records')}>
          <FileText className="w-6 h-6" />
          <span className="text-xs">Records</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#666]" onClick={() => onNavigate('profile')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M5 20C5 17.2386 7.23858 15 10 15H14C16.7614 15 19 17.2386 19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
