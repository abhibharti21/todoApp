import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/all";
import { useDispatch } from "react-redux";
import { add } from "../store/TodoSlice";

const Input = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const addtext = (event) => {
    setTodo(event);
  };

  const addHandler = (payload) => {
    if (payload == "") {
      document.getElementById("alert").style.opacity = "1";
      document.getElementById("alert").innerHTML =
        " Please enter value before add.";
    } else {
      dispatch(add(payload));
      document.getElementById("input").value = "";
      document.getElementById("alert").style.opacity = "0";
      setTodo("");
    }
  };

  return (
    <div className="input">
      <p id="alert"></p>

      <div className="inputBox">
        <input
          type="text"
          name="input"
          id="input"
          onKeyUp={(e) => {
            if (e.key !== "Enter") {
              addtext(e.target.value);
            } else {
              addHandler(todo);
            }
          }}
        />
        <button onClick={() => addHandler(todo)}>
          <BiAddToQueue />
        </button>
      </div>
    </div>
  );
};

export default Input;
