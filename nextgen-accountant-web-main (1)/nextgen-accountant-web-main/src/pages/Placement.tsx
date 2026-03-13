import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, Target, Award, CheckCircle, TrendingUp, ArrowRight, Briefcase, Star, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Placement() {
  const navigate = useNavigate();
  const handleApplyForPlacement = () => {
    navigate('/placement-portal');
  };

  const placementFeatures = [{
    title: "100% Placement Guarantee",
    description: "We guarantee job placement for all our graduates with our extensive industry network",
    icon: Target
  }, {
    title: "Industry Partnerships",
    description: "Strong partnerships with leading companies across various sectors",
    icon: Building
  }, {
    title: "Career Preparation",
    description: "Comprehensive interview preparation and professional grooming sessions",
    icon: Users
  }, {
    title: "Continuous Support",
    description: "Ongoing career guidance and support even after placement",
    icon: Award
  }];

  const placementProcess = [{
    step: "1",
    title: "Skill Assessment",
    description: "Evaluate your technical and soft skills"
  }, {
    step: "2",
    title: "Resume Building",
    description: "Create a professional resume highlighting your strengths"
  }, {
    step: "3",
    title: "Interview Preparation",
    description: "Mock interviews and personality development sessions"
  }, {
    step: "4",
    title: "Job Matching",
    description: "Match your profile with suitable job opportunities"
  }, {
    step: "5",
    title: "Final Placement",
    description: "Secure your dream job with our support"
  }];

  const companyTypes = ["Chartered Accountant Firms", "Corporate Finance Departments", "Tax Consulting Companies", "Internal Audit Firms", "Financial Services Companies", "Government Organizations", "Multinational Corporations", "Startups and SMEs"];

  return (
    <>
      <SEOHead {...pageConfigs.placement} />
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      
      <Layout>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent opacity-95"></div>
          <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                100% <span className="text-accent">Placement</span>
                <br />Guarantee
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your career success is our commitment. We ensure every graduate gets placed in a suitable role with industry-leading companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={handleApplyForPlacement}>
                  Apply for Placement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/10">
                <CardContent className="pt-6">
                  <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-4xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-muted-foreground font-medium">Placement Rate</p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/10">
                <CardContent className="pt-6">
                  <Building className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-4xl font-bold text-foreground mb-2">50+</h3>
                  <p className="text-muted-foreground font-medium">Partner Companies</p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/10">
                <CardContent className="pt-6">
                  <Users className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground font-medium">Successful Placements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Our Placement Program <span className="text-accent">Works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach ensures every student gets the support they need to succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {placementFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/10">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Placement <span className="text-accent">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to ensure your career success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {placementProcess.map((step, index) => <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                      {step.step}
                    </div>
                    {index < placementProcess.length - 1 && <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-primary/50 transform -translate-x-10"></div>}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where Our Graduates <span className="text-accent">Work</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our alumni are placed across diverse industries and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyTypes.map((type, index) => <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gradient-to-br from-success/20 to-accent/20 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                    </div>
                    <span className="text-foreground font-medium">{type}</span>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Trophy className="h-20 w-20 text-accent mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Career Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our placement program and take the first step towards a successful career in accounting and finance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Direct Industry Access</h4>
                  <p className="text-white/80 text-sm">Access to exclusive job opportunities</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Professional Network</h4>
                  <p className="text-white/80 text-sm">Strong connections across finance sector</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">Real-time Openings</h4>
                  <p className="text-white/80 text-sm">Immediate job opportunities</p>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={handleApplyForPlacement}>
                Apply for Placement Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
