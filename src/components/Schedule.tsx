import React from 'react';
import { Calendar, Clock, MapPin, Users, Coffee } from 'lucide-react';

const Schedule = () => {
  const upcomingRuns = [
    {
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      location: 'Herastrau Park',
      distance: '5K - 8K',
      difficulty: 'All Levels',
      coffeeStop: 'Origo Coffee Shop',
      description: 'Beautiful lakeside run through Bucharest\'s largest park'
    },
    {
      date: 'Dec 22, 2024',
      time: '9:00 AM',
      location: 'Old Town Circuit',
      distance: '4K - 6K',
      difficulty: 'Beginner Friendly',
      coffeeStop: 'Cafea Specialty',
      description: 'Historic route through cobblestone streets and landmarks'
    },
    {
      date: 'Dec 29, 2024',
      time: '9:00 AM',
      location: 'Cismigiu Gardens',
      distance: '3K - 7K',
      difficulty: 'All Levels',
      coffeeStop: 'The Ark Coffee',
      description: 'New Year preparation run in the heart of the city'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Weekly Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join us every Sunday morning for our signature coffee runs. All fitness levels welcome!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {upcomingRuns.map((run, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {run.date}
                </div>
                <div className="text-amber-600 font-semibold">{run.difficulty}</div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{run.location}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{run.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">{run.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">{run.distance}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">{run.coffeeStop}</span>
                </div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                Join This Run
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            New to running? No problem! We have experienced runners who are happy to help beginners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/runtosip/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Message Us on Instagram
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;