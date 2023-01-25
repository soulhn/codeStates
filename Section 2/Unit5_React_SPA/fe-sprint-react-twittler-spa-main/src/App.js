import React from "react";
import "./App.css";
import "./global-style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러오세요.

import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
import MyPage from "./Pages/MyPage";
import About from "./Pages/About";
// TODO - import문을 이용하여 MyPage, About 컴포넌트를 불러오세요.

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* TODO - BrowserRouter 컴포넌트를 작성합니다. */}
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
              {/* TODO - Routes와 Route 컴포넌트를 이용하여 경로(path)를 설정하고 Tweets, Mypage, About 컴포넌트를 연결합니다. */}
              <Routes>
                <Route path="/" element={<Tweets />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
