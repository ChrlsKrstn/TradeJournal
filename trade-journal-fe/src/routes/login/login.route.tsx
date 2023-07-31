import { FormEvent, ChangeEvent, useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { UserStore } from "../../store/trade-journal.store";
import { useNavigate } from 'react-router-dom';
const forms = {
    username: '',
    password: ''
}

const Login = () => {
    
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(forms);

    const {username, password} = formFields;

    const [getUsername, setUsername, getPassword, setPassword] = UserStore(
        (state) => [state.username, state.setUsername, state.password, state.setPassword]
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setUsername(username);
        setPassword(password);
        navigate('/');
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
            <p>This is my username {getUsername}</p>
            <p>This is my password {getPassword}</p>
        </form>
    );
};

export default Login;