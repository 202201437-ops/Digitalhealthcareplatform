import { useState } from 'react';
import { Home } from './components/Home';
import { DoctorSearch } from './components/DoctorSearch';
import { DoctorProfile } from './components/DoctorProfile';
import { AppointmentBooking } from './components/AppointmentBooking';
import { VideoConsultation } from './components/VideoConsultation';
import { MedicalRecords } from './components/MedicalRecords';
import { PatientProfile } from './components/PatientProfile';
import { Onboarding } from './components/Onboarding';
import { RoleSelection } from './components/RoleSelection';
import { Login } from './components/Login';
import { ProfileCompletion } from './components/ProfileCompletion';
import { DoctorLogin } from './components/DoctorLogin';
import { DoctorDashboard } from './components/DoctorDashboard';
import { VerificationPending } from './components/VerificationPending';
import { VerificationSuccess } from './components/VerificationSuccess';

export type Screen = 
  | 'onboarding'
  | 'role-selection'
  | 'login'
  | 'doctor-login'
  | 'profile-completion'
  | 'verification-pending'
  | 'verification-success'
  | 'home'
  | 'doctor-dashboard'
  | 'search'
  | 'doctor-profile'
  | 'booking'
  | 'video-call'
  | 'records'
  | 'profile';

export type UserRole = 'patient' | 'doctor' | null;

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  fees: number;
  image: string;
  verified: boolean;
  languages: string[];
  gender: string;
  about: string;
  qualifications: string[];
  services: string[];
  availability: string;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isDoctorVerified, setIsDoctorVerified] = useState(false);
  const [hasSeenSuccessScreen, setHasSeenSuccessScreen] = useState(false);

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setCurrentScreen('doctor-profile');
  };

  const handleRoleSelection = (role: UserRole) => {
    setUserRole(role);
    if (role === 'patient') {
      setCurrentScreen('login');
    } else if (role === 'doctor') {
      setCurrentScreen('doctor-login');
    }
  };

  const handlePatientLogin = () => {
    setIsAuthenticated(true);
    // Check if profile is complete
    if (!isProfileComplete) {
      setCurrentScreen('profile-completion');
    } else {
      setCurrentScreen('home');
    }
  };

  const handleDoctorLogin = () => {
    setIsAuthenticated(true);
    // Check if doctor is verified
    if (!isDoctorVerified) {
      setCurrentScreen('verification-pending');
    } else if (!hasSeenSuccessScreen) {
      // Show success screen first time after verification
      setCurrentScreen('verification-success');
    } else {
      setCurrentScreen('doctor-dashboard');
    }
  };

  const handleProfileCompletion = () => {
    setIsProfileComplete(true);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setIsProfileComplete(false);
    setIsDoctorVerified(false);
    setHasSeenSuccessScreen(false);
    setCurrentScreen('onboarding');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onContinue={() => setCurrentScreen('role-selection')} />;
      case 'role-selection':
        return <RoleSelection onRoleSelect={handleRoleSelection} />;
      case 'login':
        return <Login onLogin={handlePatientLogin} onBack={() => setCurrentScreen('role-selection')} />;
      case 'doctor-login':
        return <DoctorLogin onLogin={handleDoctorLogin} onBack={() => setCurrentScreen('role-selection')} />;
      case 'profile-completion':
        return <ProfileCompletion onComplete={handleProfileCompletion} onBack={handleLogout} />;
      case 'verification-pending':
        return <VerificationPending 
          onViewStatus={() => {}} 
          onEditProfile={() => {}}
          onLogout={handleLogout}
          onSimulateApproval={() => {
            setIsDoctorVerified(true);
            setCurrentScreen('verification-success');
          }}
        />;
      case 'verification-success':
        return <VerificationSuccess onContinue={() => {
          setHasSeenSuccessScreen(true);
          setCurrentScreen('doctor-dashboard');
        }} />;
      case 'doctor-dashboard':
        return <DoctorDashboard onLogout={handleLogout} />;
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'search':
        return <DoctorSearch onDoctorSelect={handleDoctorSelect} onBack={() => setCurrentScreen('home')} />;
      case 'doctor-profile':
        return selectedDoctor ? (
          <DoctorProfile 
            doctor={selectedDoctor} 
            onBook={() => setCurrentScreen('booking')}
            onBack={() => setCurrentScreen('search')}
          />
        ) : null;
      case 'booking':
        return selectedDoctor ? (
          <AppointmentBooking 
            doctor={selectedDoctor}
            onBack={() => setCurrentScreen('doctor-profile')}
            onSuccess={() => setCurrentScreen('home')}
          />
        ) : null;
      case 'video-call':
        return selectedDoctor ? (
          <VideoConsultation 
            doctor={selectedDoctor}
            onEnd={() => setCurrentScreen('home')}
          />
        ) : null;
      case 'records':
        return <MedicalRecords onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <PatientProfile onBack={() => setCurrentScreen('home')} onLogout={handleLogout} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {renderScreen()}
    </div>
  );
}