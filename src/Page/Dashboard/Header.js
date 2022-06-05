import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          User Management System
        </h1>
      </div>

      <div
        style={{ marginTop: "30px", marginBottom: "18px", textAlign: "center" }}
      >
        <h4>Hey {} </h4>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Movie in your wishlist
        </button>
      </div>
    </header>
  );
}

export default Header;
