import { FormEvent, ChangeEvent, useState } from "react";
import FormInput from "../../components/form-input/form-input.component"; 
import { useUserStore } from "../../store/trade-journal.store";  
import { useNavigate } from "react-router-dom";
const forms = { 
    username: '',
    password: ''
}  

const Login = () => {

  const { ...userStore } = useUserStore();
  const [formFields, setFormFields] = useState(forms);
  const {username, password} = formFields; 
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name]: value }); 
  }; 
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();    
      userStore.loginUser(username, password);
      navigate("/");
  } 

  return(
      <form onSubmit={handleSubmit}>
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
          <button>
              Submit Me!
          </button>    
      </form>
  );
};

export default Login;