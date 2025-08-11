import React from 'react';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '../ui/DraggableCard';

export default function TeamDraggableCards() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director & Founder",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2340&auto=format&fit=crop",
      credentials: "MD, CCFP, Board Certified",
      experience: "15+ years",
      specialties: ["Advanced Injectables", "Facial Rejuvenation", "Body Contouring"],
      className: "absolute top-10 left-[15%] rotate-[-5deg] z-10",
    },
    {
      name: "Dr. Michael Roberts",
      role: "Lead Aesthetic Physician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2340&auto=format&fit=crop",
      credentials: "MD, FRCPC Dermatology",
      experience: "12+ years",
      specialties: ["Laser Treatments", "Skin Resurfacing", "Medical Dermatology"],
      className: "absolute top-32 left-[35%] rotate-[3deg] z-20",
    },
    {
      name: "Jennifer Park",
      role: "Senior Nurse Injector",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2387&auto=format&fit=crop",
      credentials: "RN, Certified Aesthetic Nurse",
      experience: "8+ years",
      specialties: ["Botox & Fillers", "PDO Threads", "IV Therapy"],
      className: "absolute top-5 right-[35%] rotate-[-7deg] z-15",
    },
    {
      name: "Maria Silva",
      role: "Lead Aesthetic Consultant",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2387&auto=format&fit=crop",
      credentials: "Certified Medical Aesthetician",
      experience: "10+ years",
      specialties: ["Chemical Peels", "Microneedling", "Skincare Consultation"],
      className: "absolute top-40 right-[15%] rotate-[5deg] z-25",
    },
    {
      name: "Dr. Emily Zhang",
      role: "Cosmetic Surgeon",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2387&auto=format&fit=crop",
      credentials: "MD, FRCSC Plastic Surgery",
      experience: "18+ years",
      specialties: ["Surgical Procedures", "Non-Surgical Lifts", "Body Sculpting"],
      className: "absolute top-60 left-[25%] rotate-[-4deg] z-18",
    },
    {
      name: "Sophie Laurent",
      role: "Laser Specialist",
      image: "https://images.unsplash.com/photo-1580281658524-b8e0bbe5751b?q=80&w=2342&auto=format&fit=crop",
      credentials: "Certified Laser Technician",
      experience: "6+ years",
      specialties: ["Laser Hair Removal", "IPL Therapy", "Tattoo Removal"],
      className: "absolute top-20 left-[50%] rotate-[6deg] z-22",
    },
    {
      name: "Nina Rodriguez",
      role: "Client Care Coordinator",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2340&auto=format&fit=crop",
      credentials: "Patient Relations Specialist",
      experience: "5+ years",
      specialties: ["Treatment Planning", "Client Education", "Post-Care Support"],
      className: "absolute top-48 right-[25%] rotate-[-3deg] z-12",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Drag and explore our talented team of aesthetic professionals. Each member brings unique expertise and passion to help you achieve your beauty goals.
        </p>
      </div>
      
      <DraggableCardContainer className="relative flex min-h-[800px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-olive-50 rounded-3xl">
        <p className="absolute top-1/2 mx-auto max-w-md -translate-y-1/2 text-center text-2xl font-display font-bold text-sage-300/50 md:text-3xl select-none pointer-events-none z-0">
          Drag the cards to explore our amazing team
        </p>
        
        {teamMembers.map((member) => (
          <DraggableCardBody key={member.name} className={member.className}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="pointer-events-none relative z-10 h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sage-600 font-medium">
                    {member.role}
                  </p>
                </div>
                
                <div className="text-sm space-y-1">
                  <p className="text-gray-600">
                    {member.credentials}
                  </p>
                  <p className="text-gray-500">
                    {member.experience} experience
                  </p>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 mb-2">SPECIALTIES:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block px-2 py-1 text-xs bg-sage-100 text-sage-700 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          💡 Tip: Click and drag any team member card to move it around!
        </p>
      </div>
    </div>
  );
}