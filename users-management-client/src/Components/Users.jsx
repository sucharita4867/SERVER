// import React, { use, useState } from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
      });
  };

  // const handleDeleteBtn = (_id) => {
  //   console.log("btn clicked", _id);
  // };
  return (
    <div>
      <div>
        <h2>Add a user</h2>
        <form onSubmit={handleAddUser}>
          {/* <h4> total users :{users.length}</h4> */}
          <input type="text" name="name" id="" placeholder="Name" required />
          <br />
          <input type="email" name="email" id="" placeholder="Email" required />
          <br />
          <button className="btn">Add user</button>
        </form>
        {/* <p>--------------------------</p>
        <div>
          {users.map((user) => (
            <p key={user._id}>
              {console.log(user)}
              {user.name}: {user.email}
              <button onClick={() => handleDeleteBtn(user._id)}>x</button>
            </p>
          ))}
        </div> */}
      </div>

      {/* <div>
        {users.map((user) => (
          <p key={user.id}>
            Name : {user.name} , Email : {user.email}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default Users;

/*
 *have to send request object tio the server
 *1. mention method: post
 *2. mention header: about json data in property of content-type: application/json
 *3.body :json.stringify(newUser)
 *---------------------
 * on the server side use json as middlewaer
 * *
 **app.user(XPathExpression.json())
 */
