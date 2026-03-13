import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users, Target, Award, Building, CheckCircle, Sparkles, ArrowRight, Trophy, Star, Calendar, TrendingUp, Zap, PlayCircle, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Students Trained",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "from-blue-500/10 to-cyan-500/10",
      accent: "text-blue-600"
    },
    {
      icon: Target,
      number: "100%",
      label: "Placement Rate",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "from-green-500/10 to-emerald-500/10",
      accent: "text-green-600"
    },
    {
      icon: Award,
      number: "10+",
      label: "Certifications",
      gradient: "from-orange-500/20 to-amber-500/20",
      iconBg: "from-orange-500/10 to-amber-500/10",
      accent: "text-orange-600"
    },
    {
      icon: Building,
      number: "50+",
      label: "Partner Companies",
      gradient: "from-purple-500/20 to-violet-500/20",
      iconBg: "from-purple-500/10 to-violet-500/10",
      accent: "text-purple-600"
    }
  ];

  const features = [
    "Real-world experience from industry experts",
    "AI-powered learning methodologies", 
    "100% placement assistance guarantee",
    "Hands-on training with live projects",
    "Microsoft & Tally certifications",
    "Lifetime career support"
  ];

  const companyServices = [
    "Tax Planning & Compliance",
    "Internal Audit Services", 
    "Financial Accounting",
    "Business Advisory",
    "Digital Transformation",
    "Process Optimization"
  ];

  return (
    <>
      <SEOHead {...pageConfigs.about} />
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce">
                <Sparkles className="h-3 w-3 mr-1" />
                Excellence in Education
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                About <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Acoundz 360</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforming careers through AI-enabled accounting training with real-time tools and guaranteed placement assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  <Target className="h-3 w-3 mr-1" />
                  Our Mission
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Empowering the <span className="text-primary relative">Next Generation
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Acoundz 360 offers hands-on training in accounting, equipping students with essential skills and AI-powered tools for a successful career in the evolving financial landscape.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Operated under D Biz Consultancy Private Limited, a firm proficient in tax, internal audit, accounting, and advisory services, we bring real-world expertise to our training programs.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Backed by a strong network for student placements, we ensure our graduates are not just trained but also successfully placed in leading organizations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/courses" className="flex items-center gap-2">
                      Explore Programs
                      <ArrowRight className="h-5 w-5" />
                    </NavLink>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Contact Us
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in delay-300">
                <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                  </div>

                  <CardContent className="p-8 lg:p-10 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                        <Zap className="h-6 w-6 text-primary group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Why Choose Us?
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200">
                          <CheckCircle className="h-5 w-5 text-success animate-bounce flex-shrink-0" style={{
                            animationDelay: `${index * 100}ms`
                          }} />
                          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`mt-8 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-32 transition-all duration-500`}></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 animate-bounce">
                <Trophy className="h-3 w-3 mr-1" />
                Our Achievements
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Numbers That <span className="text-primary">Speak for Themselves</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence is reflected in the success of our students and partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-card/80 backdrop-blur-sm cursor-pointer animate-fade-in" style={{
                    animationDelay: `${index * 150}ms`
                  }}>
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    <CardContent className="p-8 text-center relative z-10">
                      <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${stat.iconBg} rounded-2xl w-fit group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:rotate-6`}>
                        <IconComponent className={`h-8 w-8 ${stat.accent} group-hover:animate-pulse`} />
                      </div>
                      <h3 className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {stat.number}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {stat.label}
                      </p>
                      <div className={`mt-4 h-1 w-12 bg-gradient-to-r ${stat.gradient} mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`}></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Background Section */}
        <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                <Building className="h-3 w-3 mr-1" />
                Our Parent Company
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">D Biz Consultancy</span> Private Limited
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Built on years of industry expertise and real-world experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                        <GraduationCap className="h-6 w-6 text-primary group-hover:animate-pulse" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Industry Leadership
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      D Biz Consultancy Private Limited is a leading firm specializing in tax consultation, internal audit, accounting services, and business advisory. With years of industry experience, we understand the exact skills and knowledge required in today's accounting profession.
                    </p>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      This deep industry insight directly translates into our training programs, ensuring our students learn what employers actually need.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-fade-in delay-300">
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-accent/5 to-primary/5 backdrop-blur-sm">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                        <Briefcase className="h-6 w-6 text-primary group-hover:animate-pulse" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Core Services
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {companyServices.map((service, index) => (
                        <div key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200">
                          <Star className="h-4 w-4 text-accent animate-bounce flex-shrink-0" style={{
                            animationDelay: `${index * 100}ms`
                          }} />
                          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the next generation of accounting professionals with industry-leading training and guaranteed placement support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/courses" className="flex items-center gap-2">
                      View All Programs
                      <TrendingUp className="h-5 w-5" />
                    </NavLink>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Talk to Expert
                      <Calendar className="h-5 w-5" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
