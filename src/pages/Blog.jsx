import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../content/blogPosts';
import usePageReveal from '../hooks/usePageReveal';
import '../styles/content-pages.css';

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resurgenix Blog',
  description:
    'Insights on automating industries, CCTV automation, computer vision, and QR dining operations.',
  url: 'https://www.resurgenixtechnologies.com/blog',
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: BLOG_POSTS.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://www.resurgenixtechnologies.com${post.path}`,
    name: post.title,
  })),
};

export default function Blog() {
  usePageReveal();

  return (
    <>
      <SEO
        title="Blog and Insights on Industry Automation"
        description="Read Resurgenix Technologies insights on automating industries, CCTV automation, computer vision operations, and QR dining strategy."
        path="/blog"
        keywords={[
          'automating industries',
          'CCTV automation',
          'QR dining',
          'industry automation blog',
          'computer vision insights',
        ]}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
        schema={[collectionSchema, itemListSchema]}
      />

      <div className="content-page">
        <header className="content-hero">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Blog' },
            ]}
          />

          <div className="content-hero-shell">
            <div className="reveal">
              <span className="section-label">Resurgenix Blog</span>
              <h1>Insights on Automating Industries, CCTV Automation, and QR Dining</h1>
              <p>
                This blog is where we publish practical content on vision-led operations, deployment
                strategy, technical architecture, and the measurable business outcomes behind intelligent
                automation. Our focus is not generic AI commentary. We write about the systems, workflows,
                and tradeoffs teams actually face when they turn existing infrastructure into operating
                intelligence.
              </p>
            </div>

            <aside className="content-hero-panel reveal">
              <h2>Topics we cover</h2>
              <ul>
                <li>How automating industries works in real operating environments</li>
                <li>Production architecture for CCTV automation systems</li>
                <li>Hospitality growth and service workflows with QR dining</li>
                <li>KPI design, pilot planning, and rollout governance</li>
              </ul>
            </aside>
          </div>
        </header>

        <section className="content-section">
          <div className="reveal">
            <span className="section-label">Latest Post</span>
            <h2 className="section-title">Featured insight</h2>
          </div>

          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article className="blog-card reveal" key={post.slug}>
                <span className="blog-card-kicker">{post.category}</span>
                <div className="blog-card-meta">
                  <span>{post.publishedAt}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={post.path}>
                  <span>Read article</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="reveal">
            <span className="section-label">Foundational Pages</span>
            <h2 className="section-title">Start with the core guides</h2>
          </div>

          <div className="content-link-grid">
            <article className="content-link-card reveal">
              <h3>Automating Industries</h3>
              <p>
                A long-form pillar page on how camera-led sensing, workflow orchestration, and KPI design
                help organizations automate real operating environments.
              </p>
              <Link to="/automating-industries">
                <span>Read the pillar page</span>
              </Link>
            </article>

            <article className="content-link-card reveal">
              <h3>CCTV Automation Guide</h3>
              <p>
                A technical guide to architecture, deployment choices, alerting logic, and production
                measurement for CCTV automation systems.
              </p>
              <Link to="/cctv-automation-guide">
                <span>Explore the guide</span>
              </Link>
            </article>

            <article className="content-link-card reveal">
              <h3>QR Dining Solutions</h3>
              <p>
                A hospitality-focused landing page on digital ordering, menu control, and how QR dining
                connects with on-floor operational visibility.
              </p>
              <Link to="/qr-dining-solutions">
                <span>View the landing page</span>
              </Link>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
