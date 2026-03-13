import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Trophy, ArrowRight, PlayCircle, CheckCircle, Navigation } from "lucide-react";

export default function Contact() {
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    details: "9946524366",
    description: "Call us for immediate assistance",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "from-blue-500/20 to-cyan-500/20"
  }, {
    icon: Mail,
    title: "Email",
    details: "info@acoundz360.com",
    description: "Send us your queries anytime",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "from-green-500/20 to-emerald-500/20"
  }, {
    icon: MapPin,
    title: "Address",
    details: "TC 29/4615, Central Plaza,Vazhuthacaud",
    description: "Thiruvananthapuram, Kerala 695014",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconBg: "from-purple-500/20 to-violet-500/20"
  }, {
    icon: Clock,
    title: "Office Hours",
    details: "Mon - Sun: 7:00 AM - 10:00 PM",
    description: "Sunday: Open",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "from-orange-500/20 to-red-500/20"
  }];

  const faqs = [{
    q: "What is the course duration?",
    a: "Our main programs range from 3-18 months, with short-term courses available from 15 days to 1 month."
  }, {
    q: "Is placement guaranteed?",
    a: "Yes, we provide 100% placement assistance to all our graduates through our extensive industry network."
  }, {
    q: "What certifications do I get?",
    a: "You'll receive Microsoft Excel and Tally Prime certifications along with our course completion certificate."
  }, {
    q: "Do you offer online classes?",
    a: "We offer both online and offline modes of training to accommodate different learning preferences."
  }];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in your accounting courses. Please provide more information.");
    window.open(`https://wa.me/919946524366?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919946524366', '_self');
  };

  const handleDirections = () => {
    window.open('https://maps.app.goo.gl/q9kL8T3UR4qhtHCb7', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const message = formData.get('message');
    
    const whatsappMessage = encodeURIComponent(
      `New Enquiry:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCourse Interest: ${course}\nMessage: ${message}`
    );
    
    window.open(`https://wa.me/919946524366?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <SEOHead {...pageConfigs.contact} />
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <Layout>
        <div className="bg-background relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full animate-spin-slow"></div>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 relative py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce mx-[10px] py-0 my-[25px]">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Let's Connect
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Get In <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Ready to start your accounting career? Contact us today for personalized guidance and course information.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
              <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-fade-in py-0">
                  <Card className="group p-6 bg-card/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input name="firstName" id="firstName" placeholder="Enter your first name" className="mt-1" required />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input name="lastName" id="lastName" placeholder="Enter your last name" className="mt-1" required />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input name="email" id="email" type="email" placeholder="Enter your email" className="mt-1" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input name="phone" id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="course">Course Interest</Label>
                          <select name="course" className="w-full p-3 border border-input rounded-md bg-background mt-1" required>
                            <option value="">Select a course</option>
                            <option value="accounts-manager">Accounts Manager Program</option>
                            <option value="advanced-ai">Advanced AI Program</option>
                            <option value="gst">GST Course</option>
                            <option value="tally">Tally Certification</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea name="message" id="message" placeholder="Tell us about your goals and how we can help..." rows={4} className="mt-1" />
                        </div>
                        
                        <Button type="submit" className="w-full hover:scale-105 transition-transform duration-200" size="lg">
                          Send via WhatsApp
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-6 animate-fade-in delay-300">
                  <div className="grid grid-cols-1 gap-6">
                    {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return <Card key={index} className="group p-6 bg-card/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{
                      animationDelay: `${index * 150}ms`
                    }}>
                          {/* Gradient background overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                          
                          <div className="relative z-10">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 bg-gradient-to-br ${info.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                <IconComponent className="h-6 w-6 text-primary group-hover:animate-pulse" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                                <p className="text-foreground font-medium mb-1">{info.details}</p>
                                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">{info.description}</p>
                              </div>
                            </div>
                            
                            {/* Hover indicator */}
                            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
                          </div>
                        </Card>;
                  })}
                  </div>

                  {/* Quick Actions */}
                  <Card className="group p-6 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in delay-600">
                    <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button 
                        onClick={handleWhatsApp}
                        variant="outline" 
                        className="w-full justify-start hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105" 
                        size="lg"
                      >
                        <MessageCircle className="h-5 w-5 mr-3" />
                        WhatsApp Chat
                      </Button>
                      <Button 
                        onClick={handleCall}
                        variant="outline" 
                        className="w-full justify-start hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105" 
                        size="lg"
                      >
                        <Phone className="h-5 w-5 mr-3" />
                        Call Now
                      </Button>
                    </div>
                  </Card>

                  {/* Map Placeholder */}
                  <Card className="group p-6 bg-card/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in delay-900">
                    <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Visit Our Office</h3>
                    <div 
                      className="bg-gradient-to-br from-primary/5 to-accent/5 h-48 rounded-lg flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 cursor-pointer"
                      onClick={handleDirections}
                    >
                      <div className="text-center">
                        <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                          <MapPin className="h-12 w-12 text-primary group-hover:animate-pulse" />
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Click for Directions</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Central Plaza, Vazhuthacaud</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          
        </div>
      </Layout>
    </>
  );
}
