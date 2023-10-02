// src/components/Login.js
import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/actions';
import '../styles/Login.css';
import {Link} from "react-router-dom";

const Login = ({ setIsAuthenticated, setCurrentPage }) => {
    const dispatch = useDispatch();

    // Добавляем функцию для валидации email
    const validateEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value) ? undefined : 'Неверный адрес электронной почты';
    };

    // Добавляем функцию для валидации пароля
    const validatePassword = (value) => {
        return value.length >= 8 ? undefined : 'Пароль должен содержать не менее 8 символов';
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // Добавляем валидацию для полей
        validate: (values) => {
            const errors = {};
            errors.email = validateEmail(values.email);
            errors.password = validatePassword(values.password);
            // Возвращайте undefined, если поле прошло валидацию
            if (!errors.email) {
                delete errors.email;
            }
            if (!errors.password) {
                delete errors.password;
            }
            return errors;
        },
        onSubmit: (values) => {
            // Можно отправить данные на сервер для аутентификации
            // и обновить состояние с использованием Redux
            dispatch(setFormData(values));
            console.log(values)

            setIsAuthenticated(true);
            setCurrentPage('/dashboard');

            // Сохраните состояние авторизации в localStorage
            localStorage.setItem('authenticated', 'true');
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
                        name="email"
                        label="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                    />
                    <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}

                    />
                    <Button type="submit" variant="contained" disabled={Boolean(formik.errors.email) || Boolean(formik.errors.password)}>
                        Login
                    </Button>
                    <Link to="/registration">Register</Link>
                </form>
            </div>
        </Container>
    );
};

export default Login;
