import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const INDEX_PATH = path.join(DIST_DIR, 'index.html');

const routes = [
  {
    route: '/about',
    title: 'About Us — Automating Industries with Vision AI | Resurgenix Technologies',
    description:
      'Learn about Resurgenix Technologies, our mission, and how we approach automating industries through CCTV automation, computer vision analytics, and QR dining solutions.',
    keywords:
      'automating industries, CCTV automation company, QR dining solutions, computer vision company',
  },
  {
    route: '/automating-industries',
    title: 'Automating Industries with Vision AI and CCTV Automation | Resurgenix Technologies',
    description:
      'Learn how Resurgenix Technologies approaches automating industries through CCTV automation, computer vision analytics, workflow orchestration, and measurable operational KPIs.',
    keywords:
      'automating industries, industry automation, CCTV automation, vision AI for industry, industrial workflow automation',
  },
  {
    route: '/cctv-automation-guide',
    title: 'CCTV Automation Guide for Technical and Operations Teams | Resurgenix Technologies',
    description:
      'Explore a practical CCTV automation guide covering camera ingestion, edge inference, event pipelines, operational KPIs, privacy controls, and rollout strategy.',
    keywords:
      'CCTV automation, cctv automation guide, computer vision analytics, vision AI, video analytics for operations',
  },
  {
    route: '/qr-dining-solutions',
    title: 'QR Dining Solutions for Restaurants and Cafés | Resurgenix Technologies',
    description:
      'Explore QR dining solutions from Resurgenix Technologies for restaurants and cafés that want faster ordering, better menu control, and stronger service analytics.',
    keywords:
      'QR dining, QR dining solutions, digital menu for restaurants, restaurant ordering system, contactless restaurant ordering',
  },
  {
    route: '/blog',
    title: 'Blog and Insights on Industry Automation | Resurgenix Technologies',
    description:
      'Read Resurgenix Technologies insights on automating industries, CCTV automation, computer vision operations, and QR dining strategy.',
    keywords:
      'automating industries, CCTV automation, QR dining, industry automation blog, computer vision insights',
  },
  {
    route: '/blog/industry-automation-trends-2026',
    title:
      'Industry Automation Trends 2026: Vision AI, Edge Analytics, and Faster Operational Response | Resurgenix Technologies',
    description:
      'A practical look at the industry automation trends shaping 2026, from machine vision and edge inference to event-driven operations and measurable rollout KPIs.',
    keywords:
      'automating industries, industry automation trends, CCTV automation, computer vision analytics, vision AI, edge analytics',
    type: 'article',
    publishedTime: '2026-04-04',
    modifiedTime: '2026-04-04',
    articleAuthor: 'Resurgenix Technologies Editorial Team',
  },
  {
    route: '/reviews',
    title: 'Customer Reviews & Case Studies | Resurgenix Technologies',
    description:
      'Read real reviews from organizations across Kolkata who transformed their CCTV infrastructure with Resurgenix Technologies AI-powered automation.',
    keywords:
      'customer reviews, CCTV automation case studies, industry automation reviews, Resurgenix Technologies',
  },
  {
    route: '/careers',
    title: 'Careers — Join Our AI & Computer Vision Team | Resurgenix Technologies',
    description:
      'Join Resurgenix Technologies and help build the future of AI-powered CCTV automation. Open roles in computer vision, full stack development, AI research, and product.',
    keywords:
      'careers in AI, computer vision jobs, Resurgenix careers, CCTV automation company jobs',
  },
  {
    route: '/privacy-policy',
    title: 'Privacy Policy | Resurgenix Technologies',
    description:
      'Read the Privacy Policy of Resurgenix Technologies Pvt. Ltd. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, Resurgenix Technologies, data protection, website privacy',
  },
  {
    route: '/terms-of-service',
    title: 'Terms of Service | Resurgenix Technologies',
    description:
      'Read the Terms of Service for Resurgenix Technologies Pvt. Ltd. Understand the terms governing your use of our website and AI-powered CCTV automation services.',
    keywords: 'terms of service, Resurgenix Technologies, website terms, CCTV automation services',
  },
];

const template = fs.readFileSync(INDEX_PATH, 'utf8');

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Pattern not found: ${pattern}`);
  }

  return html.replace(pattern, replacement);
};

const escapeAttribute = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;');

for (const entry of routes) {
  const canonical = `https://www.resurgenixtechnologies.com${entry.route}`;
  let html = template;

  html = replaceTag(
    html,
    /<title data-rh="true">[\s\S]*?<\/title>/i,
    `<title data-rh="true">${entry.title}</title>`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" name="description" content="[^"]*" \/>/i,
    `<meta data-rh="true" name="description" content="${escapeAttribute(entry.description)}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" name="keywords" content="[^"]*" \/>/i,
    `<meta data-rh="true" name="keywords" content="${escapeAttribute(entry.keywords)}" />`
  );
  html = replaceTag(
    html,
    /<link data-rh="true" rel="canonical" href="[^"]*" \/>/i,
    `<link data-rh="true" rel="canonical" href="${canonical}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" property="og:type" content="[^"]*" \/>/i,
    `<meta data-rh="true" property="og:type" content="${entry.type || 'website'}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" property="og:url" content="[^"]*" \/>/i,
    `<meta data-rh="true" property="og:url" content="${canonical}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" property="og:title" content="[^"]*" \/>/i,
    `<meta data-rh="true" property="og:title" content="${escapeAttribute(entry.title)}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" property="og:description" content="[^"]*" \/>/i,
    `<meta data-rh="true" property="og:description" content="${escapeAttribute(entry.description)}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" name="twitter:url" content="[^"]*" \/>/i,
    `<meta data-rh="true" name="twitter:url" content="${canonical}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" name="twitter:title" content="[^"]*" \/>/i,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttribute(entry.title)}" />`
  );
  html = replaceTag(
    html,
    /<meta data-rh="true" name="twitter:description" content="[^"]*" \/>/i,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttribute(entry.description)}" />`
  );

  if (entry.type === 'article') {
    const articleMeta = [
      `<meta data-rh="true" property="article:published_time" content="${entry.publishedTime}" />`,
      `<meta data-rh="true" property="article:modified_time" content="${entry.modifiedTime}" />`,
      `<meta data-rh="true" property="article:author" content="${escapeAttribute(entry.articleAuthor)}" />`,
    ].join('\n        ');

    if (html.includes('property="article:published_time"')) {
      html = replaceTag(
        html,
        /<meta data-rh="true" property="article:published_time"[\s\S]*?property="article:author" content="[^"]*" \/>/i,
        articleMeta
      );
    } else {
      html = html.replace(
        '<!-- Favicon (fixed MIME type) -->',
        `${articleMeta}\n\n        <!-- Favicon (fixed MIME type) -->`
      );
    }
  }

  const outputDir = path.join(DIST_DIR, entry.route.replace(/^\//, ''));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}

console.log(`Generated ${routes.length} static route HTML files.`);
