import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Coffee, X, CheckCircle } from 'lucide-react';

const Schedule = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registeredRun, setRegisteredRun] = useState('');

  const upcomingRuns = [
    {
      date: 'June 01, 2025',
      time: '9:00 AM',
      location: 'Tucano Coffee',
      distance: '3K - 5K - 7K',
      difficulty: 'All Levels',
      coffeeStop: 'Tucano Coffee Shop',
      description: 'Beautiful run through Bucharest'
    },
    {
      date: 'June 08, 2025',
      time: '9:00 AM',
      location: 'Parcul Eroilor',
      distance: '3K - 5K - 7K',
      difficulty: 'All Levels',
      coffeeStop: 'ThrowBack Coffee',
      description: 'Historic route through cobblestone streets and landmarks'
    },
    {
      date: 'June 15, 2025',
      time: '7:40 AM',
      location: 'Bucharest Golf Club',
      distance: '3K - 5K - 7K',
      difficulty: 'All Levels',
      coffeeStop: 'Specialty coffee',
      description: 'We combine running golf with excellent coffee'
    }
  ];

  const handleJoinRun = (runLocation: string, runDate: string) => {
    setRegisteredRun(`${runLocation} on ${runDate}`);
    setShowRegistration(true);
    setTimeout(() => {
      setShowRegistration(false);
    }, 3000);
  };

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

              <button 
                onClick={() => handleJoinRun(run.location, run.date)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-semibold transition-colors duration-300"
              >
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
            <button 
              onClick={() => setShowLearnMore(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-3xl font-bold text-gray-900">About Run to Sip</h2>
              <button
                onClick={() => setShowLearnMore(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🏃‍♂️☕</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Run To Sip — Bucharest's Running & Coffee Community
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Run To Sip is more than just a running club — we're a community of movement lovers and coffee enthusiasts who believe the best way to connect is one stride (and one sip) at a time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">🌆</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Weekly Runs in Bucharest</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every Sunday, we lace up and hit the streets of Bucharest for friendly, social runs open to all experience levels — whether you're a first-timer or a seasoned marathoner. You can choose from 3km, 5km, 7km, or longer distances depending on how you feel.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">☕</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Coffee & Conversation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    After every run, we head to a carefully chosen local coffee shop to cool down, chat, and share good vibes over great coffee. It's the perfect way to unwind, meet new people, and grow your network.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">💸</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">100% Free</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Participation is completely free. Just bring your running shoes, good energy, and maybe your coffee craving.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">📲</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Stay in the Loop</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To get updates on our weekly run locations and times, we recommend joining our WhatsApp group chat where we post details, meeting spots, and any special announcements.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowLearnMore(false)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                >
                  Got it, let's run!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Success Popup */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center transform animate-pulse">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're Registered!</h3>
            <p className="text-gray-600 mb-4">
              Great! You've successfully registered for the run at <strong>{registeredRun}</strong>.
            </p>
            <p className="text-sm text-gray-500">
              Join our WhatsApp group for detailed meeting point information and updates!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Schedule;