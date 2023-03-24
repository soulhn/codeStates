import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Navbar from "./component/Navbar";
// import CreateBlog from "./blogComponent/CreateBlog";
// import BlogDetails from "./blogComponent/BlogDetail";
// import NotFound from "./component/NotFound";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import Loading from "./component/Loading";
//리팩토링을 위한 React.lazy(), React.Suspense
import { Suspense, lazy } from "react";
//useFetch
import useFetch from "./util/useFetch";

/* react.lazy()와 suspense를 사용해 App 컴포넌트를 리팩토링 해보세요. */
const Home = lazy(() => import("./Home"));
const CreateBlog = lazy(() => import("./blogComponent/CreateBlog"));
const BlogDetails = lazy(() => import("./blogComponent/BlogDetail"));
const NotFound = lazy(() => import("./component/NotFound"));

function App() {
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  /* get 메소드를 통해 데이터를 받아오는 useEffect hook은 컴포넌트 내 여기저기 존재하고 있습니다. */
  /* 해당 hook은 반복이 되는 부분이 있으므로 어떻게 custom hook으로 만들 수 있을지 고민해 봅시다. */
  /* util 폴더 내에 존재하는 useFetch에 custom hook을 작성해 주세요. */
  const URL = "http://localhost:3001/blogs";
  const { data: blogs, isPending, error } = useFetch(URL);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:3001/blogs")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("could not fetch the data for that resource");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setIsPending(false);
  //         setBlogs(data);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         setIsPending(false);
  //         setError(err.message);
  //       });
  //   }, 1000);
  // }, []);

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <div className="app">
        <Navbar />
        <div className="content">
          <Suspense fallback={Loading}>
            <Routes>
              <Route exact path="/" element={<Home blogs={blogs} isPending={isPending} />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
