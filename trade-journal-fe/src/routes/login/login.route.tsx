import { FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
 
import FormInput from "../../components/form-input/form-input.component"; 
import { useUserStore } from "../../store/trade-journal.store";    
import { tradeJournalMutation } from "../../store/trade-journal-mutation";

const forms = { 
    url: '',
    username: '',
    password: ''
}

const Login = () => {

  const { ...userStore } = useUserStore();
  const [formFields, setFormFields] = useState(forms); 
  const {username, password} = formFields; 
  const navigate = useNavigate();    
  const login = useMutation({
    mutationFn: tradeJournalMutation,
    onSuccess: response => {  
        alert(response.message);
        if(response.success) { 
          userStore.setUser(response.data);
          navigate("/");
        } 
    }, 
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name]: value }); 
  };   

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      login.mutate({
        url: "https://localhost:7090/User/login",
        formdata: JSON.stringify({
          username: username, 
          password: password
        })
      });
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
        <div className="my-6  text-center"> 
          <p><a href="/register">Register</a></p>
          <p><a href="/register">Forgot password?</a></p>
        </div>
    </div>
      
  );
};

export default Login;