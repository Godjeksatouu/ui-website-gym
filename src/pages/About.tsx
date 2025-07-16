import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
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
    <div className="min-h-screen pt-16">
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
              About gym
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering individuals to achieve their fitness goals through expert guidance, 
              state-of-the-art facilities, and a supportive community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At gym, we believe fitness is not just about physical transformation—it's about
                building confidence, discipline, and a healthy lifestyle that lasts a lifetime.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our mission is to provide world-class fitness experiences that inspire, challenge, 
                and support every member on their unique journey to better health.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-yellow-400" />
                  <span className="text-white">Goal-Oriented</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-400" />
                  <span className="text-white">Community-Focused</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fitness training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do"
              },
              {
                icon: <Users className="h-12 w-12 text-green-400" />,
                title: "Community",
                description: "Building supportive relationships that last beyond the gym"
              },
              {
                icon: <Target className="h-12 w-12 text-blue-400" />,
                title: "Results",
                description: "Focused on helping you achieve your personal fitness goals"
              },
              {
                icon: <Heart className="h-12 w-12 text-red-400" />,
                title: "Wellness",
                description: "Promoting holistic health for mind, body, and spirit"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900/50 p-6 rounded-lg text-center hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Meet Our Trainers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Certified professionals dedicated to your success
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Alex Thompson",
                role: "Head Trainer & Nutrition Specialist",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
                specialties: ["Strength Training", "Nutrition", "Body Composition"],
                experience: "8 years"
              },
              {
                name: "Maria Rodriguez",
                role: "Yoga & Wellness Coach",
                image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
                specialties: ["Yoga", "Mindfulness", "Flexibility"],
                experience: "6 years"
              },
              {
                name: "David Kim",
                role: "CrossFit & HIIT Specialist",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                specialties: ["CrossFit", "HIIT", "Functional Training"],
                experience: "10 years"
              }
            ].map((trainer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/50 p-6 rounded-lg text-center hover:bg-black/70 transition-all duration-300"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-yellow-400 mb-4">{trainer.role}</p>
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">{trainer.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {trainer.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              World-Class Facilities
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              State-of-the-art equipment and spaces designed for optimal performance
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Strength Training Area",
                image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Premium weights and machines for all strength levels"
              },
              {
                title: "Cardio Zone",
                image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Latest cardio equipment with entertainment systems"
              },
              {
                title: "Group Fitness Studio",
                image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
                description: "Spacious studio for classes and group activities"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-300">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;