import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'ReactJS', level: 85, category: 'Framework' },
    { name: 'AngularJS', level: 80, category: 'Framework' },
    { name: 'C# Blazor', level: 85, category: 'Backend' },
    { name: '.NET', level: 80, category: 'Backend' },
    { name: 'Chart.js', level: 75, category: 'Visualization' },
    { name: 'OpenStreetMap', level: 70, category: 'Mapping' }
  ];

  const experiences = [
    {
      period: '2022 - Present',
      title: 'Frontend Web Developer',
      description: 'Developing responsive web applications using modern frameworks and libraries. Specialized in React, Angular, and data visualization.'
    },
    {
      period: '2021 - 2022',
      title: 'Junior Frontend Developer',
      description: 'Started career focusing on HTML, CSS, JavaScript fundamentals and C# Blazor development. Built interactive web components.'
    }
  ];

  const education = [
    {
      year: '2019',
      degree: 'Bachelor of Engineering',
      description: 'Completed advanced engineering studies with focus on software development and system design.'
    },
    {
      year: '2017',
      degree: 'Bachelor of Technology',
      description: 'Foundation in technology and computer science principles, preparing for software development career.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-emerald-400">
              Moe Myint Zaw
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-emerald-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-emerald-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Moe Myint Zaw
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                Frontend Web Developer
              </h2>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Passionate frontend developer with 2+ years of experience creating modern, 
                responsive web applications using cutting-edge technologies and frameworks.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                See My Skills
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full opacity-20 absolute -top-10 -right-10"></div>
              <div className="w-80 h-80 bg-gradient-to-tl from-blue-400 to-purple-600 rounded-full opacity-10 absolute top-20 right-20"></div>
              <div className="relative z-10 bg-gray-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Code className="text-emerald-400" size={24} />
                </div>
                <div className="space-y-4 text-sm font-mono">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</div>
                  <div className="ml-4"><span className="text-red-400">name:</span> <span className="text-green-400">'Moe Myint Zaw'</span>,</div>
                  <div className="ml-4"><span className="text-red-400">role:</span> <span className="text-green-400">'Frontend Developer'</span>,</div>
                  <div className="ml-4"><span className="text-red-400">experience:</span> <span className="text-yellow-400">2</span>,</div>
                  <div className="ml-4"><span className="text-red-400">skills:</span> [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Angular'</span>, <span className="text-green-400">'C#'</span>]</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Frontend Web Developer with over 2 years of experience in creating 
                  modern, responsive, and user-friendly web applications. My journey in web development 
                  started with a strong foundation in HTML, CSS, and JavaScript, and has evolved to 
                  include advanced frameworks and technologies.
                </p>
                <p>
                  I specialize in building dynamic user interfaces using ReactJS and AngularJS, while 
                  also having expertise in backend technologies like C# Blazor and .NET. My experience 
                  extends to data visualization with Chart.js and mapping solutions with OpenStreetMap.
                </p>
                <p>
                  With dual bachelor's degrees in Technology (2017) and Engineering (2019), I bring 
                  both theoretical knowledge and practical skills to every project I undertake.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Experience</span>
                    <span className="font-semibold">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Projects</span>
                    <span className="font-semibold">15+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Technologies</span>
                    <span className="font-semibold">8+ Mastered</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Frameworks</span>
                    <span className="font-semibold">4+ Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are the technologies and frameworks I work with to create exceptional web experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <div className="text-sm text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    {skill.category}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-emerald-500"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div className="ml-8 bg-gray-800 p-6 rounded-xl flex-grow">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-emerald-400 mr-2" />
                      <span className="text-emerald-400 font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="text-emerald-400 font-semibold">{edu.year}</div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to work together? Let's discuss your next project and bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-lg">moe.myintzaw@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-lg">Available for Remote Work</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-6">
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Moe Myint Zaw. Crafted with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;