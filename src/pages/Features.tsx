import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Award, Bot, Users, Briefcase, BookOpen, Target, Zap, HeadphonesIcon, Sparkles, Trophy, ArrowRight, PlayCircle, CheckCircle, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Microsoft & Tally Certifications",
      description: "Get officially certified in industry-standard tools that employers value most.",
      icon: Award,
      benefits: [
        "Microsoft Excel Certification",
        "Tally Prime Certification", 
        "Industry-recognized credentials",
        "Enhanced resume value"
      ],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AI-based Learning",
      description: "Learn with cutting-edge AI tools that are transforming the accounting industry.",
      icon: Bot,
      benefits: [
        "ChatGPT integration",
        "Microsoft Copilot training",
        "Automated workflow creation",
        "AI-powered analysis tools"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Skill Up & Interview Training",
      description: "Complete personality development and interview preparation program.",
      icon: Target,
      benefits: [
        "Mock interview sessions",
        "Communication skills training",
        "Professional grooming",
        "Confidence building workshops"
      ],
      gradient: "from-purple-500/10 to-violet-500/10",
      iconBg: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Personal Mentorship",
      description: "One-on-one guidance from industry experts throughout your learning journey.",
      icon: Users,
      benefits: [
        "Dedicated mentor assignment",
        "Regular progress reviews",
        "Career guidance sessions",
        "24/7 doubt clearing support"
      ],
      gradient: "from-orange-500/10 to-red-500/10",
      iconBg: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Real-time Tool Integration",
      description: "Hands-on experience with the latest accounting and productivity tools.",
      icon: Zap,
      benefits: [
        "Live project experience",
        "Industry-standard software",
        "Cloud-based solutions",
        "API integrations"
      ],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconBg: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "100% Placement Guarantee",
      description: "Assured job placement with our extensive network of partner companies.",
      icon: Briefcase,
      benefits: [
        "Guaranteed job placement",
        "Resume building support",
        "Interview scheduling",
        "Salary negotiation guidance"
      ],
      gradient: "from-pink-500/10 to-rose-500/10",
      iconBg: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const tools = [
    "Microsoft Excel", "Tally Prime", "Zoho Books", "ChatGPT", 
    "Microsoft Copilot", "Gamma", "Perplexity", "Midjourney"
  ];

  return (
    <>
      <SEOHead {...pageConfigs.features} />
      <StructuredData type="organization" />
      <StructuredData type="course" data={{
        name: "AI-Enabled Accounting Training Features",
        description: "Premium features including Microsoft & Tally certifications, AI-based learning, and 100% placement guarantee",
        skills: ["Microsoft Excel", "Tally Prime", "AI Tools", "Interview Training", "Personal Mentorship", "Real-time Integration"]
      }} />
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
                  Premium Features
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Why Choose <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Acoundz 360</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover the unique features that set us apart and ensure your success in the accounting profession.
                </p>
              </div>
            </div>
          </section>

          {/* Features Grid */}
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
                  Key Features
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Premium <span className="text-primary">Learning Experience</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience the difference with our industry-leading features and support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-card/90 backdrop-blur-sm cursor-pointer animate-fade-in border-0" style={{ animationDelay: `${index * 150}ms` }}>
                      {/* Gradient background overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg`}></div>
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                      </div>

                      <CardHeader className="text-center relative z-10">
                        <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${feature.iconBg} rounded-2xl w-fit group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:rotate-6`}>
                          <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                        </div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0 animate-bounce" style={{ animationDelay: `${idx * 100}ms` }} />
                              <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Hover effect indicator */}
                        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  <Zap className="h-3 w-3 mr-1" />
                  Professional Tools
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Tools You'll <span className="text-primary">Master</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Industry-standard software and cutting-edge AI tools
                </p>
              </div>

              <Card className="group p-8 bg-card/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-wrap justify-center gap-4">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full font-medium hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-fit mx-auto mb-6 animate-pulse">
                    <HeadphonesIcon className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Continuous <span className="text-primary">Support</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Our support doesn't end with course completion. We provide lifetime career guidance and continuous learning opportunities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                      { icon: BookOpen, title: "Lifetime Access", desc: "Access to course materials forever", color: "from-blue-500/20 to-cyan-500/20" },
                      { icon: Users, title: "Alumni Network", desc: "Connect with successful graduates", color: "from-green-500/20 to-emerald-500/20" },
                      { icon: Zap, title: "Skill Updates", desc: "Regular workshops on new technologies", color: "from-purple-500/20 to-violet-500/20" }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                          <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl mx-auto mb-4 w-fit group-hover:scale-125 transition-all duration-500 shadow-lg`}>
                            <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                          <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                          
                          {/* Hover indicator */}
                          <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Section */}
                  <div className="mt-16">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Experience the Difference
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Join thousands who have transformed their careers with our premium features.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                        <NavLink to="/courses" className="flex items-center gap-2">
                          View Programs
                          <Star className="h-5 w-5" />
                        </NavLink>
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                        <NavLink to="/contact" className="flex items-center gap-2">
                          <PlayCircle className="h-5 w-5" />
                          Free Demo
                        </NavLink>
                      </Button>
                    </div>
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
