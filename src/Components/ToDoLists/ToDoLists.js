import React from "react";

const ToDoLists = ({ lists }) => {
  const handleDeleteToDo = (id) => {
    console.log(id);
  };

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
            </tr>
          </thead>
          <tbody>
            {lists?.map((data, i) => (
              <tr key={data._id}>
                <th>{i + 1}</th>
                <td>{data?.name}</td>
                <td>{data?.desc}</td>
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
