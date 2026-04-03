export default function FAQSection({
  eyebrow = 'Frequently Asked Questions',
  title = 'Answers to common questions',
  intro,
  items,
  sectionId,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section id={sectionId} className="content-section faq-section">
      <div className="reveal">
        <span className="section-label">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {intro ? <p className="section-desc faq-intro">{intro}</p> : null}
      </div>

      <div className="faq-grid">
        {items.map((item) => (
          <article className="faq-card reveal" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
