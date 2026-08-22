import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://vaptlabs.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/vapt-labs-logo.png`;

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchema {
  name: string;
  description: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noindex?: boolean;
  faqItems?: FAQItem[];
  serviceSchema?: ServiceSchema;
}

const SEO: React.FC<SEOProps> = ({ title, description, path, keywords, noindex, faqItems, serviceSchema }) => {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  const fullTitle = /vaptlabs/i.test(title) ? title : `${title} | VAPTlabs`;

  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null;

  const svcSchema = serviceSchema ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceSchema.name,
    name: serviceSchema.name,
    description: serviceSchema.description,
    url: canonical,
    provider: { '@type': 'Organization', name: 'VAPTlabs', url: SITE_URL },
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VAPTlabs" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {svcSchema && <script type="application/ld+json">{JSON.stringify(svcSchema)}</script>}
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </Helmet>
  );
};

export default SEO;
