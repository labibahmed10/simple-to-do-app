import React, { useRef } from "react";
import { toast } from "react-toastify";

const ModalBox = ({ refetch }) => {
  const handleToDoModal = (e) => {
    e.preventDefault();

    const name = e.target.task.value;
    const desc = e.target.desc.value;

    if (!name || !desc) {
      return toast.warn("Please Fill Up the Form", {
        autoClose: 1500,
      });
    }

    const todoInfo = {
      name,
      desc,
    };

    fetch("https://quiet-fortress-57180.herokuapp.com/allworks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          refetch();
        }
      });

    e.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold mb-3">What do you want to add as a task?</h3>
          <form className="flex flex-col gap-2 text-black" onSubmit={handleToDoModal}>
            <input
              name="task"
              type="text"
              placeholder="Task Name"
              className="input input-bordered input-md w-full text-black "
            />

            <textarea
              name="desc"
              className="textarea textarea-bordered w-full mt-5 text-black"
              placeholder="Type your task here"
            ></textarea>

            <div className="modal-action">
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
