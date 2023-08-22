import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import FormInput from "../../components/form-input/form-input.component"; 
import { useUserStore } from "../../store/trade-journal.store";    
import { tradeJournalMutation } from "../../store/trade-journal-mutation";
import { checkResponse } from "../../utils/helpers/check-response.helper";

const forms = { 
  username: '',
  password: '',
  firstname: '',
  lastname: ''
}  
 
const Register = () => {
  const { ...userStore } = useUserStore();
  const [formFields, setFormFields] = useState(forms); 
  const { username, password, firstname, lastname } = formFields; 
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(userStore.registerFailed);
    userStore.setRegisterFailed(false);  
  }, [userStore.registerFailed]);

  const register = useMutation({
    mutationFn: tradeJournalMutation,
    onSuccess: data => { 
      alert(data.message); 
      if (!data.success)
        userStore.setRegisterFailed(true);  
      else
        userStore.setRegisterFailed(false);  
      // if (data.success) 
      //   navigate("/login"); 
    }, 
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name]: value }); 
  };   
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      register.mutate({
        url: "https://localhost:7090/User/register",
        formdata: JSON.stringify({
          username: username, 
          password: password,
          firstname: firstname,
          lastname: lastname
        })
      });
  }  
  console.log(userStore.registerFailed);
  return( 
    <div className="mx-auto max-w-7xl sm:px-56 sm:py-60 lg:px-96 lg:py-60">
        <form onSubmit={handleSubmit}>
            <div className="grid gap-y-5">
                <FormInput
                    label="Username"
                    type="text"
                    className="block w-full rounded-md" 
                    name="username"
                    onChange={handleChange}
                    value={username}
                    
                />
                <FormInput
                    label="Password"
                    type="password"
                    className="block w-full rounded-md"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    
                />
                <FormInput
                    label="First Name"
                    type="text"
                    className="block w-full rounded-md"
                    name="firstname"
                    onChange={handleChange}
                    value={firstname}
                    
                />
                <FormInput
                    label="Last Name"
                    type="text"
                    className="block w-full rounded-md"
                    name="lastname"
                    onChange={handleChange}
                    value={lastname}
                    
                />
                {userStore.registerFailed && <p>FAILED!</p>}
                <button className="w-full rounded-md py-3 bg-green-600 text-white hover:bg-green-400">
                    Register
                </button>
            </div>
        </form>
    </div>
      
  );
};

export default Register;