import React, { useState } from 'react';
import { Grid, Form, Segment, Header, Icon, Button, Message } from "semantic-ui-react";
import "./Register.css";
import { auth } from '../../../server/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const Register = () => {

    let user = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    let errors = [];

    const [userState, setUserState] = useState(user);
    const [errorState, setErrorState] = useState(errors);

    const handleInput = (e) => {
        const { name, value } = e.target;

        setUserState((currentState) => {
            let currentuser = { ...currentState };
            currentuser[name] = value;
            return currentuser
        })
        console.log(e);
    }

    const checkForm = () => {
        if (isFormEmpty()) {
            setErrorState((error) => error.concat({ message: "Please fill in all fields" }))
            return false
        } else if (!checkPassword()) {
            // setErrorState((error) => error.concat({ message: "Invalid Password" }))
            return false
        }
        return true
    }

    const isFormEmpty = () => {
        return !userState.userName || !userState.email || !userState.password || !userState.confirmPassword
    }

    const checkPassword = () => {
        if (userState.password.length < 8) {
            setErrorState((error) => error.concat({ message: "Password length should be greater than 8" }))
            return false
        } else if (userState.password !== userState.confirmPassword) {
            setErrorState((error) => error.concat({ message: "Password and Confirm Password does not match" }))
            return false
        }
        return true
    }

    const onSubmit = () => {
        setErrorState(() => [])
        if (checkForm()) {
            console.log("Here")
                // firebase
                // .auth()
                // .createUserWithEmailAndPassword(userState.email, userState.password)
                // .then(createdUser => {
                //     console.log(createdUser);
                // })
                // .catch(error => {
                //     console.log(error);
                // })
            signInWithEmailAndPassword(auth, userState.email, userState.password)
            .then(createdUser => {
                    console.log(createdUser);
                })
            .catch(error => {
                    console.log(error);
                })
        }
    }

    const formatErrors = () => errorState.map((error, index) => <p key={index}>{error.message}</p>)

    return (
        <Grid verticalAlign='middle' textAlign='center' className='grid-form'>
            <Grid.Column style={{ maxWidth: "500px" }}>
                <Header icon as="h2">
                    <Icon name='slack' />
                    Register
                </Header>
                <Form onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            name="userName"
                            value={userState.userName}
                            icon="user"
                            iconPosition='left'
                            onChange={handleInput}
                            type='text'
                            placeholder="User Name"
                        />
                        <Form.Input
                            name="email"
                            value={userState.email}
                            icon="mail"
                            iconPosition='left'
                            onChange={handleInput}
                            type='email'
                            placeholder="User Email"
                        />
                        <Form.Input
                            name="password"
                            value={userState.password}
                            icon="lock"
                            iconPosition='left'
                            onChange={handleInput}
                            type='password'
                            placeholder="User Password"
                        />
                        <Form.Input
                            name="confirmPassword"
                            value={userState.confirmPassword}
                            icon="lock"
                            iconPosition='left'
                            onChange={handleInput}
                            type='password'
                            placeholder="Confirm Password"
                        />
                    </Segment>
                    <Button>
                        Submit
                    </Button>
                </Form>
                {errorState.length > 0 && <Message error>
                    <h3>Errors</h3>
                    {formatErrors()}
                </Message>}
            </Grid.Column>
        </Grid>
    )
}
