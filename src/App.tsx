import { useState, useContext } from "react";
import Modal from "./components/Modal";
import { FileContext } from "./context";
import "./App.css";
import {
  appTitle,
  btnMainPlaceHolder,
  devName,
  imageNameLabel,
  showModalLabel,
} from "./utils/constants";

const App = () => {
  const { fileSelected } = useContext(FileContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <main role="main" className="App">
      <h1 className="text-3xl font-bold">{appTitle}</h1>
      <h2 className="text-2xl font-bold my-2">{devName}</h2>
      <section className="m-auto mt-12 flex flex-col md:flex-row gap-3 justify-center items-center w-[80%] relative">
        <label className="absolute left-0 top-0">{imageNameLabel}</label>
        <input
          type="text"
          placeholder={btnMainPlaceHolder}
          value={fileSelected?.name || ""}
          readOnly
          className="min-w-[350px] w-full rounded-md p-4 border border-black mt-8"
        />
        <button
          className="w-full md:w-32 md:mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-md text-sm p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {showModalLabel}
        </button>
      </section>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </main>
  );
};

export default App;
