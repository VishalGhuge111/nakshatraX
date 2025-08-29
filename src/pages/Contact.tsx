import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MessageSquare, 
  Rocket,
  Globe,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      description: "Get in touch for mission support",
      contact: "mission-control@nakshatrax.space",
      action: "Send Email"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-space-gold" />,
      title: "Mission Support",
      description: "Technical assistance and guidance", 
      contact: "Available 24/7 during missions",
      action: "Start Chat"
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Community Hub",
      description: "Join fellow space explorers",
      contact: "community.nakshatrax.space",
      action: "Join Now"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 text-primary">
            Mission Control
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need assistance with your space missions? Have feedback or questions? 
            Our mission control team is here to help you explore the cosmos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary flex items-center">
                  <Rocket className="mr-3 h-6 w-6" />
                  Send Transmission
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-space-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-space-green" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold mb-2 text-space-green">
                      Transmission Received!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting mission control. We'll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">
                          Commander Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Communication Channel
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@space.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Mission Category
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g., Technical Support, Mission Feedback, Partnership"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Mission Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your mission requirements, feedback, or questions..."
                        required
                        className="mt-1 min-h-[120px] resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-hero"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Rocket className="mr-2 h-4 w-4" />
                          Send Transmission
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                Alternative Communication Channels
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="space-card hover:neon-glow transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-orbitron font-semibold text-lg mb-1">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium mb-3">
                            {method.contact}
                          </p>
                          <Button size="sm" variant="outline" className="text-xs">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mission Control Info */}
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-primary">
                  Mission Control Center
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-space-gold mb-2">Operating Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 monitoring during active missions<br />
                    Standard support: Mon-Fri 9:00-18:00 UTC
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-gold mb-2">Response Time</h4>
                  <p className="text-muted-foreground text-sm">
                    Critical mission issues: &lt; 1 hour<br />
                    General inquiries: 24-48 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-space-gold mb-2">Languages</h4>
                  <p className="text-muted-foreground text-sm">
                    English, Mandarin, Spanish, Russian, Hindi
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-primary">
                  Connect with the Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Follow our latest mission updates and connect with fellow space explorers.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-card max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-destructive">
            Mission Emergency Protocol
          </h2>
          <p className="text-muted-foreground mb-6">
            For critical mission failures or spacecraft emergencies requiring immediate assistance, 
            use the emergency communication channel.
          </p>
          <Button variant="destructive" className="font-medium">
            Emergency Contact: CTRL+ALT+E
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}