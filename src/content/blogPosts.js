export const BLOG_POSTS = [
  {
    slug: 'industry-automation-trends-2026',
    path: '/blog/industry-automation-trends-2026',
    title: 'Industry Automation Trends 2026: Vision AI, Edge Analytics, and Faster Operational Response',
    description:
      'A practical look at the industry automation trends shaping 2026, from machine vision and edge inference to event-driven operations and measurable rollout KPIs.',
    excerpt:
      'Industrial teams are moving from isolated automation pilots to connected operational systems. This article breaks down the architecture, KPIs, and rollout patterns behind the next wave of industry automation.',
    category: 'Industry Automation',
    readingTime: '8 min read',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-04',
    author: 'Resurgenix Technologies Editorial Team',
    image: '/logo.png',
    keywords: [
      'automating industries',
      'industry automation trends',
      'CCTV automation',
      'computer vision analytics',
      'vision AI',
      'edge analytics',
    ],
  },
];

export const getBlogPostBySlug = (slug) =>
  BLOG_POSTS.find((post) => post.slug === slug);
