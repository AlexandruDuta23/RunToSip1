import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const crewMembers = [
  {
    name: { en: 'Alexandra', ro: 'Alexandra' },
    role: { en: 'Founder, Marketing Specialist', ro: 'Fondator, Specialist Marketing' },
    photo: '/content/alexandra.jpg',
    description: {
      en: 'Passionate about building communities and running with a smile.',
      ro: 'Pasionată de a construi comunități și de a alerga cu zâmbetul pe buze.'
    }
  },
  {
    name: { en: 'Nemir', ro: 'Nemir' },
    role: { en: 'Co-Founder, Marathoner', ro: 'Co-fondator, Maratonist' },
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: {
      en: 'Always ready for a new running adventure and a good coffee.',
      ro: 'Întotdeauna pregătit pentru o nouă aventură de alergare și o cafea bună.'
    }
  },
  // Add up to 10 members with similar structure
  {
    name: { en: 'Maria', ro: 'Maria' },
    role: { en: 'Event Organizer', ro: 'Organizator Evenimente' },
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: {
      en: 'Ensures every event runs smoothly and everyone feels welcome.',
      ro: 'Se asigură că fiecare eveniment decurge perfect și toată lumea se simte binevenită.'
    }
  },
  {
    name: { en: 'Andrei', ro: 'Andrei' },
    role: { en: 'Photographer', ro: 'Fotograf' },
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: {
      en: 'Captures the best moments of our runs and community spirit.',
      ro: 'Surprinde cele mai bune momente ale alergărilor și spiritului comunității.'
    }
  },
  {
    name: { en: 'Ioana', ro: 'Ioana' },
    role: { en: 'Social Media', ro: 'Social Media' },
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    description: {
      en: 'Keeps everyone updated and inspired on our socials.',
      ro: 'Ține pe toată lumea la curent și inspiră pe rețelele noastre.'
    }
  },
  {
    name: { en: 'Vlad', ro: 'Vlad' },
    role: { en: 'Coach', ro: 'Antrenor' },
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
    description: {
      en: 'Helps us improve our running technique and stay motivated.',
      ro: 'Ne ajută să ne îmbunătățim tehnica de alergare și să rămânem motivați.'
    }
  },
  {
    name: { en: 'Elena', ro: 'Elena' },
    role: { en: 'Nutritionist', ro: 'Nutriționist' },
    photo: 'https://randomuser.me/api/portraits/women/48.jpg',
    description: {
      en: 'Shares tips for healthy eating and energy for every run.',
      ro: 'Oferă sfaturi pentru o alimentație sănătoasă și energie la fiecare alergare.'
    }
  },
  {
    name: { en: 'Radu', ro: 'Radu' },
    role: { en: 'Logistics', ro: 'Logistică' },
    photo: 'https://randomuser.me/api/portraits/men/49.jpg',
    description: {
      en: 'Makes sure everything is in place for our meetups.',
      ro: 'Se asigură că totul este pregătit pentru întâlnirile noastre.'
    }
  },
  {
    name: { en: 'Cristina', ro: 'Cristina' },
    role: { en: 'Community Manager', ro: 'Manager Comunitate' },
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    description: {
      en: 'Connects new members and keeps the vibe positive.',
      ro: 'Conectează noii membri și menține vibe-ul pozitiv.'
    }
  },
  {
    name: { en: 'Paul', ro: 'Paul' },
    role: { en: 'Route Planner', ro: 'Planificator Trasee' },
    photo: 'https://randomuser.me/api/portraits/men/51.jpg',
    description: {
      en: 'Finds the best running routes in the city.',
      ro: 'Găsește cele mai bune trasee de alergare din oraș.'
    }
  }
];

const sectionTitle = {
  en: 'Meet the Crew',
  ro: 'Cunoaște Echipa',
};

const sectionDesc = {
  en: 'Get to know the people who make RunToSip possible.',
  ro: 'Cunoaște oamenii care fac posibilă comunitatea RunToSip.',
};

const navItems = [
  { id: 'about', label: { en: 'About', ro: 'Despre' } },
  { id: 'schedule', label: { en: 'Schedule', ro: 'Program' } },
  { id: 'articles', label: { en: 'Articles', ro: 'Articole' } },
  { id: 'gallery', label: { en: 'Gallery', ro: 'Galerie' } },
  { id: 'contact', label: { en: 'Contact', ro: 'Contact' } },
];

const CrewPage = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleNav = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="font-medium px-5 py-2 rounded-full bg-white shadow hover:bg-primary hover:text-black transition-colors duration-200 text-gray-700"
            >
              {item.label[language]}
            </button>
          ))}
          <Link
            to="/crew"
            className="font-medium px-5 py-2 rounded-full bg-primary text-black shadow cursor-default border-2 border-primary"
          >
            {t('crew') || 'Crew'}
          </Link>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionTitle[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {sectionDesc[language]}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
              <p className="text-lg text-secondary mb-2">{member.role[language]}</p>
              <p className="text-gray-600 text-center text-base">{member.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrewPage; 