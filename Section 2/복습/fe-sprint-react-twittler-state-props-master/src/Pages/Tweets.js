// TODO : useState를 react로 부터 import 합니다.
import { useState } from "react";
import React /* TODO */ from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [username, setUsername] = useState("hwang");
  const [inputMsg, setInputMsg] = useState("");
  const [tweetsData, setTweetsData] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    const tweet = {
      id: tweetsData.length + 1,
      username,
      picture: "https://randomuser.me/api/portraits/men/98.jpg",
      content: inputMsg,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTweetsData([tweet, ...tweetsData]);
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    setInputMsg("");
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setInputMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input type="text" defaultValue={username} placeholder="your username here.." className="tweetForm__input--username" onChange={handleChangeUser}></input>
                <textarea className="tweetForm__input--message" placeholder="입력해주세요" value={inputMsg} onChange={handleChangeMsg}></textarea>
              </div>

              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {`total: ${dummyTweets.length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className="tweetForm__submitButton" onClick={handleButtonClick}>
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}

        {tweetsData.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet}></Tweet>;
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
