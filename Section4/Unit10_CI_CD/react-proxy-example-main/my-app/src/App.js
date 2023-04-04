import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import { getAllBooks, createBook } from "./services/BookService";

// Todo
import TodoTable from "./components/Todo/TodoTable";
import { getTodos } from "./services/TodoService";
import Footer from "./components/Footer";

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  // todo
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos); // 상태가 변경될 때마다 todos를 출력합니다.
  }, [todos]);

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      console.log(data);
      setBooks(data);

      setNumberBooks(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };
  // todo리스트
  const getTodo = () => {
    getTodos().then((data) => {
      setTodos(data);
    });
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook bookShelf={bookShelf} onChangeForm={handleOnChangeForm} handleSubmit={handleSubmit} />
        <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllBook} />
        <BookTable books={books} />
        <TodoTable todos={todos} />
        <button onClick={getTodo}>test</button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
