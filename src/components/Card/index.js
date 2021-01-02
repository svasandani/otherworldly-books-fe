import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image_url
      : process.env.REACT_APP_BACKEND_URL + article.image_url;
  return (
    <Link to={`/article/${article.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          {
            article.image_url
            ? <img src={imageUrl} alt={article.image_url} height="100" />
            : ""
          }
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {
              article.category 
              ? article.category.name 
              : ""
            }
          </p>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
