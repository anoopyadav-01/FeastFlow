import { assets } from "../../assets/assets";
import "./AppDownload.css";

import React from "react";

export const AppDownload = () => {
  return (
    <div className="app-download" id='app-download"'>
      <h2>For Better Experience Download</h2>
      <h2> FeastFlow App</h2>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};
