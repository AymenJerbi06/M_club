const text = "Club with pool, personal training, classes and spa recovery.";

export default function HPMarquee() {
  return (
    <div className="hp-marquee" aria-label={text}>
      <div className="hp-marquee-track" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}
