import React from "react";
import "./style.scss";
const Card = () => {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="card__content">
        <div className="card__title">The Coldest Sunset</div>
        <p className="card__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="card__footer">
        <span className="card__tag card__tag--mr">#photography</span>
        <span className="card__tag card__tag--mr">#travel</span>
        <span className="card__tag">#winter</span>
      </div>
    </div>
  );
};

export default Card;
