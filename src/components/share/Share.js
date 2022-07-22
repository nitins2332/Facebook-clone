import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React from "react";
import "./Share.css";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14m_vSWcU1xmHUDzRxy9Pu6R-qjekt6TWIjg6SWJNffbiDeoTRT609dr-D24X5_cVQZY&usqp=CAU"
            alt=""
            className="shareProfileImg"
          />
          <input placeholder="What in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
