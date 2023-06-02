import React, { useContext, useState } from "react";
import { AuthContext, useAuthContext } from "../context/auth";

const UpdateUser = () => {
  // const authContext = useAuthContext();
  const { user } = useContext(AuthContext);

  const [state, setState] = useState({
    email: user.data.result.email,
    firstName: user.data.result.firstName,
    lastName: user.data.result.lastName,
    password: "",
  });


  return (
    <div className="container">
      <form>
        <input
          name="email"
          type="email"
          required
          value={state["email"]}
          autoComplete="off"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </form>
    </div>
  );
};

export default UpdateUser;
