import React, { FC } from "react";
import { FaBlogger } from "react-icons/fa";
import "./card.css";

type Props = {
  title: string;
  text: string;
  image: string;
  author: string;
  id: string;
  onClick: () => void;
};

const Card: FC<Props> = ({ title, text, image, author, id, onClick }) => {
  return (
    <div className="card d-flex flex-column justify-content-start align-items-center" onClick={onClick}>
      <div className="card__img-wrapper">
        <img src={image} alt={`Img nr ${id}`} className="img" />
      </div>
      <h2 className="card__title">
          <FaBlogger className='card__icon'/>
          {title.substring(0,25)}...
      </h2>
      <h4 className="card__author">{author}</h4>
      <p className="card__text">{text.substring(0,50)}...</p>
    </div>
  );
};

export default Card;
