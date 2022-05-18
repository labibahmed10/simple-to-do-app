import React from "react";
import { Link } from "react-router-dom";
import ModalBox from "../ModalBox/ModalBox";
import ToDoLists from "../ToDoLists/ToDoLists";

const HomePage = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link to="" className="text-3xl font-semibold mx-auto">
          My Simple To-Do App
        </Link>
      </div>

      <div className="h-[40rem] w-[55rem] border mx-auto mt-10 text-white">
        <div className="flex items-center gap-x-3 justify-center p-10">
          <label htmlFor="my-modal-6" className="btn modal-button">
            Add Task
          </label>
        </div>
        <ToDoLists></ToDoLists>
      </div>

      {/* modal is here */}
      <ModalBox></ModalBox>
    </div>
  );
};

export default HomePage;
