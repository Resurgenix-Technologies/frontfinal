import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.resurgenixtechnologies.com';

const SEO_DEFAULTS = {
  siteName: 'Resurgenix Technologies',
  defaultImage: `${BASE_URL}/logo.png`,
  twitterCard: 'summary_large_image',
};

const toAbsoluteUrl = (value) => {
  if (!value) {
    return value;
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return `${BASE_URL}${value.startsWith('/') ? value : `/${value}`}`;
};

const asArray = (value) => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const normalizeKeywords = (keywords) => {
  if (!keywords) {
    return undefined;
  }

  return Array.isArray(keywords) ? keywords.join(', ') : keywords;
};

const normalizeAuthor = (author) => {
  if (!author) {
    return {
      '@type': 'Organization',
      name: SEO_DEFAULTS.siteName,
    };
  }

  if (typeof author === 'string') {
    return {
      '@type': 'Person',
      name: author,
    };
  }

  return author;
};

const buildBreadcrumbSchema = (breadcrumbs, fallbackPath) => {
  if (!breadcrumbs?.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path || fallbackPath),
    })),
  };
};

const buildFaqSchema = (faqItems) => {
  if (!faqItems?.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

const buildArticleSchema = (article, fallback) => {
  if (!article) {
    return null;
  }

  const image = toAbsoluteUrl(article.image || fallback.image);

  return {
    '@context': 'https://schema.org',
    '@type': article.type || 'Article',
    headline: article.headline || fallback.title,
    description: article.description || fallback.description,
    mainEntityOfPage: fallback.url,
    image: image ? [image] : undefined,
    author: normalizeAuthor(article.author),
    publisher: {
      '@type': 'Organization',
      name: SEO_DEFAULTS.siteName,
      logo: {
        '@type': 'ImageObject',
        url: SEO_DEFAULTS.defaultImage,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    articleSection: article.section,
    keywords: normalizeKeywords(article.keywords),
    wordCount: article.wordCount,
    about: article.about,
  };
};

/**
 * SEO component for per-page meta tag management.
 * Place at the top of each page component.
 */
export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noindex = false,
  keywords,
  breadcrumbs,
  faqItems,
  article,
  schema,
}) {
  const fullUrl = `${BASE_URL}${path}`;
  const fullImage = toAbsoluteUrl(image || SEO_DEFAULTS.defaultImage);
  const fullTitle = title
    ? `${title} | ${SEO_DEFAULTS.siteName}`
    : `${SEO_DEFAULTS.siteName} | AI-Powered CCTV Automation & Computer Vision`;
  const keywordContent = normalizeKeywords(keywords || article?.keywords);
  const schemas = [
    buildBreadcrumbSchema(breadcrumbs, path),
    buildFaqSchema(faqItems),
    buildArticleSchema(article, {
      description,
      image: fullImage,
      title: title || fullTitle,
      url: fullUrl,
    }),
    ...asArray(schema),
  ].filter(Boolean);
  const articleAuthorName =
    typeof article?.author === 'string' ? article.author : article?.author?.name;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_DEFAULTS.twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article metadata */}
      {article?.datePublished && (
        <meta property="article:published_time" content={article.datePublished} />
      )}
      {article?.dateModified && (
        <meta property="article:modified_time" content={article.dateModified} />
      )}
      {articleAuthorName && <meta property="article:author" content={articleAuthorName} />}

      {/* JSON-LD per page if provided */}
      {schemas.map((entry, index) => (
        <script key={`${path}-schema-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
