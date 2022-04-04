import React, { useState } from "react";
import Alert from "./Alert";

export default function FormText(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const textUpcase = () => {
    console.log("Text uppercase is working");
    let newtext = text.toUpperCase();
    setText(newtext);
    showAlert("Converted to uppercase!", "success");
  };

  const textLcCase = () => {
    console.log("Text Lowercase is working");
    let newtext = text.toLowerCase();
    setText(newtext);
    showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    showAlert("Text Cleared!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces removed!", "success");
  };

  const sentenceCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    setText(newText);
    showAlert("Converted to Sentence Case!", "success");
  };

  const capitalizedCase = () => {
    let newText = text.replace(/\b\w/g, (l) => l.toUpperCase());
    setText(newText);
    showAlert("Converted to capitalized Case!", "success");
  };

  const handleCopy = () => {
    console.log("I am copy");
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to Clipboard!", "success");
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const disabledBtn = () =>{
  //   {text.length>0? "opacity-100 cursor-pointer" : "opacity-25 cursor-not-allowed"}
  // }

  let classes;

  if (text.length > 0) {
    classes = `w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 opacity-100 cursor-pointer`;
  } else {
    classes = `w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 opacity-25 cursor-not-allowed`;
  }

  return (
    <>
      <Alert alert={alert} />
      <div className="border-gray-200 mt-10 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <label className="relative block w-full">
            <span
              className={`block text-xl font-medium mb-3 text-${
                props.mode === "white" ? "white" : "black"
              }`}
            >
              Enter Text Here...
            </span>
            <textarea
              className={`placeholder:italic text-${
                props.mode === "white" ? "white" : "black"
              } placeholder:text-${
                props.mode === "white" ? "black" : "white"
              } block bg-${
                props.mode === "white" ? "gray-900" : "white"
              } w-full ${
                props.mode === "white" ? "border-0" : "border"
              } border-slate-300 rounded-md py-5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md`}
              placeholder="Enter Text Here..."
              type="text"
              name="search"
              value={text}
              onChange={handleChange}
              id="myBox"
              row="8"
            />
          </label>
          <div className="mt-5 sm:mt-8 sm:flex flex-wrap sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                onClick={textUpcase}
                className={`${classes}`}
                disabled={text.length === 0}
              >
                Text Uppercase
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={textLcCase}
              >
                Text Lowercase
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={handleClearClick}
              >
                Clear text
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={handleCopy}
              >
                Copy text
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={handleExtraSpaces}
              >
                Remove space
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={sentenceCase}
              >
                Sentence case
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={capitalizedCase}
              >
                Capitalized Case
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:mr-3 mb-3">
              <button
                className={`${classes}`}
                disabled={text.length === 0}
                onClick={capitalizedCase}
              >
                Title Case
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-10 mx-auto">
          <div
            className={`block text-xl font-medium mb-3 text-${
              props.mode === "white" ? "white" : "black"
            }`}
          >
            Counter textarea & Paraghraph & read time
          </div>
          <div
            className={`bg-${
              props.mode === "white" ? "gray-900" : "black"
            } rounded-md w-full  mb-3 p-10`}
          >
            <p
              className={`block text-lg font-normal text-slate-400 text-${
                props.mode === "white" ? "white" : "white"
              }`}
            >
              <b>
                {
                  text.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </b>
              words and <b>{text.length} </b> characters and
              <b> {text.split(/\r\n|\r|\n/).filter((element) => { return element.length !== 0; }).length}</b> Line Count
            </p>
            <p
              className={`block text-lg font-normal text-slate-400 mt-2 text-${
                props.mode === "white" ? "white" : "white"
              }`}
            >
              <b>
                {0.008 *
                  text.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length}
              </b>
              Minutes read
            </p>
          </div>
        </div>
        <div className="container mt-5 mx-auto">
          <div
            className={`block text-xl font-medium mb-3 text-${
              props.mode === "white" ? "white" : "black"
            }`}
          >
            Previw text
          </div>
          <div
            className={`bg-${
              props.mode === "white" ? "gray-900" : "black"
            } rounded-md w-full  mb-3 p-10`}
          >
            <p
              className={`block text-lg font-normal text-slate-400 mt-2 text-${
                props.mode === "white" ? "white" : "white"
              }`}
            >
              {text.length > 0 ? text : "Nothing to preview!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
