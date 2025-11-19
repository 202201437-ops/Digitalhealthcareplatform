import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, MapPin, Star, Award, Calendar, Video } from 'lucide-react';
import type { Doctor } from '../App';

type DoctorProfileProps = {
  doctor: Doctor;
  onBook: () => void;
  onBack: () => void;
};

const reviews = [
  {
    id: 1,
    name: 'Amit Patel',
    rating: 5,
    date: 'Nov 10, 2024',
    comment: 'Excellent doctor! Very patient and thorough in explaining the diagnosis.'
  },
  {
    id: 2,
    name: 'Sneha Reddy',
    rating: 4,
    date: 'Nov 5, 2024',
    comment: 'Great experience. The consultation was very helpful and professional.'
  },
  {
    id: 3,
    name: 'Rahul Singh',
    rating: 5,
    date: 'Oct 28, 2024',
    comment: 'Highly recommended! Very knowledgeable and caring doctor.'
  },
];

export function DoctorProfile({ doctor, onBook, onBack }: DoctorProfileProps) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Doctor Info Card */}
      <div className="bg-white px-6 py-6 mb-4">
        <div className="flex gap-4 mb-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-28 h-28 rounded-2xl object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-[#1A1A1A]">{doctor.name}</h2>
              {doctor.verified && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#3A8DFF"/>
                  <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className="text-[#666] mb-2">{doctor.specialty}</p>
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
              <span className="text-[#1A1A1A]">{doctor.rating}</span>
              <span className="text-[#666]">({doctor.reviews} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="bg-[#E9F2FF] text-[#3A8DFF]">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E9F2FF]">
          <div className="text-center">
            <div className="text-[#3A8DFF] mb-1">{doctor.experience}+</div>
            <p className="text-xs text-[#666]">Years Exp.</p>
          </div>
          <div className="text-center border-x border-[#E9F2FF]">
            <div className="text-[#3A8DFF] mb-1">{doctor.reviews}+</div>
            <p className="text-xs text-[#666]">Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-[#3A8DFF] mb-1">98%</div>
            <p className="text-xs text-[#666]">Satisfied</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white px-6 py-6 mb-4">
        <h3 className="text-[#1A1A1A] mb-3">About</h3>
        <p className="text-[#666] leading-relaxed">{doctor.about}</p>
      </div>

      {/* Qualifications */}
      <div className="bg-white px-6 py-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-[#3A8DFF]" />
          <h3 className="text-[#1A1A1A]">Qualifications</h3>
        </div>
        <div className="space-y-2">
          {doctor.qualifications.map((qual, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3A8DFF] rounded-full"></div>
              <p className="text-[#666]">{qual}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-white px-6 py-6 mb-4">
        <h3 className="text-[#1A1A1A] mb-3">Services</h3>
        <div className="flex flex-wrap gap-2">
          {doctor.services.map((service) => (
            <div key={service} className="bg-[#F7F9FC] border border-[#E9F2FF] rounded-xl px-4 py-2">
              <p className="text-[#1A1A1A] text-sm">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white px-6 py-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-[#3A8DFF]" />
          <h3 className="text-[#1A1A1A]">Availability</h3>
        </div>
        <p className="text-[#666]">{doctor.availability}</p>
      </div>

      {/* Reviews */}
      <div className="bg-white px-6 py-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#1A1A1A]">Patient Reviews</h3>
          <Button variant="link" className="text-[#3A8DFF] p-0 h-auto">
            See All
          </Button>
        </div>
        
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#F7F9FC] rounded-2xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[#1A1A1A]">{review.name}</p>
                  <p className="text-xs text-[#666]">{review.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  <span className="text-sm text-[#1A1A1A]">{review.rating}</span>
                </div>
              </div>
              <p className="text-sm text-[#666]">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="bg-white px-6 py-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-[#3A8DFF]" />
          <h3 className="text-[#1A1A1A]">Clinic Location</h3>
        </div>
        <p className="text-[#666] mb-3">
          Apollo Clinic, 2nd Floor, Marine Drive, Mumbai - 400020
        </p>
        <div className="bg-[#E9F2FF] rounded-2xl h-40 flex items-center justify-center">
          <p className="text-[#3A8DFF]">Map View</p>
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9F2FF] px-6 py-4 flex gap-3">
        <div className="flex-1">
          <p className="text-xs text-[#666]">Consultation Fee</p>
          <p className="text-[#3A8DFF]">₹{doctor.fees}</p>
        </div>
        <Button 
          variant="outline"
          className="flex-1 h-12 rounded-xl border-[#3A8DFF] text-[#3A8DFF] flex items-center gap-2"
          onClick={onBook}
        >
          <Calendar className="w-4 h-4" />
          Book Clinic
        </Button>
        <Button 
          className="flex-1 h-12 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl flex items-center gap-2"
          onClick={onBook}
        >
          <Video className="w-4 h-4" />
          Video Call
        </Button>
      </div>
    </div>
  );
}
