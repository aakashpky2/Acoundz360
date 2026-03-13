import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";

export default function PrivacyPolicy() {
  return <Layout>
      <SEOHead {...pageConfigs.privacyPolicy} />
      <StructuredData type="organization" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Your privacy is our priority</p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-sm font-medium">Effective Date: July 19, 2023</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-blue-200/20">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              At <strong>Acoundz 360</strong>, we are deeply committed to protecting your privacy and maintaining the trust you place in us. This comprehensive Privacy Policy explains in detail how we collect, use, store, and protect your personal information when you interact with our website, enroll in our AI-enabled accounting programs, or use our placement services.
            </p>
            <p className="text-foreground leading-relaxed">
              We believe transparency is key to building lasting relationships with our students and partners. This policy reflects our commitment to data protection best practices and compliance with applicable privacy laws.
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Section 1 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">1</div>
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Identity Data:</strong> Full name, date of birth, gender, and profile photographs</li>
                    <li>• <strong>Contact Information:</strong> Email addresses, phone numbers, postal addresses, and emergency contacts</li>
                    <li>• <strong>Educational Background:</strong> Academic qualifications, previous institutions, certifications, and transcripts</li>
                    <li>• <strong>Professional Information:</strong> Work experience, current employment status, career aspirations, and skill assessments</li>
                    <li>• <strong>Financial Information:</strong> Course payment details, scholarship applications, and financial aid documentation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-success pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical & Usage Data</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Device Information:</strong> IP addresses, browser types and versions, operating systems, and device identifiers</li>
                    <li>• <strong>Usage Analytics:</strong> Pages visited, time spent on site, click patterns, search queries, and feature usage</li>
                    <li>• <strong>Learning Data:</strong> Course progress, assignment submissions, quiz scores, and learning preferences</li>
                    <li>• <strong>Communication Records:</strong> Support tickets, chat logs, email correspondence, and feedback submissions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-muted-foreground pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Third-Party Information</h3>
                  <p className="text-foreground mb-2">We may also collect information from trusted third parties including:</p>
                  <ul className="space-y-1 text-foreground">
                    <li>• Educational institutions for verification purposes</li>
                    <li>• Employment partners for placement opportunities</li>
                    <li>• Payment processors for transaction security</li>
                    <li>• Social media platforms (when you choose to connect accounts)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">2</div>
                How We Use Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Educational Services</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Deliver personalized AI-enabled accounting courses</li>
                    <li>• Track learning progress and provide feedback</li>
                    <li>• Create customized learning paths</li>
                    <li>• Issue certificates and credentials</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Placement Assistance</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Match students with suitable job opportunities</li>
                    <li>• Prepare professional profiles and resumes</li>
                    <li>• Coordinate interviews and assessments</li>
                    <li>• Provide career guidance and mentorship</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Communication</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Send course updates and announcements</li>
                    <li>• Provide technical support and assistance</li>
                    <li>• Share newsletters and educational content</li>
                    <li>• Notify about new features and opportunities</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Platform Improvement</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Analyze usage patterns to enhance user experience</li>
                    <li>• Develop new features and services</li>
                    <li>• Conduct research and analytics</li>
                    <li>• Ensure platform security and stability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">3</div>
                Data Sharing and Disclosure
              </h2>
              
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Important Promise</h3>
                <p className="text-red-700 dark:text-red-300">We never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </div>

              <p className="text-foreground mb-6">We may share your information only in the following limited circumstances:</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-accent-foreground">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Trusted Service Providers</h4>
                    <p className="text-muted-foreground">Cloud hosting services, email platforms, payment processors, and analytics tools that help us operate our platform securely.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-accent-foreground">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Employment Partners</h4>
                    <p className="text-muted-foreground">Verified employers and recruitment agencies for placement opportunities (only with your explicit consent).</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-accent-foreground">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Legal Requirements</h4>
                    <p className="text-muted-foreground">Government agencies or legal authorities when required by law, court orders, or to protect our rights and safety.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Continue with remaining sections... */}
            {/* Section 4 - Cookies and Tracking */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">4</div>
                Cookies and Tracking Technologies
              </h2>
              
              <p className="text-foreground mb-6">We use cookies and similar technologies to enhance your experience and improve our services:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">Required for basic website functionality and security.</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">Help us understand how you use our platform to improve it.</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Preference Cookies</h4>
                  <p className="text-sm text-muted-foreground">Remember your settings and personalize your experience.</p>
                </div>
              </div>
              
              <p className="text-foreground mt-4">You can control cookie settings through your browser, though some features may not function properly if disabled.</p>
            </section>

            {/* Section 5 - Security */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">5</div>
                Security Measures
              </h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 mb-6">
                <p className="text-foreground">We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Safeguards</h4>
                  <ul className="space-y-1 text-foreground">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Advanced firewall protection</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Secure data centers with 24/7 monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Administrative Controls</h4>
                  <ul className="space-y-1 text-foreground">
                    <li>• Role-based access controls</li>
                    <li>• Employee training on data protection</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular backup and recovery protocols</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 - Your Rights */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">6</div>
                Your Privacy Rights
              </h2>
              
              <p className="text-foreground mb-6">You have several important rights regarding your personal information:</p>
              
              <div className="space-y-4">
                {[{
                title: "Access",
                desc: "Request a copy of all personal data we hold about you"
              }, {
                title: "Correction",
                desc: "Update or correct any inaccurate information"
              }, {
                title: "Deletion",
                desc: "Request deletion of your personal data (subject to legal requirements)"
              }, {
                title: "Portability",
                desc: "Receive your data in a structured, machine-readable format"
              }, {
                title: "Restriction",
                desc: "Limit how we process your information"
              }, {
                title: "Objection",
                desc: "Object to processing based on legitimate interests"
              }, {
                title: "Consent Withdrawal",
                desc: "Withdraw consent for marketing communications at any time"
              }].map((right, index) => <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{right.title}</h4>
                      <p className="text-muted-foreground text-sm">{right.desc}</p>
                    </div>
                  </div>)}
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Us About Privacy</h2>
              <p className="text-center mb-8 opacity-90">
                Have questions about this policy or want to exercise your privacy rights? We're here to help.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Data Protection Officer</p>
                    <p>📧 info@acoundz360.com</p>
                    <p>📞 +91 9946524366</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Office Address</p>
                    <p>📍 TC 29/4615, Central Plaza, Vazhuthacaud</p>
                    <p>Thiruvananthapuram, Kerala 695014</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>;
}
