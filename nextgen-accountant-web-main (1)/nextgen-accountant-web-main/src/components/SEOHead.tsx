
import { Helmet } from 'react-helmet-async';
import { SEOProps, generateMetaTags } from '@/utils/seo';

interface SEOHeadProps extends SEOProps {}

export default function SEOHead(props: SEOHeadProps) {
  const meta = generateMetaTags(props);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content={meta.robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={meta.canonicalUrl} />
      <link rel="alternate" href={meta.canonicalUrl} hrefLang="en" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.ogType} />
      <meta property="og:url" content={meta.canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`https://acoundz360.com${meta.ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Acoundz 360" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={meta.twitterCard} />
      <meta name="twitter:url" content={meta.canonicalUrl} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`https://acoundz360.com${meta.ogImage}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="author" content="Acoundz 360" />
    </Helmet>
  );
}
