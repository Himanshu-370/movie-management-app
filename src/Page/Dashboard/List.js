import React, { useState, useEffect } from "react";

function List({ users, handleDelete }) {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Rating</th>
            <th className="text">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.MovieName}</td>
                <td>{user.Genre}</td>
                <td>{user.Rating}</td>
                <td className="text">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
