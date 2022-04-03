import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "../styles/YoutubeSearch.scss";

const YoutubeSearch = () => {
  const [videos, setVideo] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyBquKDcVpi3JjuAy0AAYNkwT48B6jtcWn8",
        type: "video",
        q: query,
      },
    });
    if (res && res.data) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }

      setVideo(result);
    }

    // console.log(">> check res youtube: ", res);
  };

  return (
    <>
      <div className="youtube-search-container">
        <div className="yt-search">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            type="button"
            className=""
            onClick={() => handleSearchYoutube()}
          >
            Search
          </button>
        </div>

        {videos &&
          videos.length > 0 &&
          videos.map((item) => {
            return (
              <div className="yt-result" key={item.id}>
                <div className="left">
                  <iframe
                    width="640"
                    height="360"
                    className="ifram-yt"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="right">
                  <div className="title">{item.title}</div>
                  <div className="created-at">
                    Create At:{" "}
                    {moment(item.createdAt).format("MM/DD/YYYY HH:mm:ss A")}
                  </div>
                  <div className="author">Author: {item.author}</div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default YoutubeSearch;

/**
 * data mau:
 * 
 *{
  "kind": "youtube#searchListResponse",
  "etag": "2Ue58vdgF-KZjmY4O_TDs0woKIk",
  "nextPageToken": "CAUQAA",
  "regionCode": "VN",
  "pageInfo": {
    "totalResults": 476,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "0G1PZNPUBUCNejRr__oNY-Mv2Zg",
      "id": {
        "kind": "youtube#video",
        "videoId": "kY9gzbvLs2k"
      },
      "snippet": {
        "publishedAt": "2021-09-19T02:00:14Z",
        "channelId": "UCVkBcokjObNZiXavfAE1-fA",
        "title": "#32 Setup Redux Vào Dự Án React | Học Redux - React Cơ Bản Cho Beginners Từ A đến Z",
        "description": "Trong video này, chúng ta sẽ cùng nhau cấu hình thư viện Redux vào bên trọng dự án React, để chúng ta có thể thực hiện tương ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kY9gzbvLs2k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kY9gzbvLs2k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kY9gzbvLs2k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hỏi Dân IT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-19T02:00:14Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Aon7hbOEWxrEUYvlFx_or7bUt4g",
      "id": {
        "kind": "youtube#video",
        "videoId": "qMLxdSlSTAA"
      },
      "snippet": {
        "publishedAt": "2021-09-12T11:00:11Z",
        "channelId": "UCVkBcokjObNZiXavfAE1-fA",
        "title": "#21.1 Xây Dựng ToDo APP PRO với React.JS - CREATE/READ | React Cơ Bản Cho Beginners Từ A đến Z",
        "description": "Trong video này, để tổng kết lại những kiến thức React đã học, chúng ta sẽ cùng nhau xây dựng ứng dụng Todo apps, một ứng ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qMLxdSlSTAA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qMLxdSlSTAA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qMLxdSlSTAA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hỏi Dân IT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-12T11:00:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MVmwZKIGeZUJXTv5odS3ADRjsAE",
      "id": {
        "kind": "youtube#video",
        "videoId": "FtdGRi0nCjs"
      },
      "snippet": {
        "publishedAt": "2021-10-13T13:00:12Z",
        "channelId": "UCVkBcokjObNZiXavfAE1-fA",
        "title": "#2 Viết &quot;Hello World&quot; Với React Hook | React Season 2 Với Hook Cho Beginner Từ A đến Z",
        "description": "Chương trình đầu tiên, và không thể thiếu đối với bất cứ một chương trình nào đấy chính là \"Xin chào thế giới\" - Hello world.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FtdGRi0nCjs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FtdGRi0nCjs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FtdGRi0nCjs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hỏi Dân IT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-10-13T13:00:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "DdDNlU_6dy4iZHmNgJaJDqjewuw",
      "id": {
        "kind": "youtube#video",
        "videoId": "YoQ4-qTclIs"
      },
      "snippet": {
        "publishedAt": "2021-09-13T07:00:15Z",
        "channelId": "UCVkBcokjObNZiXavfAE1-fA",
        "title": "#22 React Routers - Điều Hướng Trang Với React | React Cơ Bản Cho Beginners Từ A đến Z",
        "description": "Để chuyển hướng trang, cũng như cung cấp nhiều thông tin cho người dùng, thì việc PHẢI DÙNG routers là điều không tránh ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hỏi Dân IT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-13T07:00:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "F7x3HOsFX96slPwMXQqGUdzB9Ew",
      "id": {
        "kind": "youtube#video",
        "videoId": "Wsxs9DoR3kM"
      },
      "snippet": {
        "publishedAt": "2021-09-15T02:00:13Z",
        "channelId": "UCVkBcokjObNZiXavfAE1-fA",
        "title": "#26 Sử Dụng Axios Để Gửi Request API từ React.JS  | React Cơ Bản Cho Beginners Từ A đến Z",
        "description": "Để có thể thực hiện một yêu cầu (request) tới server backend, một công cụ cực kỳ hữu ích khi sử dụng với React là AXIOS, một ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Hỏi Dân IT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-15T02:00:13Z"
      }
    }
  ]
}
 */
