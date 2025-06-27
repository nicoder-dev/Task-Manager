// frontend/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Heading,
    VStack, // Para apilar elementos verticalmente
    Alert,
    AlertIcon,
    AlertDescription
} from '@chakra-ui/react';

const API_BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Error en el registro');
            }

            const data = await response.json();
            setSuccess('¡Registro exitoso! Ahora puedes iniciar sesión!');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            console.error('Error de registro:', err);
            setError(err.message || 'Hubo un problema al intentar registrarse.');
        }
    };

    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            p={4}
        >
            <Box
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="xl"
                w="full"
                maxW="md"
            >
                <Heading as="h2" size="xl" textAlign="center" mb={8} color="gray.800">
                    Registro de Usuario
                </Heading>

                <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                    {error && (
                        <Alert status="error" borderRadius="md">
                            <AlertIcon />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {success && (
                        <Alert status="success" borderRadius="md">
                            <AlertIcon />
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}

                    <FormControl id="username">
                        <FormLabel>Nombre de Usuario:</FormLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>Contraseña:</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl id="confirmPassword">
                        <FormLabel>Confirmar Contraseña:</FormLabel>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        colorScheme="blue"
                        size="lg"
                        width="full"
                        mt={4}
                    >
                        Registrarse
                    </Button>
                </VStack>

                <Text mt={6} textAlign="center" color="gray.600">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login">
                        <Text as="span" color="blue.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                            Inicia sesión aquí
                        </Text>
                    </Link>
                </Text>
            </Box>
        </Box>
    );
}

export default RegisterPage;