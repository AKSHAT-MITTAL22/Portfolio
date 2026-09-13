export default function SectionHeading({ kicker, title, id }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
