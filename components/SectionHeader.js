export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
