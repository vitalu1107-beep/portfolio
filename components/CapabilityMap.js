export default function CapabilityMap({ items }) {
  return (
    <div className="capability-map">
      {items.map((block) => (
        <section className="capability-node" key={block.group}>
          <span>{block.group}</span>
          <div>
            {block.items.map((item) => (
              <b key={item}>{item}</b>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
