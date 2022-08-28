import logo from "./logo.svg";
import "./App.css";
import PostsComp from "./components/PostsComp";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const handleTabClose = event => {
  //     event.preventDefault();

  //     console.log('beforeunload event triggered');

  //     return (event.returnValue = 'Are you sure you want to exit?');
  //   };

  //   window.addEventListener('beforeunload', handleTabClose);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleTabClose);
  //   };
  // }, []);

  /**
   * Ham confrim dong tab khi co su thay doi
   */
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  /**
   * Ham xu ly khi dong tab
   */
  const handleTabClosing = () => {
    removeInfoLocal();
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  /**
   * vd: ham xu ly chinh khi dong tab
   */
  const removeInfoLocal = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <PostsComp />
    </div>
  );
}

export default App;
