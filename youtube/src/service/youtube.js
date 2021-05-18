import axios from "axios";

class Youtube {
  // constructor(httpClient) {
  //   this.youtube = httpClient;
  // }
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
    // try {
    //   const response = await fetch(
    //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result = await response.json();
    //   return result.items;
    // } catch (error) {
    //   return console.log("error", error);
    // }
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // try {
    //   const response = await fetch(
    //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result = await response.json();
    //   //유행하는 영상을 받아올 때와 달리 검색했을 시에는 id가 object형식으로 들어오기 때문에
    //   //map을 사용하여 id를 object안에 있는 videoId로 다 덮어주어 새로운 item을 setVideo에 넘긴다
    //   return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    // } catch (error) {
    //   return console.log("error", error);
    // }
  }
}

export default Youtube;
