import {useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/", { replace: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" />
            <input type="password" placeholder="password" />
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginPage;