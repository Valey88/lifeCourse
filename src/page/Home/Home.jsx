import { useState } from "react";
import { usePostUserMutation } from "../../redux/Api";

import React from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [postUser, { isLoading, error }] = usePostUserMutation();

  const addNewUser = async () => {
    console.log({
      name,
      password,
    });
    if (name && password) {
      await postUser({
        name,
        password,
      }).unwrap();
      setName("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>ЕГОР ПИДАРАС</h1>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={addNewUser}>pull</button>
      </div>
    </div>
  );
}
