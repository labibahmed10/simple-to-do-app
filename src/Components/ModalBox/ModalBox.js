import React from "react";

const ModalBox = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Task Name"
            className="input input-bordered input-md w-full text-black"
          />

          <textarea
            className="textarea textarea-bordered w-full mt-5"
            placeholder="Type your task here"
          ></textarea>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Complete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
