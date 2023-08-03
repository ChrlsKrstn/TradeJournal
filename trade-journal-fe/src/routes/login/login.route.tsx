import { FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
 
import FormInput from "../../components/form-input/form-input.component"; 
import { useUserStore } from "../../store/trade-journal.store";   
import { LoginQuery } from "../../store/trade-journal-queries";

const forms = { 
    username: '',
    password: ''
}  

const Login = () => {

  const { ...userStore } = useUserStore();
  const [formFields, setFormFields] = useState(forms); 
  const {username, password} = formFields; 
  const navigate = useNavigate();   
  const { queryKey, queryFn } = LoginQuery();
  const handleLogin = useQuery({ queryKey, queryFn, enabled :false });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name]: value }); 
  };  
  console.log(handleLogin.isLoading);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();    
      userStore.setLogin(username, password);   
      handleLogin.refetch();
      console.log(handleLogin.isLoading);
  } 

  return(
    <div className="mx-auto max-w-7xl sm:px-56 sm:py-80 lg:px-96 lg:py-80">
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
                <button className="w-full rounded-md py-3 bg-green-600 text-white hover:bg-green-400">
                    Login
                </button>
            </div>
        </form>
    </div>
      
  );
};

export default Login;