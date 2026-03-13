import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { pageConfigs } from "@/utils/seo";

export default function TermsConditions() {
  return <Layout>
      <SEOHead {...pageConfigs.termsConditions} />
      <StructuredData type="organization" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl opacity-90">Your agreement with Acoundz 360</p>
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
              Welcome to <strong>Acoundz 360</strong>! These comprehensive Terms and Conditions constitute a legally binding agreement between you and Acoundz 360, governing your access to and use of our AI-enabled accounting training platform, educational services, and placement assistance programs.
            </p>
            <p className="text-foreground leading-relaxed">
              By accessing our website, enrolling in our courses, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these terms. Please read them carefully before proceeding.
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Section 1 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">1</div>
                Eligibility and Account Registration
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Age Requirements</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• You must be at least <strong>16 years old</strong> to enroll in our courses</li>
                    <li>• Students under 18 must have verifiable parental or guardian consent</li>
                    <li>• We may request age verification documentation when necessary</li>
                    <li>• Parents/guardians are responsible for minors' use of our services</li>
                  </ul>
                </div>

                <div className="border-l-4 border-success pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Account Responsibilities</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Provide accurate, current, and complete registration information</li>
                    <li>• Maintain the confidentiality of your login credentials</li>
                    <li>• Notify us immediately of any unauthorized account access</li>
                    <li>• Use only one account per person unless explicitly authorized</li>
                    <li>• Keep your contact information and profile details updated</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800/20 rounded-lg p-4">
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    <strong>Note:</strong> You are fully responsible for all activities conducted through your account, including any unauthorized access resulting from inadequate security practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">2</div>
                User Responsibilities and Code of Conduct
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">✅ You Agree To:</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Use our platform solely for legitimate educational purposes</li>
                    <li>• Respect intellectual property rights of all content</li>
                    <li>• Maintain professional conduct in all interactions</li>
                    <li>• Complete assignments and assessments honestly</li>
                    <li>• Provide constructive feedback to improve our services</li>
                    <li>• Follow all applicable laws and regulations</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">❌ Prohibited Activities:</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Sharing account credentials with unauthorized persons</li>
                    <li>• Downloading, copying, or redistributing course content</li>
                    <li>• Engaging in fraudulent or deceptive practices</li>
                    <li>• Disrupting platform operations or other users' experience</li>
                    <li>• Using automated tools to access our services</li>
                    <li>• Posting inappropriate, offensive, or harmful content</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-muted rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Academic Integrity</h4>
                <p className="text-foreground">
                  We maintain the highest standards of academic integrity. Plagiarism, cheating, or any form of academic dishonesty will result in immediate course suspension and may lead to permanent account termination without refund.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">3</div>
                Course Access, Payments, and Refunds
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Course Access Policy</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Immediate Access:</strong> Course materials become available immediately upon successful payment verification</li>
                    <li>• <strong>Lifetime Access:</strong> Most courses include lifetime access to core materials and updates</li>
                    <li>• <strong>Progressive Unlocking:</strong> Some advanced modules may unlock based on completion of prerequisites</li>
                    <li>• <strong>Mobile Compatibility:</strong> Access your courses across multiple devices with seamless synchronization</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Accepted Methods</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                        <li>• Net Banking (all major Indian banks)</li>
                        <li>• UPI (PhonePe, Google Pay, Paytm)</li>
                        <li>• Digital wallets and EMI options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Payment Security</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• PCI DSS compliant payment processing</li>
                        <li>• 256-bit SSL encryption for all transactions</li>
                        <li>• No storage of payment card details</li>
                        <li>• Fraud detection and prevention systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">7-Day Money-Back Guarantee</h4>
                      <p className="text-foreground text-sm">Full refund available within 7 days of purchase if you've completed less than 20% of the course content.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Partial Refunds</h4>
                      <p className="text-foreground text-sm">Pro-rated refunds may be considered for exceptional circumstances, evaluated case-by-case.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Non-Refundable Items</h4>
                      <p className="text-foreground text-sm">Certification fees, assessment costs, and placement services are non-refundable after activation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">4</div>
                Intellectual Property Rights
              </h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 mb-6">
                <p className="text-foreground font-medium">
                  All educational content, including but not limited to videos, texts, graphics, software, AI models, assessments, and methodologies, are the exclusive intellectual property of Acoundz 360 and are protected under Indian and international copyright laws.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Our Rights</h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Exclusive ownership of all course materials and AI technologies</li>
                    <li>• Right to update, modify, or discontinue content without notice</li>
                    <li>• Protection against unauthorized reproduction or distribution</li>
                    <li>• Legal remedies for intellectual property violations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Your Limited License</h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Personal, non-commercial use of course materials only</li>
                    <li>• No right to copy, distribute, or create derivative works</li>
                    <li>• License terminates upon course completion or account closure</li>
                    <li>• Right to use knowledge gained for personal career advancement</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚠️ Copyright Violation Consequences</h4>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Unauthorized use, reproduction, or distribution of our content will result in immediate account termination, legal action, and claims for damages as permitted by law.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">5</div>
                Placement Assistance Program
              </h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">Our Commitment to Your Success</h3>
                <p className="text-foreground">
                  We provide <strong>100% placement assistance</strong> to eligible students, including resume building, interview preparation, and direct connections with our hiring partners. However, this is assistance, not a job guarantee.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">✨ What We Provide</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Professional resume crafting</li>
                      <li>• Interview skills training</li>
                      <li>• Direct employer connections</li>
                      <li>• Skill assessment preparation</li>
                      <li>• Career counseling sessions</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">📋 Eligibility Criteria</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Complete all required courses</li>
                      <li>• Achieve minimum 80% in assessments</li>
                      <li>• Maintain professional conduct</li>
                      <li>• Actively participate in placement activities</li>
                      <li>• Meet employer-specific requirements</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">⚖️ Important Disclaimers</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Final hiring decisions rest with employers</li>
                      <li>• Market conditions may affect opportunities</li>
                      <li>• Individual performance impacts outcomes</li>
                      <li>• Geographic limitations may apply</li>
                      <li>• No guarantee of specific salary levels</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-foreground mb-3">Student Responsibilities for Placement</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Active Participation:</strong> Engage professionally with potential employers and respond promptly to opportunities</li>
                    <li>• <strong>Skill Development:</strong> Continuously improve technical and soft skills as recommended by our career counselors</li>
                    <li>• <strong>Availability:</strong> Be available for interviews, assessments, and placement activities during business hours</li>
                    <li>• <strong>Honesty:</strong> Provide accurate information about skills, experience, and career preferences</li>
                    <li>• <strong>Commitment:</strong> Honor job offers and maintain professional relationships with placed employers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">6</div>
                Limitation of Liability and Disclaimers
              </h2>
              
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Important Legal Notice</h3>
                <p className="text-amber-700 dark:text-amber-300">
                  While we strive to provide exceptional educational services, certain limitations apply to our liability. Please read this section carefully as it affects your legal rights.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Limitation of Liability</h3>
                  <p className="text-foreground mb-4">
                    To the maximum extent permitted by applicable law, Acoundz 360, its directors, employees, partners, and affiliates shall not be liable for any:
                  </p>
                  <ul className="space-y-2 text-foreground pl-6">
                    <li>• <strong>Direct Damages:</strong> Lost profits, revenue, or business opportunities</li>
                    <li>• <strong>Indirect Damages:</strong> Consequential, incidental, or punitive damages</li>
                    <li>• <strong>Service Interruptions:</strong> Temporary unavailability or technical issues</li>
                    <li>• <strong>Third-Party Actions:</strong> Employer decisions or market conditions affecting placement</li>
                    <li>• <strong>Data Loss:</strong> Loss of user-generated content or progress data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Service Disclaimers</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Educational Content</h4>
                      <p className="text-sm text-foreground">Content is provided for educational purposes only and should not be considered as professional financial or legal advice.</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Technology Platform</h4>
                      <p className="text-sm text-foreground">We provide our platform "as is" without warranties regarding uninterrupted access or error-free operation.</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">External Links</h4>
                      <p className="text-sm text-foreground">We are not responsible for content, policies, or practices of third-party websites linked from our platform.</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Results Variance</h4>
                      <p className="text-sm text-foreground">Individual learning outcomes and career results may vary based on personal effort, aptitude, and market conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 & 8 */}
            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">7</div>
                Terms Modifications and Updates
              </h2>
              
              <div className="space-y-4">
                <p className="text-foreground">
                  We reserve the right to update, modify, or revise these Terms and Conditions at any time to reflect changes in our services, legal requirements, or business practices.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">How We Handle Changes</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• <strong>Advance Notice:</strong> Major changes will be communicated at least 30 days in advance</li>
                    <li>• <strong>Email Notifications:</strong> Important updates sent to your registered email address</li>
                    <li>• <strong>Website Announcements:</strong> Prominent notices displayed on our platform</li>
                    <li>• <strong>Continued Use:</strong> Your continued use after changes constitutes acceptance of new terms</li>
                    <li>• <strong>Opt-Out Rights:</strong> You may discontinue services if you disagree with material changes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-card border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">8</div>
                Governing Law and Dispute Resolution
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-foreground mb-3">Applicable Law</h3>
                  <p className="text-foreground">
                    These Terms and Conditions are governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of courts located in <strong>Thiruvananthapuram, Kerala</strong>.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Preferred Dispute Resolution</h3>
                  <p className="text-foreground mb-4">
                    We believe in resolving disputes amicably and encourage direct communication for faster resolution:
                  </p>
                  <ol className="space-y-2 text-foreground">
                    <li><strong>1. Direct Communication:</strong> Contact our support team for immediate assistance</li>
                    <li><strong>2. Escalation Process:</strong> Unresolved issues escalated to senior management</li>
                    <li><strong>3. Mediation:</strong> Good faith mediation attempts before legal proceedings</li>
                    <li><strong>4. Legal Action:</strong> Court proceedings as the final resort</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Questions About These Terms?</h2>
              <p className="text-center mb-8 opacity-90">
                Our legal and support team is here to help clarify any aspects of these terms and conditions.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Legal Inquiries</h3>
                    <div className="space-y-2 text-sm">
                      <p>📧 info@acoundz360.com</p>
                      <p>📞 +91 9946524366</p>
                      <p>⏰ Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Office Address</h3>
                    <div className="space-y-1 text-sm">
                      <p>📍 TC 29/4615, Central Plaza</p>
                      <p>Vazhuthacaud, Thiruvananthapuram</p>
                      <p>Kerala 695014, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <p className="text-sm opacity-80">Last Updated: July 19, 2023 | Version 2.0 | Document ID: TC-2025-001</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>;
}
