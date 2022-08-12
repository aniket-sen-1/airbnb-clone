import React from "react";

// image="xyz"
// rating="5.0"
// review="6"
// country="USA"
// title="Life lessons with Katie Zaferes"
// price="136"

function Card(props) {
  console.log("----");
  console.log(props);
  let badgeText;
  if (props.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.location == "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      {badgeText && <div className="card--status">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" />

      <div className="card--info">
        <img src="images/star.png" className="card--info--star" />
        <p className="card--info--rating">{props.stats.rating}</p>
        <p className="card--info--review">({props.stats.reviewCount})</p>
        <p className="card--info--country">{props.location}</p>
      </div>

      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="card--price--tag">From ${props.price} </span>/ person
      </p>
    </section>
  );
}

export default Card;
