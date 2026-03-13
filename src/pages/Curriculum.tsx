import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { BookOpen, Calculator, TrendingUp, Bot, FileText, Database, Sparkles, Trophy, ArrowRight, PlayCircle, Target, CheckCircle } from "lucide-react";

export default function Curriculum() {
  const curriculumSections = [
    {
      title: "Accounting Concepts",
      icon: BookOpen,
      topics: [
        "Fundamentals of Accounting",
        "Double Entry Bookkeeping",
        "Journal & Ledger Management",
        "Trial Balance Preparation",
        "Financial Statements",
        "Cash Flow Management"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Company Compliances",
      icon: FileText,
      topics: [
        "Company Law Basics",
        "Annual Filing Requirements",
        "Board Resolutions",
        "Statutory Compliance",
        "ROC Filings",
        "Corporate Governance"
      ],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Advanced Microsoft Excel",
      icon: Calculator,
      topics: [
        "Advanced Formulas & Functions",
        "Pivot Tables & Charts",
        "Data Analysis Tools",
        "Financial Modeling",
        "Automation with Macros",
        "Dashboard Creation"
      ],
      gradient: "from-purple-500/10 to-violet-500/10",
      iconBg: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "ITR and GST",
      icon: TrendingUp,
      topics: [
        "Income Tax Return Filing",
        "GST Registration & Filing",
        "Tax Planning Strategies",
        "Input Tax Credit",
        "Annual Return Preparation",
        "Tax Audit Requirements"
      ],
      gradient: "from-orange-500/10 to-red-500/10",
      iconBg: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "AI Tools in Accounting",
      icon: Bot,
      topics: [
        "ChatGPT for Accounting",
        "Microsoft Copilot Integration",
        "Automated Data Processing",
        "AI-Powered Analysis",
        "Machine Learning Applications",
        "Process Automation"
      ],
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconBg: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Fully Automated Data Entry",
      icon: Database,
      topics: [
        "OCR Technology",
        "Automated Invoice Processing",
        "Bank Statement Reconciliation",
        "Digital Workflow Management",
        "API Integrations",
        "Real-time Data Sync"
      ],
      gradient: "from-pink-500/10 to-rose-500/10",
      iconBg: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <>
      <SEOHead {...pageConfigs.curriculum} />
      <StructuredData type="organization" />
      <StructuredData type="course" data={{
        name: "Comprehensive Accounting Training Program",
        description: "Complete accounting curriculum with AI tools, practical training, and placement assistance",
        skills: ["Accounting Concepts", "Company Compliances", "Advanced Microsoft Excel", "ITR and GST", "AI Tools", "Automated Data Entry"]
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
                  Comprehensive Learning Path
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Course <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Curriculum</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive curriculum designed to make you industry-ready with cutting-edge skills and practical knowledge.
                </p>
              </div>
            </div>
          </section>

          {/* Curriculum Grid */}
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
                  Learning Modules
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Master <span className="text-primary">Essential Skills</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Each module is carefully crafted to build your expertise progressively
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {curriculumSections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-card/90 backdrop-blur-sm cursor-pointer animate-fade-in border-0" style={{ animationDelay: `${index * 150}ms` }}>
                      {/* Gradient background overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg`}></div>
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                      </div>

                      <CardHeader className="text-center relative z-10">
                        <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${section.iconBg} rounded-2xl w-fit group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:rotate-6`}>
                          <IconComponent className="h-8 w-8 text-primary group-hover:animate-pulse" />
                        </div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-3">
                          {section.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0 animate-bounce" style={{ animationDelay: `${idx * 100}ms` }} />
                              <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{topic}</span>
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

          {/* Learning Path */}
          <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  <Target className="h-3 w-3 mr-1" />
                  Learning Journey
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Your <span className="text-primary">Learning Path</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A structured approach to mastering accounting and AI integration
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: "1", title: "Foundation", desc: "Master accounting fundamentals and core concepts", color: "from-blue-500/20 to-cyan-500/20" },
                    { step: "2", title: "Application", desc: "Hands-on practice with real-world scenarios", color: "from-green-500/20 to-emerald-500/20" },
                    { step: "3", title: "Automation", desc: "Learn AI tools and automation techniques", color: "from-purple-500/20 to-violet-500/20" },
                    { step: "4", title: "Placement", desc: "Job placement and career support", color: "from-orange-500/20 to-red-500/20" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg text-primary`}>
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground mb-3 text-xl group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                      
                      {/* Hover indicator */}
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Start your journey with our comprehensive curriculum designed for success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                      <NavLink to="/courses" className="flex items-center gap-2">
                        View Programs
                        <ArrowRight className="h-5 w-5" />
                      </NavLink>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
                      <NavLink to="/contact" className="flex items-center gap-2">
                        <PlayCircle className="h-5 w-5" />
                        Free Consultation
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
