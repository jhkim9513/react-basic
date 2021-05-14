import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCcQrTa8e9LRFeUcc2360vB9zlIAcb5erc`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        //유행하는 영상을 받아올 때와 달리 검색했을 시에는 id가 object형식으로 들어오기 때문에
        //map을 사용하여 id를 object안에 있는 videoId로 다 덮어주어 새로운 item을 setVideo에 넘긴다
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCcQrTa8e9LRFeUcc2360vB9zlIAcb5erc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
