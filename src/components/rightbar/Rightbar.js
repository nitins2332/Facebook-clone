import { useScrollTrigger } from "@material-ui/core";
import React from "react";
import online from "../../online/online";
import "./Rightbar.css";
import { Users } from "../../dummyData";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://w7.pngwing.com/pngs/295/410/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-orange.png"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Fester</b> and <b>3 other</b> have a birthday today
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv9yM9g2eI6tRg7EWEbm2G7OXGDpPCqNnICU6GzUFM7ir0uSEZ4nyOR8Pu_b9q1XnKpk&usqp=CAU"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ui className="rightbarFriendList">
          {Users.map((u) => (
            <online key={u.id} user={u} />
          ))}
        </ui>
      </div>
    </div>
  );
}

export default Rightbar;
