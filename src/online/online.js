import React from "react";
import "./online.css";

function online(user) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtr8OIohdADN-vlqmorsTR-ml6nz_1Wn9VE565sMc1ev58NgUkc0p7zu2ux3RLissYhN8&usqp=CAU"
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.userName}</span>
      </li>
    </div>
  );
}

export default online;
