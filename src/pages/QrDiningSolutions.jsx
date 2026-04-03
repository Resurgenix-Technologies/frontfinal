import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import usePageReveal from '../hooks/usePageReveal';
import '../styles/content-pages.css';

const solutionCards = [
  {
    title: 'Digital menus that stay current',
    description:
      'QR dining removes the lag between pricing updates, menu changes, and guest communication by letting teams update one digital source instead of reprinting static menus.',
  },
  {
    title: 'Faster ordering and table turnover',
    description:
      'Guests can browse, decide, and place orders more quickly, while staff spend less time on repetitive menu explanation and more time on hospitality and fulfillment.',
  },
  {
    title: 'Operational visibility',
    description:
      'Dining teams gain insight into top-selling items, ordering windows, rush-hour patterns, and service bottlenecks that often remain invisible in manual table service.',
  },
];

const faqItems = [
  {
    question: 'What is QR dining?',
    answer:
      'QR dining is a digital ordering workflow where guests scan a QR code to view the menu, place orders, and interact with the restaurant experience from their phone.',
  },
  {
    question: 'How does QR dining improve restaurant operations?',
    answer:
      'It can reduce ordering friction, speed up service, improve menu accuracy, and provide better visibility into order timing, guest preferences, and peak demand periods.',
  },
  {
    question: 'Can QR dining work alongside in-person hospitality?',
    answer:
      'Yes. The strongest deployments keep service personal while removing repetitive ordering steps so staff can focus more on guest care and execution quality.',
  },
  {
    question: 'Why pair QR dining with CCTV automation?',
    answer:
      'Together they connect digital ordering data with on-floor movement, queue conditions, and service speed, giving restaurant operators a fuller picture of performance.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'QR Dining Solutions',
  serviceType: 'QR dining and digital ordering platform',
  description:
    'QR dining solutions for restaurants, cafés, and hospitality operators that want faster ordering, better menu control, and stronger service analytics.',
  provider: {
    '@type': 'Organization',
    name: 'Resurgenix Technologies Pvt. Ltd.',
  },
  areaServed: 'IN',
  url: 'https://www.resurgenixtechnologies.com/qr-dining-solutions',
};

export default function QrDiningSolutions() {
  usePageReveal();

  return (
    <>
      <SEO
        title="QR Dining Solutions for Restaurants and Cafés"
        description="Explore QR dining solutions from Resurgenix Technologies for restaurants and cafés that want faster ordering, better menu control, and stronger service analytics."
        path="/qr-dining-solutions"
        keywords={[
          'QR dining',
          'QR dining solutions',
          'digital menu for restaurants',
          'restaurant ordering system',
          'contactless restaurant ordering',
        ]}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'QR Dining Solutions', path: '/qr-dining-solutions' },
        ]}
        faqItems={faqItems}
        schema={serviceSchema}
      />

      <div className="content-page">
        <header className="content-hero">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'QR Dining Solutions' },
            ]}
          />

          <div className="content-hero-shell">
            <div className="reveal">
              <span className="section-label">Hospitality Landing Page</span>
              <h1>QR Dining Solutions Built for Modern Restaurants, Cafés, and Fast-Moving Service Teams</h1>
              <p>
                QR dining is no longer just a contactless ordering feature. For high-volume hospitality
                teams, it has become an operational tool that improves menu control, speeds up ordering,
                reduces friction at the table, and gives management a cleaner view of service demand
                across the day. When deployed well, QR dining supports both better guest experience and
                better floor execution.
              </p>
              <p>
                Resurgenix approaches QR dining as part of a broader automation strategy for service-led
                businesses. That means the system should help restaurants do more than collect orders. It
                should make service timing easier to manage, reduce avoidable delays, and fit naturally
                alongside other operational signals such as queue buildup, occupancy, and table turnover.
              </p>
            </div>

            <aside className="content-hero-panel reveal">
              <h2>Common performance targets</h2>
              <ul>
                <li>20-40% faster order placement during peak periods</li>
                <li>Cleaner menu updates across locations and service windows</li>
                <li>Better visibility into item popularity, timing, and guest behavior</li>
                <li>Smoother coordination between front-of-house and fulfillment teams</li>
              </ul>
            </aside>
          </div>
        </header>

        <section className="content-section">
          <div className="reveal">
            <span className="section-label">Why It Matters</span>
            <h2 className="section-title">What problems does QR dining solve for restaurant operators?</h2>
            <p className="section-desc" style={{ maxWidth: '760px' }}>
              The biggest gains usually come from removing repetitive friction: menu confusion, slow ordering,
              delayed upsell opportunities, and inconsistent communication between the table and the team.
            </p>
          </div>

          <div className="content-grid-3">
            {solutionCards.map((card) => (
              <article className="content-card reveal" key={card.title}>
                <span className="content-card-kicker">QR Dining Benefit</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="content-prose article-layout">
            <section className="reveal">
              <span className="section-label">Guest Experience</span>
              <h2>How does QR dining improve the guest journey without making service feel robotic?</h2>
              <p>
                Good QR dining does not replace hospitality. It removes the repetitive steps that slow
                hospitality down. Guests can access the menu instantly, review visuals and item details,
                place an order at their pace, and avoid the awkward pause that happens when staff are
                handling multiple tables at once. That creates a smoother first interaction without
                forcing the restaurant to make the entire experience self-service.
              </p>
              <p>
                For operators, this means service can become more intentional. Staff spend less time
                repeating menu information and more time guiding, resolving, checking quality, and
                creating a stronger in-person experience. In other words, QR dining works best when
                it supports hospitality rather than trying to imitate it.
              </p>
            </section>

            <section className="reveal">
              <span className="section-label">Operations</span>
              <h2>What operational data becomes easier to manage with QR dining?</h2>
              <p>
                Restaurants gain a more structured view of demand across time, menu categories, and
                order windows. Operators can see which items drive volume, where peak ordering pressure
                happens, how menu updates affect guest behavior, and when service delays are likely to
                occur. This is especially valuable for cafés, quick-service formats, and multi-location
                brands where even small timing improvements compound quickly.
              </p>
              <p>
                When paired with visual operations data, QR dining becomes even more powerful. A manager
                can compare order spikes with counter congestion, pickup queue length, or table turnover.
                That is where QR dining connects naturally with <Link to="/cctv-automation-guide">CCTV
                automation</Link> and the broader work of <Link to="/automating-industries">automating
                industries</Link>. One system shows transaction flow. The other shows real-world service
                flow. Together, they create a fuller operating picture.
              </p>
            </section>

            <section className="reveal">
              <span className="section-label">Deployment</span>
              <h2>What should restaurants look for in a production-ready QR dining solution?</h2>
              <p>
                Production readiness is about workflow fit. The platform should support fast menu updates,
                mobile-friendly browsing, intuitive ordering, and a clear handoff into kitchen or service
                operations. It should also be lightweight enough that staff can adopt it without a major
                training burden, and flexible enough that guests of different ages and comfort levels can
                use it easily.
              </p>
              <p>
                Operators should also ask whether the platform supports cross-location consistency, item
                visibility, promotions, and reporting that management can actually review. If the system
                only digitizes the menu but does not improve daily decisions, the business will feel the
                extra software but not the value. We recommend tying QR dining evaluation to clear targets
                such as order speed, menu update time, service pressure visibility, or average table
                turnover during peak shifts.
              </p>
            </section>
          </div>
        </section>

        <FAQSection
          eyebrow="QR Dining FAQ"
          title="Common questions about QR dining solutions"
          intro="These answers reflect the operational concerns we hear from hospitality teams evaluating digital ordering for growth and service consistency."
          items={faqItems}
          sectionId="qr-dining-faq"
        />

        <section className="content-cta">
          <div className="content-cta-panel reveal">
            <h2 className="section-title">Looking for a smarter hospitality stack?</h2>
            <p>
              Explore how QR dining, service analytics, and camera-based operational visibility can work
              together across cafés, cloud kitchens, and restaurant groups. You can also visit
              <a href="https://qrdining.in" target="_blank" rel="noreferrer"> qrdining.in</a> for the
              live product experience.
            </p>
            <div className="content-cta-actions">
              <Link to="/#consultation" className="btn btn-primary">Request a Consultation</Link>
              <Link to="/blog" className="btn btn-outline">Read our Blog</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
