import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { ArrowLeft, Search, SlidersHorizontal, Star, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import type { Doctor } from '../App';

type DoctorSearchProps = {
  onDoctorSelect: (doctor: Doctor) => void;
  onBack: () => void;
};

const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Anderson',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.8,
    reviews: 234,
    fees: 800,
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3J8ZW58MXx8fHwxNzYzMzkxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1685022036245-380a447e03bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcGh5c2ljaWFufGVufDF8fHx8MTc2MzM3NTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ0MjExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    verified: true,
    languages: ['English', 'Hindi', 'Tamil'],
    gender: 'Female',
    about: 'Child healthcare specialist focused on preventive care and childhood development.',
    qualifications: ['MBBS', 'MD Pediatrics'],
    services: ['Vaccination', 'Growth Monitoring', 'Child Development', 'Nutrition Counseling'],
    availability: 'Mon-Sat, 8 AM - 2 PM'
  },
  {
    id: '4',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedic',
    experience: 18,
    rating: 4.6,
    reviews: 201,
    fees: 900,
    image: 'https://images.unsplash.com/photo-1758691461513-88a0aef72160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzYzNDQ5MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    verified: true,
    languages: ['English', 'Hindi'],
    gender: 'Male',
    about: 'Expert in joint replacement and sports injury management.',
    qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Sports Medicine'],
    services: ['Joint Replacement', 'Fracture Care', 'Sports Injury', 'Arthroscopy'],
    availability: 'Tue-Sun, 11 AM - 5 PM'
  },
];

export function DoctorSearch({ onDoctorSelect, onBack }: DoctorSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [feeRange, setFeeRange] = useState([0, 2000]);
  const [minExperience, setMinExperience] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Marathi'];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = selectedGender.length === 0 || selectedGender.includes(doctor.gender);
    const matchesFees = doctor.fees >= feeRange[0] && doctor.fees <= feeRange[1];
    const matchesExperience = doctor.experience >= minExperience;
    const matchesRating = doctor.rating >= minRating;
    const matchesLanguages = selectedLanguages.length === 0 || 
                             selectedLanguages.some(lang => doctor.languages.includes(lang));

    return matchesSearch && matchesGender && matchesFees && matchesExperience && 
           matchesRating && matchesLanguages;
  });

  const toggleGender = (gender: string) => {
    setSelectedGender(prev => 
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  const clearFilters = () => {
    setSelectedGender([]);
    setSelectedLanguages([]);
    setFeeRange([0, 2000]);
    setMinExperience(0);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-[#1A1A1A] flex-1">Find Doctors</h2>
        </div>
        
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
            <Input
              placeholder="Search by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-10 pr-4 rounded-xl border-[#E9F2FF]"
            />
          </div>
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-[#E9F2FF]">
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] rounded-t-3xl">
              <SheetHeader>
                <SheetTitle className="text-[#1A1A1A]">Filters</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-6 overflow-y-auto h-[calc(90vh-180px)] pb-6">
                {/* Gender */}
                <div>
                  <label className="block text-[#1A1A1A] mb-3">Gender</label>
                  <div className="flex gap-3">
                    {['Male', 'Female', 'Any'].map((gender) => (
                      <button
                        key={gender}
                        onClick={() => toggleGender(gender)}
                        className={`px-6 py-2 rounded-xl border-2 transition-all ${
                          selectedGender.includes(gender)
                            ? 'bg-[#3A8DFF] border-[#3A8DFF] text-white'
                            : 'bg-white border-[#E9F2FF] text-[#1A1A1A]'
                        }`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consultation Fees */}
                <div>
                  <label className="block text-[#1A1A1A] mb-3">
                    Consultation Fees: ₹{feeRange[0]} - ₹{feeRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={2000}
                    step={100}
                    value={feeRange}
                    onValueChange={setFeeRange}
                    className="mt-2"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-[#1A1A1A] mb-3">
                    Minimum Experience: {minExperience} years
                  </label>
                  <Slider
                    min={0}
                    max={30}
                    step={1}
                    value={[minExperience]}
                    onValueChange={(value) => setMinExperience(value[0])}
                    className="mt-2"
                  />
                </div>

                {/* Languages */}
                <div>
                  <label className="block text-[#1A1A1A] mb-3">Languages</label>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => toggleLanguage(language)}
                        className={`px-4 py-2 rounded-xl border-2 transition-all ${
                          selectedLanguages.includes(language)
                            ? 'bg-[#3A8DFF] border-[#3A8DFF] text-white'
                            : 'bg-white border-[#E9F2FF] text-[#1A1A1A]'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-[#1A1A1A] mb-3">
                    Minimum Rating: {minRating.toFixed(1)} ⭐
                  </label>
                  <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={[minRating]}
                    onValueChange={(value) => setMinRating(value[0])}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-[#E9F2FF] flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 h-12 rounded-xl border-[#3A8DFF] text-[#3A8DFF]"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
                <Button 
                  className="flex-1 h-12 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-4">
        <p className="text-[#666] mb-4">{filteredDoctors.length} doctors found</p>
        
        <div className="space-y-3">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 mb-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-xl object-cover"
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
                  <div className="flex items-center gap-3 text-sm text-[#666] mb-2">
                    <span>{doctor.experience} yrs</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.slice(0, 2).map((lang) => (
                      <Badge key={lang} variant="secondary" className="bg-[#E9F2FF] text-[#3A8DFF] text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-[#E9F2FF]">
                <div>
                  <p className="text-xs text-[#666]">Consultation Fee</p>
                  <p className="text-[#3A8DFF]">₹{doctor.fees}</p>
                </div>
                <Button 
                  className="bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl px-6"
                  onClick={() => onDoctorSelect(doctor)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
