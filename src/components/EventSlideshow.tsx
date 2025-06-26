import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: 'Herastrau Park Morning Run',
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      location: 'Herastrau Park',
      distance: '5K - 8K',
      difficulty: 'All Levels',
      coffeeStop: 'Origo Coffee Shop',
      description: 'Beautiful lakeside run through Bucharest\'s largest park',
      image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Old Town Historic Circuit',
      date: 'Dec 22, 2024',
      time: '9:00 AM',
      location: 'Old Town Circuit',
      distance: '4K - 6K',
      difficulty: 'Beginner Friendly',
      coffeeStop: 'Cafea Specialty',
      description: 'Historic route through cobblestone streets and landmarks',
      image: 'https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'New Year Preparation Run',
      date: 'Dec 29, 2024',
      time: '9:00 AM',
      location: 'Cismigiu Gardens',
      distance: '3K - 7K',
      difficulty: 'All Levels',
      coffeeStop: 'The Ark Coffee',
      description: 'New Year preparation run in the heart of the city',
      image: 'https://images.pexels.com/photos/2402846/pexels-photo-2402846.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentSlide];

  return (
    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
      <div className="relative h-96 md:h-80">
        <img
          src={currentEvent.image}
          alt={currentEvent.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  {currentEvent.date}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{currentEvent.title}</h3>
                <p className="text-xl mb-6 opacity-90">{currentEvent.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{currentEvent.distance}</span>
                  </div>
                </div>
                
                <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Join This Run
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;