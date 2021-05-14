import Image from "next/image";

const links = [
  "https://react-weather-london.netlify.app",
  "https://burger-builder-game.netlify.app",
  "https://todlist-redux-react.netlify.app",
  "https://t9-phoneword-frontend.netlify.app",
  "https://topic-analysis.netlify.app",
  "https://reactphoneshop12.netlify.app",
];

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => {
      return (
        <div className="galleryimage" key={image}>
          <a href={links[index]}>
            <Image
              src={image}
              alt="Portfolio picture"
              width={250}
              height={400}
              priority
            />
          </a>
        </div>
      );
    })}
  </div>
);

export default Gallery;
