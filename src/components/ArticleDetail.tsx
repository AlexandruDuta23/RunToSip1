import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const articles = [
  {
    id: 1,
    title: 'The Perfect Pre-Run Breakfast',
    titleRo: 'Micul dejun perfect înainte de alergare',
    content: [
      'A good pre-run breakfast can make all the difference. Focus on easily digestible carbs and a bit of protein.',
      'Some great options include oatmeal with banana, toast with honey, or a small smoothie.',
      'Avoid high-fat or high-fiber foods right before your run to prevent stomach issues.'
    ],
    author: 'Maria Popescu',
    date: '2024-12-10',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover what to eat before your morning run to maximize performance and avoid digestive issues.',
    photos: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Nutrition',
    categoryRo: 'Nutriție'
  },
  {
    id: 2,
    title: 'Running in Winter: Essential Tips',
    titleRo: 'Alergarea iarna: Sfaturi esențiale',
    content: [
      'Layer up with moisture-wicking fabrics to stay warm and dry.',
      "Don't forget to warm up indoors before heading out into the cold.",
      'Be visible: wear bright or reflective gear, and watch for icy patches.'
    ],
    author: 'Alexandru Ionescu',
    date: '2024-12-08',
    image: 'https://images.pexels.com/photos/2402846/pexels-photo-2402846.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stay motivated and safe during cold weather runs with our comprehensive winter running guide.',
    photos: [
      'https://images.pexels.com/photos/2402846/pexels-photo-2402846.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Training',
    categoryRo: 'Antrenament'
  },
  {
    id: 3,
    title: 'Best Coffee Spots After Your Run',
    titleRo: 'Cele mai bune cafenele după alergare',
    content: [
      'Bucharest is full of cozy coffee shops perfect for post-run relaxation.',
      'Try Origo, M60, or Two Minutes for a great cup and a friendly atmosphere.',
      'Nothing beats a good coffee after a run with friends!'
    ],
    author: 'Ioana Marinescu',
    date: '2024-12-05',
    image: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our curated list of the best coffee shops in Bucharest perfect for post-run recovery.',
    photos: [
      'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Coffee',
    categoryRo: 'Cafea'
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-secondary font-semibold hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-lg p-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-secondary font-semibold hover:text-primary transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{t('backToArticles') || 'Back to Articles'}</span>
        </button>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-xl text-gray-700 mb-6">{article.description}</p>
        {article.photos && article.photos.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {article.photos.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={article.title + ' photo ' + (idx + 1)}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
        <div className="space-y-4">
          {article.content.map((para, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail; 