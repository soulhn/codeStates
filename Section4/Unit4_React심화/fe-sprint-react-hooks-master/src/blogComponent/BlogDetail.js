import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//useFetch

const BlogDetails = () => {
  const [blog, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //useNavigate
  const navigate = useNavigate();

  const [isLike, setIsLike] = useState(true);
  const { id } = useParams();

  /* 현재는 개별 블로그 내용으로 진입해도 내용이 보이지 않습니다. */
  /* useParams와 id를 이용하여 개별 블로그의 내용이 보일 수 있게 해봅시다. */
  const URL = `http://localhost:3001/blogs/${id}`;
  // const { data: blog, isPending, error } = useFetch(URL);

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [URL]);

  const handleDeleteClick = () => {
    /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
    /* useNavigate()를 이용하여 handleDeleteClick 로직을 작성해주세요. */
    fetch(URL, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      console.log("delete!");
    });
  };

  const handleLikeClick = () => {
    /* 하트를 누르면 home에서 새로고침을 했을 때 숫자가 올라가야 합니다. */
    /* isLike와 blog.likes를 이용하여 handleLikeClick의 로직을 작성해주세요. */
    setIsLike(!isLike);
    setBlogs({ ...blog, likes: isLike ? blog.likes + 1 : blog.likes - 1 });
    console.log(blog);
    console.log("like!");
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleLikeClick}>
            {/* isLike에 의해 조건부 렌더링으로 빨간 하트(❤️)와 하얀 하트(🤍)가 번갈아 보여야 합니다. */}
            {isLike ? "🤍" : "❤️"}
            {/* 🤍 */}
          </button>
          <button onClick={handleDeleteClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
