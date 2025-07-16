import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'The Science Behind High-Intensity Interval Training',
      excerpt: 'Discover why HIIT is one of the most effective workout methods for burning fat and building endurance.',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2023',
      readTime: '8 min read',
      category: 'Training',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Nutrition Timing: When to Eat for Optimal Performance',
      excerpt: 'Learn how to fuel your workouts and recovery with proper nutrition timing strategies.',
      author: 'Alex Thompson',
      date: 'March 12, 2023',
      readTime: '6 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Building Mental Resilience Through Fitness',
      excerpt: 'How regular exercise can strengthen your mind and improve your mental health.',
      author: 'Maria Rodriguez',
      date: 'March 10, 2023',
      readTime: '7 min read',
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'The Complete Guide to Progressive Overload',
      excerpt: 'Master the fundamental principle of strength training for continuous muscle growth.',
      author: 'David Kim',
      date: 'March 8, 2023',
      readTime: '10 min read',
      category: 'Training',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Recovery Strategies for Peak Performance',
      excerpt: 'Essential recovery techniques to maximize your training results and prevent injury.',
      author: 'Dr. Sarah Johnson',
      date: 'March 5, 2023',
      readTime: '9 min read',
      category: 'Recovery',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Home Workout Essentials: No Gym Required',
      excerpt: 'Create an effective fitness routine at home with minimal equipment and maximum results.',
      author: 'Alex Thompson',
      date: 'March 3, 2023',
      readTime: '5 min read',
      category: 'Training',
      image: 'https://images.pexels.com/photos/4164758/pexels-photo-4164758.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = ['All', 'Training', 'Nutrition', 'Wellness', 'Recovery'];

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
              Fitness Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights, training tips, and wellness advice to help you reach your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="ml-4 text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-6">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.filter(post => !post.featured).map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get the latest fitness tips, workout routines, and wellness advice delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-green-500 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;