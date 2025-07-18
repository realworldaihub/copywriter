import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-cyber relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6 animate-slide-up">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-text-body leading-relaxed animate-slide-up">
            Have a project in mind? Questions about our services? We'd love to hear from you. 
            Let's discuss how we can work together to achieve your content goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-gradient-navy relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-text-heading mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500/20 p-3 rounded-xl flex-shrink-0 border border-teal-500/30">
                    <Mail className="h-6 w-6 text-text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Email</h3>
                    <p className="text-text-body">hello@revolutionai.com</p>
                    <p className="text-sm text-text-light mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500/20 p-3 rounded-xl flex-shrink-0 border border-teal-500/30">
                    <Phone className="h-6 w-6 text-text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Phone</h3>
                    <p className="text-text-body">+1 (555) 123-4567</p>
                    <p className="text-sm text-text-light mt-1">
                      Available Mon-Fri, 9AM-5PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500/20 p-3 rounded-xl flex-shrink-0 border border-teal-500/30">
                    <MapPin className="h-6 w-6 text-text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1">Location</h3>
                    <p className="text-text-body">New York, NY</p>
                    <p className="text-sm text-text-light mt-1">
                      Working with clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-navy-800/50 backdrop-blur-cyber p-6 rounded-2xl border border-teal-500/20">
                <h3 className="text-lg font-semibold text-text-heading mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      What's your typical turnaround time?
                    </h4>
                    <p className="text-sm text-text-body">
                      Most projects are completed within 5-14 days, depending on scope and complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      Do you offer revisions?
                    </h4>
                    <p className="text-sm text-text-body">
                      Yes! All packages include 2-3 rounds of revisions to ensure you're completely satisfied.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-heading mb-1">
                      What information do you need to get started?
                    </h4>
                    <p className="text-sm text-text-body">
                      We'll need details about your business, target audience, goals, and any existing brand guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-navy-800/50 backdrop-blur-cyber p-8 rounded-2xl shadow-glow border border-teal-500/20">
                <h3 className="text-2xl font-bold text-text-heading mb-6">
                  Send a Message
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-text-accent mr-3" />
                    <p className="text-text-accent">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-heading mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-text-heading placeholder-text-light"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-3 bg-navy-700/50 border border-teal-500/30 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical text-text-heading placeholder-text-light"
                      placeholder="Tell us about your project or ask any questions..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-gradient-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-glow hover:shadow-glow-lg animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-navy-900 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-navy-800/50 backdrop-blur-cyber h-64 rounded-2xl flex items-center justify-center border border-teal-500/20">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-text-accent mx-auto mb-4" />
              <p className="text-text-heading font-medium">Google Maps Integration</p>
              <p className="text-text-body text-sm">Working with clients worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;