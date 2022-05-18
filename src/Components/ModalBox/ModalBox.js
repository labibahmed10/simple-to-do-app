import React, { useRef } from "react";

const ModalBox = ({ refetch }) => {
  const handleToDoModal = (e) => {
    e.preventDefault();

    const name = e.target.task.value;
    const desc = e.target.desc.value;

    if (!name || !desc) {
      return "";
    }

    const todoInfo = {
      name,
      desc,
    };

    fetch("http://localhost:5000/allworks", {
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
          <h3 className="text-lg font-bold mb-2">What do you want as a task?</h3>
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
                Complete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
