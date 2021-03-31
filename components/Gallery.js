import Image from "next/image";
const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image) => {
      console.log(image);
      return (
        <Image
          className="image"
          key={image}
          src={image}
          alt="Portfolio picture"
          width={100}
          height={100}
        />
      );
    })}

    <style jsx>{`
      .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 50px;
        max-width: 1240px;
        margin: 0 auto;
      }
      .gallery .image {
        padding: 20px;
        width: 50%;
      }
      @media (max-width: 600px) {
        .gallery .image {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </div>
);

export default Gallery;
