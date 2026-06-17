import AssetImage from "./AssetImage";

export default function ImageGallery({ items }) {
  return (
    <div className="image-gallery">
      {items.map((item) => (
        <figure key={item.src}>
          <AssetImage src={item.src} alt={item.title} className="gallery-image" />
          <figcaption>
            <strong>{item.title}</strong>
            <span>{item.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
