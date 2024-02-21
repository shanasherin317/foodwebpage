import React from "react";
// import "./About.css"; // Import the CSS file

function About() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>About Us</h1>
      </div>
      <div className="about">
        <div className="top-images">
          <img
            className="aboutimg"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-cake-chocolate-fruit-png-image_9125383.png"
            alt=""
          />
          <img
            className="aboutimg"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-cake-chocolate-fruit-png-image_9125383.png"
            alt=""
          />
        </div>
        <div className="bottom-images">
          <img
            className="aboutimg"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-cake-chocolate-fruit-png-image_9125383.png"
            alt=""
          />
          <img
            className="aboutimg"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-cake-chocolate-fruit-png-image_9125383.png"
            alt=""
          />
        </div>
        <div className="txtparadiv">
          <p className="ppp">
            Lorem ipsum dolor sit amet consectetur. Pharetra faucibus donec
            ultrices eros elit metus morbi aliquam quis. Suspendisse massa
            ullamcorper tortor morbi nisi leo. Ultrices leo vel tincidunt nunc
            eget elit. Gravida et duis ipsum pellentesque libero. Tellus
            rhoncus metus et eget mattis fringilla nec id. Amet ultrices quam
            ridiculus tellus. Leo adipiscing tincidunt amet nisi semper
            adipiscing quam in est. Tempor sed dui nunc diam adipiscing at.
          </p>
          <p>
            Tellus rhoncus metus et eget mattis fringilla nec id. Amet ultrices
            quam ridiculus tellus. Leo adipiscing tincidunt amet nisi semper
            adipiscing quam in est. Tempor sed dui nunc diam adipiscing at.
          </p>
          <button className="aboutbtn">Connect Wallet</button>
        </div>
      </div>
    </>
  );
}

export default About;
