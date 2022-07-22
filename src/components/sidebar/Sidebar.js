import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  Event,
  Work,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarweapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Vidoes</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="SidebarFriendImg"
              src="https://www.finetoshine.com/wp-content/uploads/2020/04/Girls-Dp-Dp-For-Girls-Whatsapp-Dp-For-Girl-Fb-Profile-Pic-For-Girls-Attitude....jpg"
              alt=""
            />
            <span className="sidebarFriendName">Jane doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
