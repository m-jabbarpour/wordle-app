import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BoxGrid from "./components/BoxGrid";
import Keyboard from "./components/Keyboard";

import { useHandleGame } from "./hooks/useHandleGame";

function App() {
  const { letters, guessedWords, handleType, handleDelete, handleEnter } =
    useHandleGame();

  return (
    <div className="bg-zinc-950 pt-6 flex flex-col gap-8 min-h-screen">
      <BoxGrid guessedWords={guessedWords} />
      <Keyboard
        letters={letters}
        handleType={handleType}
        handleDelete={handleDelete}
        handleEnter={handleEnter}
      />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
