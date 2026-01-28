import { useState } from "react";
import styles from "../styles/MyImages.module.css";

const MyImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);
   if (!images || images.length === 0) return null;
  return (
    <div className={styles.imageGallery}>
      <img src={main.url} alt="product" className={styles.mainImage} />
      <div className={styles.thumbnails}>
        {images.map((img, i) => (
          <figure key={i} className={styles.thumbnail}>
            <img src={img.url} onClick={() => setMain(img)} alt={`thumb-${img.name}`} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default MyImages;
