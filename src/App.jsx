import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const isExist = bookmarks?.find((item) => item?.id === blog.id) || null;
    // console.log();
    if (!isExist) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      window.alert("Booke marked successfully!");
      return;
    }
    window.alert("This is already exist!")
  };

  // const handleAddToBookmark = blog =>{
  //   const newBookmarks = [...bookmarks, blog];
  //   setBookmarks(newBookmarks);
  // }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
