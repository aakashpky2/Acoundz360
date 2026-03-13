import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import SocialMediaSection from "@/components/SocialMediaSection";
import { pageConfigs } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavLink } from "react-router-dom";
import { BookOpen, Award, Users, Target, Bot, TrendingUp, CheckCircle, Star, ArrowRight, PlayCircle, Sparkles, Zap, GraduationCap, Briefcase, Calculator, Building2, Clock, Trophy, Calendar, Award as AwardIcon, Users as UsersIcon } from "lucide-react";
import { useState } from "react";
const Index = () => {
  const highlights = [{
    title: "Hands-on Training",
    description: "Real-world projects and practical experience with industry-standard practices",
    icon: BookOpen,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-500/10 to-cyan-500/10",
    accent: "text-blue-600"
  }, {
    title: "Microsoft & Tally Certification",
    description: "Industry-recognized certifications to enhance your professional credibility",
    icon: Award,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "from-green-500/10 to-emerald-500/10",
    accent: "text-green-600"
  }, {
    title: "Expert Faculty",
    description: "Learn from seasoned industry professionals with extensive practical experience",
    icon: Users,
    gradient: "from-orange-500/20 to-amber-500/20",
    iconBg: "from-orange-500/10 to-amber-500/10",
    accent: "text-orange-600"
  }, {
    title: "Job Oriented Curriculum",
    description: "Skills that employers actively seek in today's competitive market",
    icon: Target,
    gradient: "from-red-500/20 to-rose-500/20",
    iconBg: "from-red-500/10 to-rose-500/10",
    accent: "text-red-600"
  }, {
    title: "AI Tools and Agent Automation",
    description: "Master cutting-edge AI tools and agent based automation technologies",
    icon: Bot,
    gradient: "from-purple-500/20 to-violet-500/20",
    iconBg: "from-purple-500/10 to-violet-500/10",
    accent: "text-purple-600"
  }, {
    title: "100% Placement",
    description: "Comprehensive job placement assistance with guaranteed career support",
    icon: TrendingUp,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconBg: "from-indigo-500/10 to-blue-500/10",
    accent: "text-indigo-600"
  }];
  const features = ["AI-Enabled Learning", "Live Project Experience", "Industry Expert Mentors", "Flexible Learning Options", "Lifetime Career Support", "Alumni Network Access"];
  const courses = [{
    title: "Accounts Manager Program",
    duration: "3-6 Months",
    level: "Beginner to Intermediate",
    popular: true,
    description: "Comprehensive accounting program with real-world applications and industry certifications",
    highlights: ["Practical Accounting", "Tally Prime Mastery", "GST & Taxation", "Financial Reporting", "Audit Fundamentals"],
    icon: Calculator,
    gradient: "from-blue-500/10 to-cyan-500/10",
    students: "500+",
    rating: "4.9"
  }, {
    title: "Advanced AI and Automation Program",
    duration: "12-18 Months",
    level: "Advanced",
    popular: false,
    description: "Master AI tools and agent based automation for modern accounting and financial analysis",
    highlights: ["AI Integration", "Process Automation", "Data Analytics", "Advanced Excel"],
    icon: Bot,
    gradient: "from-purple-500/10 to-violet-500/10",
    students: "200+",
    rating: "4.8"
  }, {
    title: "Short-term Courses",
    duration: "15 Days - 1 Month",
    level: "All Levels",
    popular: false,
    description: "Focused skill-building courses for specific accounting and software competencies",
    highlights: ["Quick Certification", "Flexible Schedule", "Practical Focus", "Industry Tools"],
    icon: Clock,
    gradient: "from-green-500/10 to-emerald-500/10",
    students: "500+",
    rating: "4.9"
  }];
  const targetAudiences = [{
    id: "students",
    title: "For Students",
    icon: GraduationCap,
    gradient: "from-blue-500/20 to-indigo-500/20",
    benefits: ["Build a strong practical foundation and boost employability", "Learn with real-time tools", "Bridge the gap between academics and job market requirements", "Internship-like exposure through live projects", "Certification for resume enhancement", "100% placement assurance for accounting jobs", "Hands-on AI tools to stay ahead of traditional peers"]
  }, {
    id: "professionals",
    title: "For Working Professionals",
    icon: Briefcase,
    gradient: "from-green-500/20 to-emerald-500/20",
    benefits: ["Upskill without career breaks with flexible weekend classes", "Advanced tools training for immediate workplace application", "Leadership-focused finance and accounting programs", "Strategic financial planning and analysis expertise", "MIS reporting and advanced Excel automation", "Career advancement opportunities and salary growth", "Executive-level finance management skills"]
  }, {
    id: "chartered-accountants",
    title: "For Chartered Accountants",
    icon: Calculator,
    gradient: "from-purple-500/20 to-violet-500/20",
    benefits: ["Specialized training for fresh CAs and articleship support", "Advanced audit procedures and compliance management", "Tax planning strategies and corporate law updates", "Practice management and client relationship building", "Digital tools integration for modern CA practices", "Business development and revenue growth techniques", "Professional networking and industry connections"]
  }, {
    id: "businesses",
    title: "For Businesses",
    icon: Building2,
    gradient: "from-orange-500/20 to-red-500/20",
    benefits: ["Customized corporate training programs for your team", "Complete accounting system setup and implementation", "Process optimization and workflow automation", "GST compliance and regulatory adherence", "Financial reporting standardization across departments", "Cost reduction through efficient accounting practices", "Ongoing support and consultation for business growth"]
  }];

  // State to track the selected audience
  const [selectedAudience, setSelectedAudience] = useState("students");

  // Get the currently selected audience data
  const currentAudience = targetAudiences.find(audience => audience.id === selectedAudience) || targetAudiences[0];
  return (
    <>
      <SEOHead {...pageConfigs.home} />
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full animate-spin-slow"></div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce">
                  <Sparkles className="h-3 w-3 mr-1 text-green-600" />
                  Next Generation Accounting Training
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Be a <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">Next Gen</span><br />
                  Accountant
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  AI-enabled accounting training with real-time tools and 100% placement assistance. 
                  Master the future of accounting today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/courses" className="flex items-center gap-2">
                      Explore Courses
                      <ArrowRight className="h-5 w-5" />
                    </NavLink>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Talk to Us
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
                <div className="bg-card p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary animate-pulse" />
                    Why Choose Acoundz 360?
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle className="h-5 w-5 text-success animate-bounce" style={{
                          animationDelay: `${index * 100}ms`
                        }} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-1500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium px-4 py-2 animate-bounce">
                <Sparkles className="h-3 w-3 mr-1" />
                Excellence in Education
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                What Sets Us <span className="text-primary relative">Apart
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">We combine traditional accounting expertise with Next Gen AI technology to prepare you for the future of finance and accounting excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-card/80 backdrop-blur-sm cursor-pointer animate-fade-in" style={{
                    animationDelay: `${index * 150}ms`
                  }}>
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                    </div>

                    <CardContent className="p-8 lg:p-10 text-center relative z-10">
                      <div className={`mx-auto mb-8 p-6 bg-gradient-to-br ${highlight.iconBg} rounded-2xl w-fit group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:rotate-6`}>
                        <IconComponent className={`h-10 w-10 ${highlight.accent} group-hover:animate-pulse`} />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg group-hover:text-foreground/80 transition-colors duration-300">
                        {highlight.description}
                      </p>
                      <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${highlight.gradient} mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`}></div>
                      
                      {/* Hover overlay with sparkle effect */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Sparkles className="h-6 w-6 text-primary/20 animate-spin" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Professional stats section with animations */}
            
          </div>
        </section>

        {/* Target Audience Section with Click-based Details */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                <Target className="h-3 w-3 mr-1" />
                Tailored Programs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Programs Designed for <span className="text-primary">Every Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover specialized benefits crafted for your unique career path and professional goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Target Audiences */}
              <div className="space-y-4">
                {targetAudiences.map((audience, index) => {
                  const IconComponent = audience.icon;
                  const isSelected = selectedAudience === audience.id;
                  return (
                    <Card key={audience.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isSelected ? `bg-gradient-to-r ${audience.gradient} border-primary shadow-lg` : `bg-gradient-to-r ${audience.gradient} border-0`} animate-fade-in`} style={{
                      animationDelay: `${index * 150}ms`
                    }} onClick={() => setSelectedAudience(audience.id)}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl transition-colors duration-300 ${isSelected ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
                            <IconComponent className={`h-6 w-6 ${isSelected ? 'text-primary' : 'text-primary group-hover:text-primary'}`} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                              {audience.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1">
                              {isSelected ? 'Currently viewing benefits' : 'Click to see key benefits'}
                            </p>
                          </div>
                          <ArrowRight className={`h-5 w-5 ml-auto transition-all duration-300 ${isSelected ? 'text-primary translate-x-1' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'}`} />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Right Side - Benefits Details */}
              <div className="lg:sticky lg:top-8">
                <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
                  <div className={`p-6 bg-gradient-to-br ${currentAudience.gradient} rounded-t-lg`}>
                    <div className="flex items-center gap-3 mb-2">
                      <currentAudience.icon className="h-6 w-6 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">{currentAudience.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Key benefits designed for your career stage
                    </p>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {currentAudience.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5 animate-bounce" style={{
                          animationDelay: `${benefitIndex * 100}ms`
                        }} />
                        <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-b-lg">
                    <Button className="w-full" size="sm">
                      {selectedAudience === "chartered-accountants" || selectedAudience === "businesses" ? (
                        <NavLink to="/contact" className="flex items-center gap-2">
                          Enquire
                          <Trophy className="h-4 w-4" />
                        </NavLink>
                      ) : (
                        <NavLink to="/courses" className="flex items-center gap-2">
                          Explore All Programs
                          <Trophy className="h-4 w-4" />
                        </NavLink>
                      )}
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Professional Course Overview */}
        <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce">
                <Trophy className="h-3 w-3 mr-1" />
                Premium Learning Programs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Choose Your <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Professional Path</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From foundational accounting to advanced AI integration, our industry-leading programs 
                are designed to accelerate your career with hands-on training and guaranteed placement support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {courses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <Card key={index} className={`group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 bg-card/90 backdrop-blur-sm cursor-pointer animate-fade-in ${course.popular ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20' : 'border-0 shadow-lg hover:border-primary/20'}`} style={{
                    animationDelay: `${index * 200}ms`
                  }}>
                    {/* Popular badge */}
                    {course.popular && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <Badge className="bg-primary text-primary-foreground shadow-lg animate-pulse py-0 my-[15px] mx-[15px]">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                    </div>

                    <CardContent className="p-8 lg:p-10 relative z-10">
                      {/* Course icon and rating */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 bg-gradient-to-br ${course.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 text-amber-500 fill-current" />
                            <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <UsersIcon className="h-3 w-3" />
                            <span>{course.students}</span>
                          </div>
                        </div>
                      </div>

                      {/* Course title and duration */}
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {course.duration}
                          </Badge>
                          <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                            <AwardIcon className="h-3 w-3 mr-1" />
                            {course.level}
                          </Badge>
                        </div>
                      </div>

                      {/* Course description */}
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                        {course.description}
                      </p>

                      {/* Course highlights */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {course.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-200">
                              <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="space-y-3">
                        <Button className={`w-full text-lg py-6 transition-all duration-300 group-hover:scale-105 ${course.popular ? 'bg-primary hover:bg-primary/90 shadow-lg' : 'bg-primary/90 hover:bg-primary'}`} size="lg">
                          <NavLink to="/courses" className="flex items-center gap-2 w-full justify-center">
                            Explore Program
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </NavLink>
                        </Button>
                        
                        <Button variant="outline" className="w-full text-base py-4 hover:bg-muted/50 transition-colors duration-200">
                          <NavLink to="/contact" className="flex items-center gap-2 w-full justify-center">
                            <PlayCircle className="h-4 w-4" />
                            Free Consultation
                          </NavLink>
                        </Button>
                      </div>

                      {/* Hover effect indicator */}
                      <div className={`mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-32 transition-all duration-500`}></div>
                    </CardContent>

                    {/* Corner decoration */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  </Card>
                );
              })}
            </div>

            {/* Additional CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of successful professionals who have accelerated their careers with our industry-leading programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/courses" className="flex items-center gap-2">
                      View All Programs
                      <Trophy className="h-5 w-5" />
                    </NavLink>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Schedule Call
                      <PlayCircle className="h-5 w-5" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <SocialMediaSection />

        {/* Stats Section */}
        

        {/* CTA Section */}
        
      </Layout>
    </>
  );
};
export default Index;
