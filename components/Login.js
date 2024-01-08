import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
    const [username, setUsername] = useState("chrisbrady");
    const [password, setPassword] = useState("password123");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className='login-container'>
            <h1 className="login-header mt-5 mb-5" data-testid="login-heading">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="username-heading">Username</label>
                    <div className="mt-1">
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="password" className="password-heading">Password</label>
                    <div className="mt-1">
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>
                <div className="mt-9 mb-4 text-center">
                    <button type="submit"
                        data-testid="submit"
                        className="bg-sky-700 px-5 py-3 login-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
