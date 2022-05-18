import React, { useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";

const ToDoLists = ({ lists, refetch }) => {
  const handleDeleteToDo = (id) => {
    console.log(id);

    fetch(`https://quiet-fortress-57180.herokuapp.com/allworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Your To-Do is Deleted", {
            autoClose: 1500,
          });
          refetch();
        }
      });
  };

  const handleUpdateComplete = (id) => {
    fetch(`https://quiet-fortress-57180.herokuapp.com/allworks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ complete: "complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          refetch();
          swal({
            title: "Wow!",
            text: "You've Completed Your Task",
            icon: "success",
            button: "Ok",
          });
        }
      });
  };

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full text-center text-black">
          <thead>
            {/* () => setLinethrough(i + 1) */}
            <tr>
              <th>serial</th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lists?.map((data, i) => (
              <tr key={data._id}>
                <th className={`${data?.complete === "complete" ? "line-through" : ""}`}>{i + 1}</th>
                <td className={`${data?.complete === "complete" ? "line-through" : ""}`}>{data?.name}</td>
                <td className={`${data?.complete === "complete" ? "line-through" : ""}`}>{data?.desc}</td>
                <td>
                  <button onClick={() => handleUpdateComplete(data._id)} className="btn btn-sm">
                    Complete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteToDo(data._id)} className="btn btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ToDoLists;
