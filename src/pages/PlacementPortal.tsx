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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Building2, GraduationCap, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const studentLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const companyLoginSchema = z.object({
  companyEmail: z.string().email("Please enter a valid company email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().min(2, "Company name is required"),
});

type StudentLoginForm = z.infer<typeof studentLoginSchema>;
type CompanyLoginForm = z.infer<typeof companyLoginSchema>;

export default function PlacementPortal() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const studentForm = useForm<StudentLoginForm>({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const companyForm = useForm<CompanyLoginForm>({
    resolver: zodResolver(companyLoginSchema),
    defaultValues: {
      companyEmail: "",
      password: "",
      companyName: "",
    },
  });

  const onStudentSubmit = async (data: StudentLoginForm) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome to the Student Portal!",
      });
      setIsLoading(false);
    }, 1500);
  };

  const onCompanySubmit = async (data: CompanyLoginForm) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Welcome ${data.companyName}!`,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <SEOHead {...pageConfigs.placementPortal} />
      <StructuredData type="organization" />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Placement <span className="text-primary">Portal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect students with opportunities and companies with talent
            </p>
          </div>

          {/* Login Tabs */}
          <div className="max-w-md mx-auto">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student Login
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Login
                </TabsTrigger>
              </TabsList>

              {/* Student Login Form */}
              <TabsContent value="student">
                <Card className="shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Student Portal</CardTitle>
                    <CardDescription>
                      Access your placement dashboard and opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...studentForm}>
                      <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-6">
                        <FormField
                          control={studentForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    {...field}
                                    type="email"
                                    placeholder="student@example.com"
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={studentForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    {...field}
                                    type="password"
                                    placeholder="Enter your password"
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? "Signing In..." : "Sign In as Student"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Company Login Form */}
              <TabsContent value="company">
                <Card className="shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Company Portal</CardTitle>
                    <CardDescription>
                      Manage job postings and connect with talented students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...companyForm}>
                      <form onSubmit={companyForm.handleSubmit(onCompanySubmit)} className="space-y-6">
                        <FormField
                          control={companyForm.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    {...field}
                                    placeholder="Your Company Name"
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={companyForm.control}
                          name="companyEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Email</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    {...field}
                                    type="email"
                                    placeholder="hr@company.com"
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={companyForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    {...field}
                                    type="password"
                                    placeholder="Enter your password"
                                    className="pl-10"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent/90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Signing In..." : "Sign In as Company"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Students</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Browse job opportunities</li>
                    <li>• Apply to positions</li>
                    <li>• Track application status</li>
                    <li>• Access career resources</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Companies</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Post job opportunities</li>
                    <li>• Review student profiles</li>
                    <li>• Manage applications</li>
                    <li>• Schedule interviews</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
