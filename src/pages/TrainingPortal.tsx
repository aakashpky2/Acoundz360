import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GraduationCap, Shield, Mail, Lock, Calculator, FileText, BookOpen, Target } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const studentLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const adminLoginSchema = z.object({
  email: z.string().email("Please enter a valid admin email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type StudentLoginForm = z.infer<typeof studentLoginSchema>;
type AdminLoginForm = z.infer<typeof adminLoginSchema>;

export default function TrainingPortal() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { toast } = useToast();

  const studentForm = useForm<StudentLoginForm>({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const adminForm = useForm<AdminLoginForm>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onStudentSubmit = async (data: StudentLoginForm) => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "Please Enter Valid Email and Password!"
      });
      setIsLoading(false);
    }, 1500);
  };

  const onAdminSubmit = async (data: AdminLoginForm) => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "Please Enter Valid Email and Password!"
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleStartPractice = (practiceTitle: string) => {
    setLoginDialogOpen(true);
  };

  const practiceAreas = [
    {
      title: "GST Practice",
      description: "Master Goods and Services Tax with interactive simulations",
      icon: Calculator,
      color: "bg-blue-500"
    },
    {
      title: "Income Tax",
      description: "Practice income tax calculations and filing procedures",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      title: "TDS Training",
      description: "Learn Tax Deducted at Source with real-world scenarios",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      title: "UAE VAT",
      description: "Comprehensive UAE Value Added Tax simulation",
      icon: Target,
      color: "bg-orange-500"
    }
  ];

  return (
    <Layout>
      <SEOHead {...pageConfigs.trainingPortal} />
      <StructuredData type="organization" />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5">
        <div className="flex">
          {/* Left Side - Practice Areas */}
          <div className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="max-w-4xl mx-[125px]">
                <div className="mb-12 mx-0">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Training <span className="text-primary">Portal</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Learn through Practice - Unlimited simulation experience for students
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {practiceAreas.map((area, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer px-[24px] py-[24px] mx-0">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 ${area.color} rounded-lg text-white`}>
                          <area.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStartPractice(area.title)}
                          >
                            Start Practice
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Unlimited Practice Sessions
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our simulation-based learning platform provides unlimited access to practice
                      GST, Income Tax, TDS, and UAE VAT scenarios. Master these concepts through
                      hands-on experience with real-world case studies.
                    </p>
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-sm text-muted-foreground">Practice Scenarios</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Access</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">∞</div>
                        <div className="text-sm text-muted-foreground">Unlimited Practice</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side - Login Forms */}
          <div className="w-96 bg-card border-l p-8">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student Login
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Admin Login
                </TabsTrigger>
              </TabsList>

              {/* Student Login Form */}
              <TabsContent value="student">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Student Access</CardTitle>
                    <CardDescription>
                      Login to access unlimited practice sessions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...studentForm}>
                      <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-4">
                        <FormField control={studentForm.control} name="email" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input {...field} type="email" placeholder="student@example.com" className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />

                        <FormField control={studentForm.control} name="password" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input {...field} type="password" placeholder="Enter your password" className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />

                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Signing In..." : "Access Training Portal"}
                        </Button>

                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Admin Login Form */}
              <TabsContent value="admin">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Admin Access</CardTitle>
                    <CardDescription>
                      Administrative portal for training management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...adminForm}>
                      <form onSubmit={adminForm.handleSubmit(onAdminSubmit)} className="space-y-4">
                        <FormField control={adminForm.control} name="email" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Admin Email</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input {...field} type="email" placeholder="admin@acoundz360.com" className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />

                        <FormField control={adminForm.control} name="password" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Admin Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input {...field} type="password" placeholder="Enter admin password" className="pl-10" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />

                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                          {isLoading ? "Signing In..." : "Access Admin Panel"}
                        </Button>

                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Login Required Dialog */}
        <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Login Required
              </DialogTitle>
              <DialogDescription>
                Please login to access the training portal and start practicing.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                To begin your practice session, you need to be logged in. Please use the login form on the right side of the screen.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => setLoginDialogOpen(false)}
                  className="flex-1"
                >
                  Got it
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
