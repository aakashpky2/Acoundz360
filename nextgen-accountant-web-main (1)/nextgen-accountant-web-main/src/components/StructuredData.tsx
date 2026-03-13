
interface StructuredDataProps {
  type: 'organization' | 'course' | 'localBusiness' | 'faq' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = "https://acoundz360.com";
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Acoundz 360",
          "alternateName": ["Accountz 360", "Accounts 360", "Acountz 360", "Acounds 360", "Accounts360", "Accountz360", "Acountz360"],
          "url": baseUrl,
          "logo": `${baseUrl}/acoundz360-logo.png`,
          "description": "AI-enabled accounting training with real-time tools and 100% placement assistance",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "TC 29/4615, Central Plaza, Vazhuthacaud",
            "addressLocality": "Thiruvananthapuram",
            "addressRegion": "Kerala",
            "postalCode": "695014",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9946524366",
            "contactType": "customer service",
            "email": "info@acoundz360.com"
          },
          "sameAs": [
            "https://www.facebook.com/share/151vkdbf11/",
            "https://www.instagram.com/acoundz360_dbiz"
          ]
        };
      
      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#organization`,
          "name": "Acoundz 360",
          "image": `${baseUrl}/acoundz360-logo.png`,
          "telephone": "+91-9946524366",
          "email": "info@acoundz360.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "TC 29/4615, Central Plaza, Vazhuthacaud",
            "addressLocality": "Thiruvananthapuram",
            "addressRegion": "Kerala",
            "postalCode": "695014",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "8.5241",
            "longitude": "76.9366"
          },
          "openingHours": "Mo-Su 07:00-22:00",
          "priceRange": "$$"
        };
      
      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data?.name || "Accounting Training Course",
          "description": data?.description || "Comprehensive accounting training with AI-enabled tools and placement assistance",
          "provider": {
            "@type": "Organization",
            "name": "Acoundz 360",
            "url": baseUrl
          },
          "courseMode": ["online", "onsite"],
          "educationalLevel": "Professional",
          "teaches": data?.skills || ["Accounting", "Tally Prime", "Microsoft Excel", "GST", "Financial Management"]
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
