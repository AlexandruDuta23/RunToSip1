import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const crewMembers = [
  {
    name: {
      en: 'Alexandra',
      ro: 'Alexandra',
    },
    role: {
      en: 'Founder, Marketing Specialist',
      ro: 'Fondator, Specialist Marketing',
    },
    photo: '/content/alexandra.jpg',
  },
  {
    name: {
      en: 'Nemir',
      ro: 'Nemir',
    },
    role: {
      en: 'Co-Founder, Marathoner',
      ro: 'Co-fondator, Maratonist',
    },
    photo: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with real photo if available
  },
];

const sectionTitle = {
  en: 'Crew',
  ro: 'Echipă',
};

const sectionDesc = {
  en: 'Meet the team behind RunToSip and their roles in building our community.',
  ro: 'Cunoaște echipa din spatele RunToSip și rolurile lor în construirea comunității.',
};

const Crew = () => {
  const { language } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionTitle[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {sectionDesc[language]}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {crewMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center p-8"
            >
              <img
                src={member.photo}
                alt={member.name[language]}
                className="w-32 h-32 object-cover rounded-full mb-6 border-4 border-primary shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name[language]}</h3>
              <p className="text-lg text-gray-600">{member.role[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew; 