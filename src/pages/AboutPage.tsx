import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in every treatment and interaction.',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent advice tailored to your unique needs and goals.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Staying at the forefront of aesthetic medicine with latest techniques.',
      icon: '💡',
    },
    {
      title: 'Compassion',
      description: 'Creating a welcoming, supportive environment for all our clients.',
      icon: '❤️',
    },
  ];
  
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Medical Director',
      credentials: 'MD, CCFP, Board Certified',
      experience: '15+ years',
    },
    {
      name: 'Dr. Michael Roberts',
      role: 'Lead Aesthetic Physician',
      credentials: 'MD, FRCPC Dermatology',
      experience: '12+ years',
    },
    {
      name: 'Jennifer Park',
      role: 'Senior Nurse Injector',
      credentials: 'RN, Certified Aesthetic Nurse',
      experience: '8+ years',
    },
    {
      name: 'Maria Silva',
      role: 'Aesthetic Consultant',
      credentials: 'Certified Medical Aesthetician',
      experience: '10+ years',
    },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              About Aesthetic Clinic
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted partner in aesthetic excellence since 2024
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Welcome to Toronto's Premier Aesthetic Destination
            </h2>
            <p className="text-gray-600 mb-4">
              At Aesthetic Clinic, we believe that everyone deserves to feel confident and beautiful in their own skin. 
              Our newly opened Toronto clinic combines cutting-edge technology with personalized care to deliver 
              exceptional results that enhance your natural beauty.
            </p>
            <p className="text-gray-600 mb-4">
              Founded by a team of experienced medical professionals, we've created a space where luxury meets 
              expertise. Our commitment to excellence, safety, and patient satisfaction sets us apart as Toronto's 
              premier destination for aesthetic treatments.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're looking to refresh your appearance, address specific concerns, or maintain your 
              youthful glow, our team is here to guide you every step of the way with honest advice and 
              customized treatment plans.
            </p>
            <Button variant="primary" size="medium">
              Meet Our Team
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-primary-700 mb-2">500+</p>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-secondary-700 mb-2">4.9★</p>
              <p className="text-gray-700">Google Rating</p>
            </div>
            <div className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-sage-700 mb-2">15+</p>
              <p className="text-gray-700">Expert Staff</p>
            </div>
            <div className="bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-cream-700 mb-2">100%</p>
              <p className="text-gray-700">Satisfaction</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-gray-500">
                    {member.experience}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;