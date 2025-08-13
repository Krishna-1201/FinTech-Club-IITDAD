import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { submitContactForm } from '../services/api';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        toast({
          title: "Success!",
          description: response.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join our community or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-navy-blue mb-6">
                Connect With Us
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're interested in joining our club, have suggestions for events, or just want to learn more about what we do, we're here to help. Drop us a message and we'll get back to you soon!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-gradient-to-r from-navy-blue/5 to-gold/5 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mr-6">
                  <User className="w-6 h-6 text-navy-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue text-lg">Join Our Community</h4>
                  <p className="text-gray-600">Connect with like-minded fintech enthusiasts</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gradient-to-r from-gold/5 to-navy-blue/5 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-navy-blue/20 rounded-xl flex items-center justify-center mr-6">
                  <MessageSquare className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue text-lg">Share Ideas</h4>
                  <p className="text-gray-600">Suggest events, projects, or collaborations</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gradient-to-r from-navy-blue/5 to-gold/5 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mr-6">
                  <CheckCircle className="w-6 h-6 text-navy-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue text-lg">Get Updates</h4>
                  <p className="text-gray-600">Stay informed about upcoming events and opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-navy-blue flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="border-2 border-gray-200 focus:border-gold focus:ring-gold/20 rounded-xl p-4 text-lg transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-navy-blue flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="border-2 border-gray-200 focus:border-gold focus:ring-gold/20 rounded-xl p-4 text-lg transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-navy-blue flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add a simple description about yourself if you just want to contact us"
                  rows={5}
                  className="border-2 border-gray-200 focus:border-gold focus:ring-gold/20 rounded-xl p-4 text-lg transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy-blue hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;