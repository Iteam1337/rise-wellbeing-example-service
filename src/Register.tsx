import React from "react";
import RegisterForm from "./RegisterForm";

import Api from "./api";
import type { Parameter, User } from "./types";

function Register() {
  const [params, setParams] = React.useState<Parameter[]>([]);

  // Simply to grab all query-params and put them into a list of { key: string, value: string }
  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);

    let params: Parameter[] = [];
    for (const [key, value] of searchParams.entries()) {
      params = [...params, { key, value }];
    }

    setParams(params);
  }, []);

  const handleRegistration = async ({ email, password }: User) => {
    const registerResult = await Api.register({
      email,
      password,
      params,
    });

    console.log(registerResult);
  };

  return (
    <div className="w-full grid">
      <h2 className="font-bold text-xl mb-6">Register</h2>
      <RegisterForm onSubmit={handleRegistration} />
    </div>
  );
}

export default Register;
