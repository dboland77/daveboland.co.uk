import Image from "next/image";

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => {
      return (
        <Image
          className="image"
          key={image}
          src={image}
          alt="Portfolio picture"
          width={250}
          height={400}
        />
      );
    })}
  </div>
);

export default Gallery;
