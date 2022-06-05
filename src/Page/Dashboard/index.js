import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";

function Dashboard() {
  const getLocalData = () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  };

  const [users, setusers] = useState(getLocalData);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [user] = users.filter((user) => user.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${user.MovieName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setusers(users.filter((user) => user.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List users={users} handleDelete={handleDelete} />
        </>
      )}
      {isAdding && (
        <Add users={users} setusers={setusers} setIsAdding={setIsAdding} />
      )}
    </div>
  );
}

export default Dashboard;
