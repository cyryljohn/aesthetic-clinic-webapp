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
      rotation: "rotate-[-15deg]",
      imageRotation: "rotate-[-2deg]",
      zIndex: "z-10",
    },
    {
      name: "Dr. Michael Roberts",
      role: "Lead Aesthetic Physician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2340&auto=format&fit=crop",
      rotation: "rotate-[8deg]",
      imageRotation: "rotate-[1deg]",
      zIndex: "z-20",
    },
    {
      name: "Jennifer Park",
      role: "Senior Nurse Injector",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2387&auto=format&fit=crop",
      rotation: "rotate-[-5deg]",
      imageRotation: "rotate-[2deg]",
      zIndex: "z-[15]",
    },
    {
      name: "Maria Silva",
      role: "Lead Aesthetic Consultant",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2387&auto=format&fit=crop",
      rotation: "rotate-[12deg]",
      imageRotation: "rotate-[-1.5deg]",
      zIndex: "z-[25]",
    },
    {
      name: "Dr. Emily Zhang",
      role: "Cosmetic Surgeon",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2387&auto=format&fit=crop",
      rotation: "rotate-[-8deg]",
      imageRotation: "rotate-[1.5deg]",
      zIndex: "z-[18]",
    },
    {
      name: "Sophie Laurent",
      role: "Laser Specialist",
      image: "https://images.unsplash.com/photo-1580281658524-b8e0bbe5751b?q=80&w=2342&auto=format&fit=crop",
      rotation: "rotate-[6deg]",
      imageRotation: "rotate-[-2.5deg]",
      zIndex: "z-[22]",
    },
    {
      name: "Nina Rodriguez",
      role: "Client Care Coordinator",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2340&auto=format&fit=crop",
      rotation: "rotate-[-10deg]",
      imageRotation: "rotate-[2deg]",
      zIndex: "z-[12]",
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
      
      <DraggableCardContainer className="relative min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative w-full h-full flex items-center justify-center">
          {teamMembers.map((member, index) => (
            <DraggableCardBody 
              key={member.name} 
              className={`absolute w-[420px] p-0 rounded-2xl ${member.rotation} ${member.zIndex}`}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative bg-white p-5 pb-7 shadow-[0_15px_60px_rgba(0,0,0,0.6)] rounded-2xl">
                <div className={`relative overflow-hidden rounded-lg ${member.imageRotation}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="pointer-events-none relative z-10 h-[460px] w-full object-cover"
                  />
                </div>
                
                <div className="text-center mt-5 space-y-1">
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
        </div>
      </DraggableCardContainer>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          💡 Tip: Click and drag any team member card to move it around!
        </p>
      </div>
    </div>
  );
}