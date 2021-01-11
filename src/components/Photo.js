import "./Photo.scss";

export default function Photo( { src, alt }) {
  return (
    <div className="photo-container">
      <img src={src} className="photo" alt={alt} />
    </div>
  );
}
