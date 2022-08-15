import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Youtube } from "./service/youtube";
import { YOUTUBE_API_KEY } from "./constants";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3", //https://youtube.googleapis.com/youtube/v3
  params: { key: YOUTUBE_API_KEY! }, //key=${YOUTUBE_API_KEY}
});
const youtube = new Youtube(httpClient);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
