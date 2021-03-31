import React from "react";

{/* <div className="footer-wrapper"> */}
const Footer = () => {
  return (
    <div className="footer-div">
        <p className="footer-text">
          Made with{" "}
          <span role="img" aria-label="Heart emoji">
            ❤️
          </span>
          <span>
            {" "}
            in
            <a
              href="https://goo.gl/maps/nNzU5h3tr92AhtU69"
              style={{ textDecoration: "none" }}
            >
              &nbsp; Carshalton{" "}
            </a>
            by Dave B.
          </span>
        </p>
    </div>
  );
};

export default Footer;
