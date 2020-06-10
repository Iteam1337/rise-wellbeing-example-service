import React from "react";
import RegisterForm from "./RegisterForm";

import Api from "./api";
import type { Parameter, User } from "./types";

function Register() {
  const [params, setParams] = React.useState<Parameter[]>([]);

  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);

    let params: Parameter[] = [];
    for (const [key, value] of searchParams.entries()) {
      params = [...params, { key, value }];
    }

    setParams(params);
  }, []);

  const handleRegistration = ({ email, password }: User) => {
    Api.register({
      email,
      password,
      params,
    });
  };

  return (
    <div className="w-full grid">
      <h2 className="font-bold text-xl mb-6">Register</h2>
      <RegisterForm onSubmit={handleRegistration} />
    </div>
  );
}

export default Register;
