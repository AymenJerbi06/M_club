const faqs = [
  {
    question: "What can I do at M Club?",
    answer:
      "You can train in the gym, join live classes, swim in the semi-Olympic pool, book spa treatments, register kids activities, or work with a coach.",
  },
  {
    question: "Do I need to already be fit?",
    answer:
      "No. The club covers beginners, families, regular fitness members, and competitive athletes. The coaches can help you choose a starting point.",
  },
  {
    question: "What membership types are available?",
    answer:
      "M Club offers Fitness, Pool, and Global access, with 12-month, 6-month, and flexible monthly options depending on your routine.",
  },
  {
    question: "How do I book the spa?",
    answer:
      "Spa reservations use the dedicated phone number 20 195 296. The spa offers hammam, gommage, massage, masks, brushing, and pack options.",
  },
];

export default function MClubFAQ() {
  return (
    <section className="faq-section">
      <div className="faq-layout">
        <div>
          <p className="section-kicker">Questions</p>
          <h2 className="display-title">FAQ</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
