'use client'

import { useSession } from "next-auth/react";
const Login = () => {

  const { data: session } = useSession();

  console.log(session)
  return (
    <>
    <h1>Login</h1>
    <button>
      Test
    </button>
    </>
  );
};

export default Login;