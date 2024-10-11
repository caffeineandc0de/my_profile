import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import Style from './Contact.module.scss'; // Import your SCSS file

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <Container className={Style.contactContainer}>
            <Typography variant="h4" component="h1" className={Style.title}>
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit} className={Style.form}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Send Message
                </Button>
            </form>
        </Container>
    );
};

export default ContactMe;
