
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out to us. We'll get back to you shortly!",
      });
      setFormData({ subject: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="bg-uninav-primary/5 absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="bg-uninav-accent/5 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gradient relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-uninav-primary to-uninav-accent rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Have questions or want to learn more about UniNav? Send us a message and we'll get back to you.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 border border-gray-100 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-uninav-primary" />
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border-gray-200 focus:border-uninav-primary focus:ring-uninav-primary/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-uninav-primary" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border-gray-200 focus:border-uninav-primary focus:ring-uninav-primary/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-uninav-primary" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full min-h-[150px] rounded-lg border-gray-200 focus:border-uninav-primary focus:ring-uninav-primary/20"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-uninav-primary to-uninav-secondary hover:from-uninav-primary/90 hover:to-uninav-secondary/90 text-white px-6 py-6 h-auto rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-gradient-to-br from-uninav-primary to-uninav-secondary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-lg mb-1">Call Us</h4>
              <p className="text-gray-500">+234 123 4567 890</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-gradient-to-br from-uninav-primary to-uninav-secondary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-lg mb-1">Email Us</h4>
              <p className="text-gray-500">hello@uninav.com</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-gradient-to-br from-uninav-primary to-uninav-secondary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-lg mb-1">Live Chat</h4>
              <p className="text-gray-500">Available 9am - 5pm WAT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
