import React from "react";

const ListNote = () => {
  return (
    <ul className="container">
      <li className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-error">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ListNote;
