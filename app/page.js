"use client";

import React, { useState } from 'react';

const Page = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [maintask, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", first);
    console.log("Description:", second);
    settask([...maintask, { title: first, desc: second }]);
    setFirst("");
    setSecond("");
  };

  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    settask(copytask);
  };

  const renderTask =
    maintask.length > 0 ? (
      maintask.map((t, i) => (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      ))
    ) : (
      <h2 key="no-task">No Task Available</h2>
    );

  return (
    <>
      <h1 className="place-content-center bg-black text-white text-center font-bold text-4xl py-2">
        My Todo List
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="justify-items-center m-10">
          <input
            type="text"
            className="p-2 m-5 border-2 h-10 w-60 border-black rounded-lg flex"
            placeholder="Enter title"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            type="text"
            className="p-2 m-5 border-2 h-10 border-black rounded-lg w-60"
            placeholder="Enter Description"
            value={second}
            onChange={(e) => setSecond(e.target.value)}
          />
          <button
            type="submit"
            className="m-5 bg-black text-white text-center font-bold py-2 px-4 rounded-lg flex"
          >
            Add Todo
          </button>
        </div>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
