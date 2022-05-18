import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ModalBox from "../ModalBox/ModalBox";
import Spinner from "../Spinner";
import ToDoLists from "../ToDoLists/ToDoLists";
import { AiOutlinePlus } from "react-icons/ai";

const HomePage = () => {
  // getting all to do lists here
  const {
    data: lists,
    isLoading,
    refetch,
  } = useQuery("alltodo", () => fetch("http://localhost:5000/allworks").then((res) => res.json()));

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <Link to="" className="text-3xl font-semibold mx-auto">
          My Simple To-Do App
        </Link>
      </div>

      <div className="h-[40rem] w-[65rem] border mx-auto mt-10 text-white px-2">
        <div className="flex items-center gap-x-3 justify-center p-10">
          <label htmlFor="my-modal-3" className="btn modal-button gap-1">
            Add Task <AiOutlinePlus className="text-xl font-bold"></AiOutlinePlus>
          </label>
        </div>
        <ToDoLists lists={lists} refetch={refetch}></ToDoLists>
      </div>

      {/* modal is here */}
      <ModalBox refetch={refetch}></ModalBox>
    </div>
  );
};

export default HomePage;
