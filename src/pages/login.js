import { Image } from "@fluentui/react-components";
import React, { useState } from 'react';
import {
    makeStyles,
    shorthands,
} from "@fluentui/react-components";
import {
    Card,
    CardPreview,
    Input,
    Button,
} from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
        // ...shorthands.margin("auto"),
        // width: "1024px",
        // maxWidth: "100%",
        // height:"100%",
    },
});

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make a POST request to the sign-up endpoint in your backend API
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle success or error response from the backend
                console.log(data);
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
                <Input placeholder="Email" type="email" size="large" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                <Input placeholder="Password" type="password" size="large" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: "30px", width: "100%" }} />
                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "50px", marginBottom: "50px" }}>
                    <Button appearance="primary" type="submit">Sign Up</Button>
                </div>
            </form>
        </>
    );
};

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make a POST request to the sign-in endpoint in your backend API
        fetch('/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle success or error response from the backend
                console.log(data);
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
                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "50px", marginBottom: "50px" }}>
                    <Button appearance="primary" type="submit">Sign In</Button>
                </div>
            </form>
        </>
    );
};

function Login() {
    const styles = useStyles();
    const [isSignIn, setIsSignIn] = useState(true);
    const handleChangeState = () => {
        setIsSignIn(!isSignIn);
    };
    return (
        <div style={{ display: "flex", width: "100vw", justifyContent: "center", height: "auto", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "448px", height: "500px", padding: "48px 40px 36px", border: "1px solid gray", borderRadius: "8px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image src={"./images/logo.png"}></Image>
                    {isSignIn ? <SignIn /> : <SignUp />}
                    <div style={{ width: "100%", textAlign: "center" }}>
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