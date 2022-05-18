import React, { useState } from "react";
import { toast } from "react-toastify";

import swal from "sweetalert";

const ToDoLists = ({ lists, refetch }) => {
  const [linethrough, setLinethrough] = useState(0);

  const handleDeleteToDo = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/allworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("Your To-Do is Deleted", {
            autoClose: 1500,
          });
          refetch();
        }
      });
  };

  // here shown success message for complete the task
  lists.length !== 0 &&
    linethrough &&
    swal({
      title: "Wow!",
      text: "You've Completed Your Task",
      icon: "success",
      button: "Ok",
    });

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full text-center text-black">
          <thead>
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
                <th className={`${linethrough === i + 1 ? "line-through" : ""}`}>{i + 1}</th>
                <td className={`${linethrough === i + 1 ? "line-through" : ""}`}>{data?.name}</td>
                <td className={`${linethrough === i + 1 ? "line-through" : ""}`}>{data?.desc}</td>
                <td>
                  <button onClick={() => setLinethrough(i + 1)} className="btn btn-sm">
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
