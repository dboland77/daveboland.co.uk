import Image from "next/image";

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => {
      return (
        <div className="galleryimage" key ={image}>
          <Image
            src={image}
            alt="Portfolio picture"
            width={250}
            height={400}
          />
        </div>
      );
    })}
  </div>
);

export default Gallery;
