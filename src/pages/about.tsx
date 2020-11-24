import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://4.bp.blogspot.com/-z54OCUjBJ1g/WBqIqfBNRWI/AAAAAAAAcjE/Lj8R-Xdy8RY7WwhYCN64zdDogCcWutz3wCLcB/s1600/IMG_3820.JPG"
              alt="face"
              className="img"
            />
          </div>
          <div className="col-6">
            <h3>My Name is Bloger!</h3>
            <h4>I write good blogs</h4>
            <h4>Please Donate!</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
