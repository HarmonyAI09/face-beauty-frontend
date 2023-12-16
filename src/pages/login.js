import { Image } from "@fluentui/react-components";
import React, { useState, useContext } from 'react';
import { AppContext } from "../App";
import {
    makeStyles,
} from "@fluentui/react-components";
import {
    Input,
    Button,
} from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';
import { showNotification } from "../components/NotificationCreator";


const Login = ({ }) => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);

    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState("rgb(26,115,232)");

    const handleChangeState = () => {
        setIsSignIn(!isSignIn);
        setAlertMessage("");
    };

    const SignIn = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const { userName } = useContext(AppContext);
        const { userEmail, } = useContext(AppContext);
        const { userLevel, } = useContext(AppContext);
        const { expireDate, } = useContext(AppContext);
        const { setUserName, setUserEmail, setUserLevel, setExpireDate } = useContext(AppContext);

        const handleSubmit = (e) => {
            e.preventDefault();
            // Make a POST request to the sign-in endpoint in your backend API
            const formData = {
                mail: email,
                pswd: password,
            }
            fetch('https://vvfd6049pnayrd-8000.proxy.runpod.net/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle success or error response from the backend
                    if (data.success) {
                        showNotification("Success",data.status,"success")
                        setUserName(data.name);
                        setUserEmail(data.email);
                        setUserLevel(data.level);
                        setExpireDate(data.expire);
                        localStorage.setItem('userName', data.name);
                        localStorage.setItem('userEmail', data.email);
                        localStorage.setItem('userLevel', data.level);
                        localStorage.setItem('expireDate', data.expire);
                        navigate("/home");
                    }
                    else {
                        showNotification("Failed",data.status,"danger")
                    }

                })
                .catch((error) => {
                    // Handle error
                });
        };

        return (
            <>
                <div style={{
                    color: "rgb(32,33,36)",
                    fontFamily: `"Google Sans","Noto Sans Myanmar UI",arial,sans-serif`, fontSize: "24px", fontWeight: "400",
                    lineHeight: "1.3333", wordBreak: "break-word", boxSizing: "inherit"
                }}>Sign in</div>
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Email" type="email" size="large" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                    <Input placeholder="Password" type="password" size="large" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                    <div style={{ width: "100%" }}>
                        {/* <div style={{
                            color: "rgb(26,115,232)", display: "inline-block", letterSpacing: "0.25px", outline: "0", fontSize: "inherit", textAlign: "left",
                            fontFamily: `roboto,"Noto Sans Myanmar UI",arial,sans-serif`, cursor: "pointer"
                        }}><b>Forgot password?</b></div> */}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "50px" }}>
                        <Button appearance="primary" type="submit">Sign In</Button>
                    </div>
                </form>
            </>
        );
    };

    const SignUp = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            if (!username || !email || !password) {
                // Handle validation error - display a warning or error message
                console.log('Please fill in all the fields');
                return;
            }
            const formData = {
                name: username,
                mail: email,
                pswd: password,
            }
            // Make a POST request to the sign-up endpoint in your backend API
            fetch('https://vvfd6049pnayrd-8000.proxy.runpod.net/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle success or error response from the backend
                    if (data.success) {
                        showNotification("Success",data.status,"success")
                    }
                    else {
                        showNotification("Failed",data.status,"danger")
                    }
                })
                .catch((error) => {
                    // Handle error
                    console.error(error);
                });
        };

        return (
            <>
                <div style={{
                    color: "rgb(32,33,36)",
                    fontFamily: `"Google Sans","Noto Sans Myanmar UI",arial,sans-serif`, fontSize: "24px", fontWeight: "400",
                    lineHeight: "1.3333", wordBreak: "break-word", boxSizing: "inherit"
                }}>Create a Harmony Account</div>
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Username" type="text" size="large" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                    {!username && <div style={{ color: "red" }}>Username is required</div>}
                    <Input placeholder="Email" type="email" size="large" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                    {!email && <div style={{ color: "red" }}>Email is required</div>}
                    <Input placeholder="Password" type="password" size="large" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                    {!password && <div style={{ color: "red" }}>Password is required</div>}
                    <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "50px" }}>
                        <Button appearance="primary" type="submit">Sign Up</Button>
                    </div>
                </form>
            </>
        );
    };


    return (
        <div style={{ display: "flex", width: "100vw", justifyContent: "center", height: "auto", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "448px", height: "500px", padding: "48px 40px 36px", border: "1px solid gray", borderRadius: "8px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image src={"./images/logo.png"}></Image>
                    {isSignIn ? <SignIn /> : <SignUp />}
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <div style={{
                            color: alertColor, display: "inline-block", letterSpacing: "0.25px", outline: "0", fontSize: "inherit", textAlign: "left",
                            fontFamily: `roboto,"Noto Sans Myanmar UI",arial,sans-serif`, cursor: "pointer"
                        }}>
                            <b>{alertMessage}</b>
                        </div>
                    </div>

                    <div style={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
                        <div style={{
                            color: "rgb(26,115,232)", display: "inline-block", letterSpacing: "0.25px", outline: "0", fontSize: "inherit", textAlign: "left",
                            fontFamily: `roboto,"Noto Sans Myanmar UI",arial,sans-serif`, cursor: "pointer"
                        }} onClick={handleChangeState}>
                            <b>{isSignIn ? "Create account" : "Already have your account?"}</b>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SignUp></SignUp> */}
        </div>
    );
}

export default Login;