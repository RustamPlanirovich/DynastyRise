// src/components/Registration.js
import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/actions';
import { Link } from 'react-router-dom';

const Registration = () => {
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
        onSubmit: (values) => {
            dispatch(setFormData(values));
            console.log(values)
            // Здесь вы можете добавить логику для регистрации пользователя с указанным email и паролем.
        },
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
    });

    return (
        <Container maxWidth="sm" className="container">
            <div>
                <Typography variant="h4" gutterBottom>
                    Registration
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        // Добавьте валидацию и сообщения об ошибках для пароля, аналогично как в форме входа и восстановления пароля.
                    />
                    <TextField
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        // Добавьте валидацию и сообщения об ошибках для пароля, аналогично как в форме входа и восстановления пароля.
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={Boolean(Object.keys(formik.errors).length)}>
                        Register
                    </Button>
                </form>
                {/* Добавьте ссылку на страницу входа */}
                <Link to="/login">
                    Already have an account? Login
                </Link>
            </div>
        </Container>
    );
};

export default Registration;
