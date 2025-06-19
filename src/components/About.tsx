import React from 'react';
import { Heart, Coffee, MapPin, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe running is better together. Join a supportive community that celebrates every step.'
    },
    {
      icon: Coffee,
      title: 'Coffee Culture',
      description: 'Every run ends at a carefully selected coffee spot where we share stories and build friendships.'
    },
    {
      icon: MapPin,
      title: 'Explore Bucharest',
      description: 'Discover new neighborhoods, parks, and hidden gems while staying active and healthy.'
    },
    {
      icon: Clock,
      title: 'Flexible Pace',
      description: 'Whether you are a beginner or experienced runner, we accommodate all fitness levels.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            More Than Just Running
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Run to Sip is Bucharest's most welcoming running community. We combine the joy of running 
            with the warmth of coffee culture, creating lasting friendships one Sunday at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a small group of friends who loved running and coffee has grown into 
                Bucharest's most vibrant running community. Every Sunday, we gather to explore different 
                parts of our beautiful city, one run at a time.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our routes take us through Bucharest's most scenic areas – from Herastrau Park to the 
                Old Town, from Cismigiu Gardens to the trendy Amzei district. Each run is an adventure, 
                and each coffee stop is a celebration.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-amber-100 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-semibold">150+ Members</span>
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-full">
                  <span className="text-orange-800 font-semibold">20+ Runs</span>
                </div>
                <div className="bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-red-800 font-semibold">8+ Months</span>
                </div>
              </div>
            </div>
            <div
              className="min-h-64 lg:min-h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1671327/pexels-photo-1671327.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;