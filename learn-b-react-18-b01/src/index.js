import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import "./index.css";
import BookComp from "./components/BookComp";

const BookList = () => {
  return (
    <>
      <h1>Test List Book</h1>
      <section className="booklist">
        {books.map((book) => (
          <>
            <BookComp {...book} key={book.id} />
          </>
        ))}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
