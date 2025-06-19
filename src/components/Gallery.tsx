import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const Gallery = () => {
  const photos = [
  {
    url: '/public/Poza1.jpg',
    caption: 'Sunday morning run through Bucharest Golf Club'
  },
  {
    url: '/public/Poza2.jpg',
    caption: 'Girls power!'
  },
  {
    url: '/public/Poza3.jpg',
    caption: 'Our amazing running community'
  },
  {
    url: '/public/Poza4.jpg',
    caption: 'ThrowBack Coffee'
  },  
  {
    url: '/public/Poza5.jpg',
    caption: 'YoPRO time after a great run'
  },
  {
    url: '/public/Poza6.jpg',
    caption: 'Team spirit and friendship'
  }
];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Memories in Motion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Check out highlights from our recent runs and coffee adventures around Bucharest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{photo.caption}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-white">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{Math.floor(Math.random() * 50) + 20}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{Math.floor(Math.random() * 10) + 2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/runtosip/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Instagram className="h-6 w-6" />
            <span>Follow @runtosip</span>
          </a>
          <p className="text-gray-600 mt-4">
            Follow us on Instagram for daily updates, run photos, and coffee recommendations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;