import styled from "styled-components";
import "../App.css";
import React, { useState } from "react";
import Nav from "./Nav";

const BREAK_POINT_TABLET = 0;
const BREAK_POINT_PC = 1200;

const AudioWrapper = styled.div`
  //버튼
  button {
    border: none;
    background: transparent;
    color: #fff;
  }

  button i {
    font-size: 20px;
  }
  .playlist_button {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .playlist_button button {
    width: 36px;
    height: 36px;
    margin-right: 20px;

    &:hover {
      animation: hover 2s;
      width: 36px;
      height: 36px;
      background-color: white;
      border-radius: 15px;
      transition: 3s;
    }
  }
  .fa-play,
  .fa-pause {
    color: red;
    font-size: 30px;
  }

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-color: black;
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .now_playlist_music {
    height: 100px;

    > img {
      box-sizing: border-box;
      height: 100%;
      padding: 10%;
    }

    > .left-box {
      position: absolute;
      left: 6%;
      bottom: 25%;
      display: flex;
      flex-direction: column;
      color: white;
      box-sizing: border-box;

      > .today_info {
        margin-bottom: 10px;
      }
    }
  }
  // .play_button_container {
  // }
  // .play_button {
  //   border: 1px solid yellow;
  //   text-align: center;
  // }

  .today_info {
  }

  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    background-color: #191919;
    .full_open {
      display: none;
    }
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    background-color: gray;
    .full_open {
      display: block;
    }
  }
`;

const Footer = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <footer>
      <AudioWrapper>
        <div className="now_playlist_music">
          <img src="./img/album.png" alt="nowPlayMusicImg" />
          <div className="left-box">
            <div className="today_info">오늘 뭐 듣지</div>
            <div className="play_info">재생 버튼을 클릭해보세요</div>
          </div>
        </div>

        <div className="playlist_button">
          <button type="button" class="full_open">
            <i class="fas fa-random"></i>
          </button>
          <button type="button">
            <i class="fas fa-step-backward"></i>
          </button>

          {isPlay ? (
            <button onClick={togglePlay} type="button">
              <i class="fas fa-pause"></i>
            </button>
          ) : (
            <button onClick={togglePlay} type="button">
              <i class="fas fa-play"></i>
            </button>
          )}

          <button type="button">
            <i class="fas fa-step-forward"></i>
          </button>
          <button type="button" class="full_open">
            <i class="fas fa-sync"></i>
          </button>
        </div>

        {/* <div className="play_button_container">
          <button onClick={togglePlay} className="play_button">
            {isPlay ? "멈춤상태" : "재생상태"}
          </button>
        </div> */}
        <div>
          {/* <div>음악 시간</div>
          <div>볼륨 조절</div> */}
        </div>
      </AudioWrapper>
    </footer>
  );
};

export default Footer;
