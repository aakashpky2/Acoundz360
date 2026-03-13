import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, CheckCircle, Star, Calendar, Trophy, ArrowRight, Sparkles, Zap, GraduationCap, Target } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Courses() {
  const mainPrograms = [
    {
      title: "Accounts Manager Program",
      duration: "3 to 6 Months",
      description: "Comprehensive training for accounting professionals with hands-on experience",
      modules: [
        "Accounting Concepts",
        "GST & Tax Planning",
        "Income Tax Returns",
        "UAE VAT",
        "Tally & Zoho",
        "Advanced Excel",
        "AI Tools Integration",
        "Company Compliances"
      ],
      price: "Contact for Pricing",
      featured: true,
      students: "500+",
      rating: "4.9",
      level: "Beginner to Intermediate"
    },
    {
      title: "Advanced AI Program",
      duration: "12 to 18 Months",
      description: "Complete AI-enabled accounting program with automation and advanced tools",
      modules: [
        "All Accounts Manager modules",
        "AI Agents Development",
        "Process Automation",
        "Automated Invoice Processing",
        "Purchase Entry Automation",
        "Bank Reconciliations",
        "Advanced Report Generation",
        "Machine Learning in Finance"
      ],
      price: "Contact for Pricing",
      featured: false,
      students: "200+",
      rating: "4.8",
      level: "Advanced"
    }
  ];

  const shortTermCourses = [
    {
      title: "GST Mastery",
      duration: "15 Days",
      description: "Complete GST filing and compliance training",
      icon: Award,
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Income Tax Returns",
      duration: "1 Month",
      description: "ITR filing for individuals and businesses",
      icon: Trophy,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Tally Certification",
      duration: "15 Days",
      description: "Official Tally certification program",
      icon: GraduationCap,
      gradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Bookkeeping Essentials",
      duration: "1 Month",
      description: "Foundation of accounting and bookkeeping",
      icon: CheckCircle,
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Company Compliances",
      duration: "15 Days",
      description: "Legal compliance for companies",
      icon: Target,
      gradient: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  const features = [
    {
      title: "Industry Certifications",
      description: "Microsoft & Tally certified programs with official recognition",
      icon: Award,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Personal Mentorship",
      description: "One-on-one guidance from seasoned industry experts",
      icon: Users,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "100% Placement Guarantee",
      description: "Comprehensive job placement assistance with career support",
      icon: Trophy,
      gradient: "from-purple-500/20 to-violet-500/20"
    }
  ];

  return (
    <>
      <SEOHead {...pageConfigs.courses} />
      <StructuredData type="organization" />
      <StructuredData 
        type="course" 
        data={{
          name: "Comprehensive Accounting Training Programs",
          description: "AI-enabled accounting courses including Accounts Manager Program and Advanced AI Program with 100% placement assistance",
          skills: ["Accounting", "Tally Prime", "Microsoft Excel", "GST", "Financial Management", "AI Tools", "Process Automation"]
        }}
      />
      <Layout>
      <div className="bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full animate-spin-slow"></div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce">
                <Sparkles className="h-3 w-3 mr-1" />
                Professional Training Programs
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Master <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Accounting</span><br />
                & AI Technology
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive range of accounting courses designed for different career goals and timelines.
                From foundational skills to advanced AI integration.
              </p>
            </div>
          </div>
        </section>

        {/* Main Programs */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                <Trophy className="h-3 w-3 mr-1" />
                Main Programs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Professional <span className="text-primary">Development Programs</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to accelerate your career with industry-leading curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainPrograms.map((program, index) => (
                <Card key={index} className={`group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 bg-card/90 backdrop-blur-sm cursor-pointer animate-fade-in ${program.featured ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20' : 'border-0 shadow-lg'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  {program.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <Badge className="bg-primary text-primary-foreground shadow-lg animate-pulse">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {program.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground mt-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Small Batches
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-amber-500 fill-current" />
                          <span className="text-sm font-semibold text-foreground">{program.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>{program.students}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {program.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                        <Award className="h-3 w-3 mr-1" />
                        {program.level}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                      {program.description}
                    </p>
                    
                    <h4 className="font-semibold text-foreground mb-4">Course Modules:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {program.modules.map((module, idx) => (
                        <div key={idx} className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{module}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{program.price}</span>
                      </div>
                      
                      <Button className={`w-full text-lg py-6 transition-all duration-300 group-hover:scale-105 ${program.featured ? 'bg-primary hover:bg-primary/90 shadow-lg' : 'bg-primary/90 hover:bg-primary'}`} size="lg">
                        <NavLink to="/contact" className="flex items-center gap-2 w-full justify-center">
                          Enroll Now
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </NavLink>
                      </Button>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>
                  </CardContent>

                  {/* Corner decoration */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Short Term Courses */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                <Zap className="h-3 w-3 mr-1" />
                Quick Skills
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Short-Term <span className="text-primary">Specialization Courses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Focused skill-building courses for specific accounting and software competencies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortTermCourses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-card/90 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-br ${course.gradient} rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <IconComponent className="h-6 w-6 text-primary group-hover:animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                        {course.description}
                      </p>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-105">
                        <NavLink to="/contact" className="flex items-center gap-2 w-full justify-center">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </NavLink>
                      </Button>
                    </CardContent>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                <Star className="h-3 w-3 mr-1" />
                Premium Benefits
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What You Get With <span className="text-primary">Every Course</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support and industry-leading resources to ensure your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-card/90 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl w-fit group-hover:scale-125 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-3 text-xl group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-20">
              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of successful accounting professionals who have transformed their careers with our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Get Started Today
                      <Trophy className="h-5 w-5" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
}
