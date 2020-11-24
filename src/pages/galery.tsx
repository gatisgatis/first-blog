import React, { useState } from "react";
import  Loading  from "../components/loading/loading";
import "./galery.css";

const Galery = () => {
  const [imgNumber, setImgNumber] = useState(100);

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="gal__img-wrapper">
        <img
          src={`https://picsum.photos/id/${imgNumber}/800/600`}
          alt=""
          className="gal-img"
        />
        <Loading />
      </div>
      <div className="gal__btns">
        <button
          type="button"
          onClick={() => setImgNumber(imgNumber - 1)}
          disabled={imgNumber <= 1}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => setImgNumber(imgNumber + 1)}
          disabled={imgNumber >= 300}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Galery;
