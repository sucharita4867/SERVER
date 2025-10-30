import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  //   console.log(users);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    //     send data to the server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      });
  };
  return (
    <div>
      <div>
        <h2>Add a user</h2>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <button className="btn">Add user</button>
        </form>
      </div>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            Name : {user.name} , Email : {user.email}
          </p>
        ))}
      </div>
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
