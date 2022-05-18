import React, { useEffect, useState } from "react";

const ToDoLists = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allworks")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);
  console.log(lists);
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
            {lists.map((data, i) => (
              <tr key={data._id}>
                <th>{i + 1}</th>
                <td>{data?.name}</td>
                <td>{data?.desc}</td>
                <td>
                  <button class="btn btn-sm">Delete</button>
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
