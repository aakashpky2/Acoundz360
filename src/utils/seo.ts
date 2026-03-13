
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const generateMetaTags = (seo: SEOProps) => {
  const siteName = "Acoundz 360";
  const defaultImage = "/acoundz360-logo.png";
  
  return {
    title: seo.title ? `${seo.title} | ${siteName}` : `${siteName} - Be a Next Gen Accountant`,
    description: seo.description || "AI-enabled accounting training with real-time tools and 100% placement assistance. Join Acoundz 360 to become a next-generation accountant.",
    keywords: seo.keywords || "accounting training, AI accounting, next gen accountant, placement assistance, accounting courses, financial training, career development",
    canonicalUrl: seo.canonicalUrl || "https://acoundz360.com/",
    ogImage: seo.ogImage || defaultImage,
    ogType: seo.ogType || "website",
    twitterCard: seo.twitterCard || "summary_large_image",
    robots: `${seo.noIndex ? 'noindex' : 'index'}, ${seo.noFollow ? 'nofollow' : 'follow'}`
  };
};

export const pageConfigs = {
  home: {
    title: "AI-Enabled Accounting Training with 100% Placement Assistance",
    description: "Transform your career with Acoundz 360's AI-enabled accounting training. Get hands-on experience with real-time tools, Microsoft Excel & Tally Prime certification, and guaranteed placement assistance.",
    keywords: "accounting training, AI accounting, next gen accountant, placement assistance, accounting courses, Tally Prime, Microsoft Excel, financial training, career development",
    canonicalUrl: "https://acoundz360.com/"
  },
  about: {
    title: "About Acoundz 360 - Leading Accounting Training Institute",
    description: "Learn about Acoundz 360's mission to create next-generation accountants through AI-enabled training, expert faculty, and comprehensive placement support in Kerala, India.",
    keywords: "about acoundz 360, accounting institute Kerala, AI accounting training, placement assistance, accounting education",
    canonicalUrl: "https://acoundz360.com/about"
  },
  courses: {
    title: "Accounting Courses - AI-Enabled Training Programs",
    description: "Explore our comprehensive accounting courses including Accounts Manager Program, Advanced AI Program, GST Course, and Tally Prime certification with 100% placement assistance.",
    keywords: "accounting courses, Accounts Manager Program, Advanced AI Program, GST course, Tally Prime certification, Microsoft Excel training",
    canonicalUrl: "https://acoundz360.com/courses"
  },
  curriculum: {
    title: "Accounting Training Curriculum - Comprehensive Learning Path",
    description: "Discover our detailed accounting curriculum covering practical training, AI tools, software proficiency, and industry-relevant skills for modern accounting professionals.",
    keywords: "accounting curriculum, training syllabus, accounting education, practical training, AI tools, software training",
    canonicalUrl: "https://acoundz360.com/curriculum"
  },
  features: {
    title: "Features - Why Choose Acoundz 360 for Accounting Training",
    description: "Explore unique features of Acoundz 360 including AI-enabled learning, real-time tools, expert faculty, flexible timings, and comprehensive placement support.",
    keywords: "accounting training features, AI learning, real-time tools, expert faculty, placement support, flexible training",
    canonicalUrl: "https://acoundz360.com/features"
  },
  placement: {
    title: "100% Placement Assistance - Career Support Services",
    description: "Get guaranteed placement assistance with our comprehensive career support including resume building, interview preparation, and direct industry connections.",
    keywords: "placement assistance, career support, job placement, interview preparation, resume building, accounting jobs",
    canonicalUrl: "https://acoundz360.com/placement"
  },
  contact: {
    title: "Contact Us - Get in Touch with Acoundz 360",
    description: "Contact Acoundz 360 for accounting course inquiries. Call 9946524366 or visit our office at TC 29/4615, Central Plaza, Vazhuthacaud, Thiruvananthapuram, Kerala.",
    keywords: "contact acoundz 360, accounting training inquiry, course information, Thiruvananthapuram accounting institute",
    canonicalUrl: "https://acoundz360.com/contact"
  },
  placementPortal: {
    title: "Placement Portal - Student Career Dashboard",
    description: "Access your placement portal for job opportunities, career resources, and placement support services at Acoundz 360.",
    keywords: "placement portal, student dashboard, job opportunities, career resources",
    canonicalUrl: "https://acoundz360.com/placement-portal"
  },
  trainingPortal: {
    title: "Training Portal - Student Learning Dashboard",
    description: "Access your training portal for course materials, assignments, and learning resources at Acoundz 360.",
    keywords: "training portal, student portal, course materials, learning resources",
    canonicalUrl: "https://acoundz360.com/training-portal"
  },
  privacyPolicy: {
    title: "Privacy Policy - Data Protection & Privacy",
    description: "Read our privacy policy to understand how Acoundz 360 collects, uses, and protects your personal information and data.",
    keywords: "privacy policy, data protection, personal information, data security",
    canonicalUrl: "https://acoundz360.com/privacy-policy"
  },
  termsConditions: {
    title: "Terms & Conditions - Service Agreement",
    description: "Review the terms and conditions for using Acoundz 360 services, courses, and training programs.",
    keywords: "terms conditions, service agreement, terms of use, legal terms",
    canonicalUrl: "https://acoundz360.com/terms-conditions"
  }
};
