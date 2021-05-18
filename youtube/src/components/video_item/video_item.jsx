import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (
  { video, video: { snippet }, onVideoClick, display } //props.video.snippet
) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTtitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
