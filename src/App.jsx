import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Code, 
  Database, 
  Shield, 
  BarChart3,
  Award,
  Calendar,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';
import heroImage from './assets/portfolio_hero.png';
import profileImage from './assets/profile.jpeg';
const cvFile = 'https://drive.google.com/file/d/1WR2SnCZIAK9PmGzQV55Y9f0g_ttkA3cK/view';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Python', category: 'Programming', level: 90, icon: Code },
    { name: 'TypeScript', category: 'Programming', level: 80, icon: Code },
    { name: 'Data Analysis', category: 'Analytics', level: 85, icon: BarChart3 },
    { name: 'Power BI', category: 'Visualization', level: 80, icon: BarChart3 },
    { name: 'React', category: 'Frontend', level: 75, icon: Code },
    { name: 'Node.js', category: 'Backend', level: 70, icon: Code },
    { name: 'Networking', category: 'Infrastructure', level: 85, icon: Shield },
    { name: 'Cybersecurity', category: 'Security', level: 80, icon: Shield },
    { name: 'SQL', category: 'Database', level: 75, icon: Database }
  ];

  const experiences = [
    {
      title: 'Final-year Business IT Student',
      company: 'University of Rwanda, Huye',
      period: '2022 - October 2025',
      description: 'Conducted several impactful data projects including automating Python-based pipelines with API integration. Standardized and cleaned over 100,000 project records. Developed interactive dashboards using Power BI and Looker.',
      achievements: ['Reduced manual work by 5 hours weekly', 'Processed 100,000+ records', 'Built interactive dashboards']
    },
    {
      title: 'Networking & Security Intern',
      company: 'ACEJ/Karama, Muhanga, Rwanda',
      period: '2018 - 2021',
      description: 'Trained in Cisco network configurations, security protocols, and firewall setup. Supported secure network deployments and participated in vulnerability assessments.',
      achievements: ['Cisco network configuration', 'Security protocol implementation', 'Vulnerability assessments']
    }
  ];

  const projects = [
    {
      title: 'Data Pipeline Automation',
      description: 'Automated Python-based data processing pipeline with API integration, reducing manual work by 5 hours weekly.',
      technologies: ['Python', 'APIs', 'Data Processing'],
      status: 'Completed'
    },
    {
      title: 'Interactive Dashboard Suite',
      description: 'Developed comprehensive dashboards using Power BI and Looker for data-driven decision making.',
      technologies: ['Power BI', 'Looker', 'Data Visualization'],
      status: 'Completed'
    },
    {
      title: 'Network Security Assessment',
      description: 'Conducted vulnerability assessments and implemented security protocols for network infrastructure.',
      technologies: ['Cisco', 'Network Security', 'Firewalls'],
      status: 'Completed'
    }
  ];

  const certifications = [
    { name: 'ALX Data Analysis', provider: 'ALX Kigali', duration: '6 months' },
    { name: 'Data Analysis Advanced', provider: 'KLAB', duration: '6 months' },
    { name: 'Web Development & AI', provider: 'Udacity', duration: 'Ongoing' },
    { name: 'Data Science & Networking', provider: 'Cisco Networking Academy', duration: 'Completed' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Yvette Niyogitangaza
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-cyan-300">Yvette</span>
              </h1>
              <div className="text-xl md:text-2xl mb-8 typing-animation">
                Business IT Professional & Data Analyst
              </div>
              <p className="text-lg mb-8 text-blue-100">
                Passionate about transforming data into insights and building secure, efficient technology solutions. 
                Currently pursuing my degree in Business Information Technology at the University of Rwanda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                  onClick={() => window.open(cvFile, '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="floating-animation"
            >
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-cyan-300">
                <img 
                  src={profileImage} 
                  alt="Yvette Niyogitangaza" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated Business IT student with a passion for data analysis, cybersecurity, and innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Kigali, Rwanda</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+250 783 629 811</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>niyogitangazayvette@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Born August 5, 2002</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Education & Languages</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">University of Rwanda, Huye</h4>
                      <p className="text-muted-foreground">Business Information Technology (2022-2025)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Languages</h4>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Badge variant="secondary">Kinyarwanda - Native</Badge>
                        <Badge variant="secondary">English - Fluent</Badge>
                        <Badge variant="secondary">French - Good</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Awards</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Imbuto Foundation Best Performing Student (2018)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technical skills and competencies I've developed through education and hands-on experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="skill-card h-full">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{skill.level}%</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Professional Training & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-bold">{cert.name}</h4>
                          <p className="text-muted-foreground">{cert.provider}</p>
                          <Badge variant="outline" className="mt-2">{cert.duration}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key accomplishments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-effect">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of the projects I've worked on during my studies and internships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 hero-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-white">
                    <Mail className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:niyogitangazayvette@gmail.com" className="text-cyan-300 hover:underline">
                        niyogitangazayvette@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-white">
                    <Phone className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+250783629811" className="text-cyan-300 hover:underline">
                        +250 783 629 811
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-white">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-cyan-300">Kigali, Rwanda</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Connect With Me</h3>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/niyogitangazayvette"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-cyan-300 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/niyogitangazayvette"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-cyan-300 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Download My CV</h3>
                  <Button
                    onClick={() => window.open(cvFile, '_blank')}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View CV (Google Drive)
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Yvette Niyogitangaza. Built with React and deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

