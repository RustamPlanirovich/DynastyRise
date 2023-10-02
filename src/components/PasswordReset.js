// src/components/PasswordReset.js
import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/actions';
import {Link} from "react-router-dom";


const PasswordReset = () => {
    const dispatch = useDispatch();

    // Добавляем функцию для валидации email
    const validateEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value) ? undefined : 'Неверный адрес электронной почты';
    };

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            dispatch(setFormData(values));
            console.log(values)
            // Здесь вы можете добавить логику для восстановления пароля, например, отправку письма с инструкциями на указанный email.
        },
        validate: (values) => {
            const errors = {};
            errors.email = validateEmail(values.email);
            if (!errors.email) {
                delete errors.email;
            }
            return errors;
        },
    });

    // Добавьте функцию для валидации email, как было сделано ранее.

    return (
        <Container maxWidth="sm" className="container">
            <div>
                <Typography variant="h4" gutterBottom>
                    Password Reset
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={Boolean(formik.errors.email)}>
                        Reset Password
                    </Button>
                    <Link to="/login">
                        <Button variant="outlined" color="secondary">
                            Cancel
                        </Button>
                    </Link>
                </form>
            </div>
        </Container>
    );
};

export default PasswordReset;
