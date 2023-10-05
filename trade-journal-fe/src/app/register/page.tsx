'use client'
import { useSession } from "next-auth/react";
const Register = () => {

  const { data: session } = useSession();
  console.log(session)
  return (
    <div>asdsad</div>
  )
};


export default Register;