import React from 'react';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '../ui/DraggableCard';

export default function TeamDraggableCards() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2340&auto=format&fit=crop",
      className: "absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] z-10",
    },
    {
      name: "Dr. Michael Roberts",
      role: "Lead Aesthetic Physician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2340&auto=format&fit=crop",
      className: "absolute top-[50%] left-[52%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] z-20",
    },
    {
      name: "Jennifer Park",
      role: "Senior Nurse Injector",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2387&auto=format&fit=crop",
      className: "absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] z-15",
    },
    {
      name: "Maria Silva",
      role: "Lead Aesthetic Consultant",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2387&auto=format&fit=crop",
      className: "absolute top-[52%] left-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] z-25",
    },
    {
      name: "Dr. Emily Zhang",
      role: "Cosmetic Surgeon",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2387&auto=format&fit=crop",
      className: "absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] z-18",
    },
    {
      name: "Sophie Laurent",
      role: "Laser Specialist",
      image: "https://images.unsplash.com/photo-1580281658524-b8e0bbe5751b?q=80&w=2342&auto=format&fit=crop",
      className: "absolute top-[54%] left-[47%] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] z-22",
    },
    {
      name: "Nina Rodriguez",
      role: "Client Care Coordinator",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2340&auto=format&fit=crop",
      className: "absolute top-[49%] left-[53%] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] z-12",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Drag and explore our talented team of aesthetic professionals
        </p>
      </div>
      
      <DraggableCardContainer className="relative flex min-h-[800px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {teamMembers.map((member) => (
          <DraggableCardBody 
            key={member.name} 
            className={`${member.className} w-[340px] p-0`}
          >
            <div className="relative bg-white p-4 pb-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="pointer-events-none relative z-10 h-[400px] w-full object-cover"
                />
              </div>
              
              <div className="text-center mt-4 space-y-1">
                <h3 className="text-2xl font-bold text-gray-900 font-display">
                  {member.name}
                </h3>
                <p className="text-base text-gray-600 font-medium">
                  {member.role}
                </p>
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