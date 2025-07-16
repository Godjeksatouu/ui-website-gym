import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, Star, Filter } from 'lucide-react';

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');

  const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT', 'CrossFit'];
  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const classes = [
    {
      id: 1,
      name: 'Beast Mode Strength',
      instructor: 'Alex Thompson',
      category: 'Strength',
      duration: '60 min',
      capacity: '12 people',
      rating: 4.9,
      day: 'Monday',
      time: '6:00 AM',
      level: 'Intermediate',
      description: 'High-intensity strength training focused on building muscle and power.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Cardio Blast',
      instructor: 'Maria Rodriguez',
      category: 'Cardio',
      duration: '45 min',
      capacity: '20 people',
      rating: 4.8,
      day: 'Monday',
      time: '7:00 AM',
      level: 'All Levels',
      description: 'Fat-burning cardio session with varied exercises to keep you engaged.',
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Zen Flow Yoga',
      instructor: 'Maria Rodriguez',
      category: 'Yoga',
      duration: '60 min',
      capacity: '15 people',
      rating: 4.9,
      day: 'Tuesday',
      time: '9:00 AM',
      level: 'Beginner',
      description: 'Gentle yoga flow focusing on flexibility, balance, and mindfulness.',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'HIIT Inferno',
      instructor: 'David Kim',
      category: 'HIIT',
      duration: '30 min',
      capacity: '16 people',
      rating: 4.7,
      day: 'Wednesday',
      time: '6:30 PM',
      level: 'Advanced',
      description: 'Intense interval training for maximum calorie burn and endurance.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      name: 'CrossFit Challenge',
      instructor: 'David Kim',
      category: 'CrossFit',
      duration: '50 min',
      capacity: '10 people',
      rating: 4.8,
      day: 'Thursday',
      time: '7:00 PM',
      level: 'Intermediate',
      description: 'Functional fitness combining strength, cardio, and skill work.',
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      name: 'Power Yoga',
      instructor: 'Maria Rodriguez',
      category: 'Yoga',
      duration: '45 min',
      capacity: '18 people',
      rating: 4.6,
      day: 'Friday',
      time: '8:00 AM',
      level: 'Intermediate',
      description: 'Dynamic yoga practice building strength and flexibility.',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredClasses = classes.filter(cls => {
    const categoryMatch = selectedCategory === 'All' || cls.category === selectedCategory;
    const dayMatch = selectedDay === 'All' || cls.day === selectedDay;
    return categoryMatch && dayMatch;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Fitness Classes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our expert-led classes designed to challenge, inspire, and transform your fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Day</label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none"
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredClasses.map((cls) => (
              <motion.div
                key={cls.id}
                variants={fadeInUp}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      cls.level === 'Beginner' ? 'bg-green-500 text-white' :
                      cls.level === 'Intermediate' ? 'bg-yellow-500 text-black' :
                      'bg-red-500 text-white'
                    }`}>
                      {cls.level}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm">{cls.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cls.name}</h3>
                  <p className="text-gray-400 mb-4">{cls.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <span className="font-medium">Instructor:</span>
                      <span className="ml-2 text-yellow-400">{cls.instructor}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{cls.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{cls.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cls.day} at {cls.time}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black py-3 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-300"
                  >
                    Book Class
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Weekly Schedule</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black rounded-lg p-6 overflow-x-auto"
          >
            <div className="min-w-full">
              <div className="grid grid-cols-8 gap-4 mb-4">
                <div className="font-semibold text-white text-center">Time</div>
                {days.slice(1).map(day => (
                  <div key={day} className="font-semibold text-yellow-400 text-center">{day}</div>
                ))}
              </div>
              
              {['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '6:30 PM', '7:00 PM'].map(time => (
                <div key={time} className="grid grid-cols-8 gap-4 mb-2">
                  <div className="text-gray-400 text-center py-2">{time}</div>
                  {days.slice(1).map(day => {
                    const classAtTime = classes.find(cls => cls.day === day && cls.time === time);
                    return (
                      <div key={day} className="text-center">
                        {classAtTime ? (
                          <div className="bg-gradient-to-r from-yellow-400/20 to-green-400/20 border border-yellow-400/50 rounded py-1 px-2">
                            <div className="text-sm font-medium text-white">{classAtTime.name}</div>
                            <div className="text-xs text-gray-300">{classAtTime.instructor}</div>
                          </div>
                        ) : (
                          <div className="py-3"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Classes;