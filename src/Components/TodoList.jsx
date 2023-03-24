import React from "react";
import { MdDelete } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, remove } from "../store/TodoSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => {
    return state.todo;
  });

  const deleteHandler = () => {
    dispatch(deleteAll());
  };

  const removeHandler = (payload) => {
    dispatch(remove(payload));
  };

  return (
    <div className="todoList">
      {todoList.map((elem, id) => {
        return (
          <div className="list" key={id}>
            <p>{id + 1}</p>
            <h3>{elem}</h3>
            <button onClick={() => removeHandler(id)}>
              <MdDelete />
            </button>
          </div>
        );
      })}
      <div className="removeall">
        <button
          onClick={() => {
            deleteHandler();
          }}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
