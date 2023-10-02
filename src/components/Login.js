// src/components/Login.js
import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/actions';
import '../styles/Login.css';

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            // Можно отправить данные на сервер для аутентификации
            // и обновить состояние с использованием Redux
            dispatch(setFormData(values));
            console.log(values)
        },
    });

    return (
        <Container maxWidth="sm" className="container">
            <div>
                <Typography variant="h4" gutterBottom>
                    Login Page
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <Button size="small" type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Login;
