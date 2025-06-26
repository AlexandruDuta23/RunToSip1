import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Articles = () => {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: 'The Perfect Pre-Run Breakfast',
      titleRo: 'Micul dejun perfect înainte de alergare',
      excerpt: 'Discover what to eat before your morning run to maximize performance and avoid digestive issues.',
      excerptRo: 'Descoperă ce să mănânci înainte de alergarea de dimineață pentru a maximiza performanța și a evita problemele digestive.',
      author: 'Maria Popescu',
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Nutrition',
      categoryRo: 'Nutriție'
    },
    {
      id: 2,
      title: 'Running in Winter: Essential Tips',
      titleRo: 'Alergarea iarna: Sfaturi esențiale',
      excerpt: 'Stay motivated and safe during cold weather runs with our comprehensive winter running guide.',
      excerptRo: 'Rămâi motivat și în siguranță în timpul alergărilor pe vreme rece cu ghidul nostru complet pentru alergarea de iarnă.',
      author: 'Alexandru Ionescu',
      date: '2024-12-08',
      image: 'https://images.pexels.com/photos/2402846/pexels-photo-2402846.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Training',
      categoryRo: 'Antrenament'
    },
    {
      id: 3,
      title: 'Best Coffee Spots After Your Run',
      titleRo: 'Cele mai bune cafenele după alergare',
      excerpt: 'Our curated list of the best coffee shops in Bucharest perfect for post-run recovery.',
      excerptRo: 'Lista noastră selectată cu cele mai bune cafenele din București perfecte pentru recuperarea după alergare.',
      author: 'Ioana Marinescu',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      categoryRo: 'Cafea'
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('latestArticles')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('articlesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center space-x-2 text-secondary font-semibold hover:text-primary transition-colors duration-200">
                  <span>{t('readMore')}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;