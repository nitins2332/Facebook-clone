import { MoreVert, FavoriteBorder, ThumbUpAlt } from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL26Zwi1V5F-JL72qmWsFoR7ERb9ju3mrvyXzZ0cE4QRFuc_z9hjA6qyGfMqMvUFnylhw&usqp=CAU"
              alt=""
            />
            <span className="postUserName">{post.userName}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorder className="likeIcon" />
            <ThumbUpAlt className="likeIcon" />
            <span className="postLikeCounter">{post.like} poeple liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
