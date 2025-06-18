import React from 'react';
import { MessageCircle, Users, Bell, Calendar, ArrowRight } from 'lucide-react';

const WhatsAppJoin = () => {
  const benefits = [
    {
      icon: Bell,
      title: 'Instant Updates',
      description: 'Get notified about upcoming runs, weather changes, and last-minute updates'
    },
    {
      icon: Calendar,
      title: 'Event Details',
      description: 'Receive detailed information about meeting points, routes, and coffee stops'
    },
    {
      icon: Users,
      title: 'Community Chat',
      description: 'Connect with fellow runners, share experiences, and make new friends'
    }
  ];

  const handleJoinWhatsApp = () => {
    // Replace with your actual WhatsApp group invite link
    const whatsappGroupLink = 'https://chat.whatsapp.com/your-group-invite-link';
    window.open(whatsappGroupLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 p-4 rounded-full">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our WhatsApp Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with the Run to Sip family! Get real-time updates about our Sunday runs, 
            weather alerts, route changes, and exclusive community events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the Conversation?
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Be the first to know about our next adventure! Join over 50+ runners who stay 
              connected through our active WhatsApp community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-green-100">
                <Users className="h-5 w-5" />
                <span className="font-semibold">50+ Active Members</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-green-300 rounded-full"></div>
              <div className="flex items-center space-x-2 text-green-100">
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">Daily Updates</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-green-300 rounded-full"></div>
              <div className="flex items-center space-x-2 text-green-100">
                <Bell className="h-5 w-5" />
                <span className="font-semibold">Instant Notifications</span>
              </div>
            </div>

            <button
              onClick={handleJoinWhatsApp}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Join WhatsApp Group</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <p className="text-green-100 mt-4 text-sm">
              Click to join instantly • No spam, just running updates
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Get in Our WhatsApp Group
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Weekly Run Announcements</h5>
                <p className="text-gray-600 text-sm">Detailed info about Sunday's meeting point, route, and coffee destination</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <Bell className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Weather & Route Updates</h5>
                <p className="text-gray-600 text-sm">Real-time changes due to weather or special events in the city</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Community Discussions</h5>
                <p className="text-gray-600 text-sm">Share running tips, coffee recommendations, and celebrate achievements</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Special Events</h5>
                <p className="text-gray-600 text-sm">Exclusive invites to running workshops, social events, and group challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppJoin;