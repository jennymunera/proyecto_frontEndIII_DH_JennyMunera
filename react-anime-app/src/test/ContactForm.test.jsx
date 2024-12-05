import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../components/ContactForm'; 

describe('ContactForm Component', () => {
    it('Renderizar los campos del formulario correctamente', () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/Nombre y Apellidos/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
        expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
    });

    it('actualiza correctamente los valores de entrada', () => {
        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/Nombre y Apellidos/i);
        const emailInput = screen.getByLabelText(/Correo Electrónico/i);
        const messageInput = screen.getByLabelText(/Mensaje/i);

        fireEvent.change(nameInput, { target: { value: 'Jenny Munera' } });
        fireEvent.change(emailInput, { target: { value: 'jennymunera86@yopmail.com' } });
        fireEvent.change(messageInput, { target: { value: 'Este es un mensaje de prueba.' } });

        expect(nameInput.value).toBe('Jenny Munera');
        expect(emailInput.value).toBe('jennymunera86@yopmail.com');
        expect(messageInput.value).toBe('Este es un mensaje de prueba.');
    });

    it('Mostrar errores de validación cuando los campos no son válidos', async() => {
        render(<ContactForm />);
    
        const submitButton = screen.getByText(/Enviar/i);
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText(/Por favor, completa todos los campos correctamente./i)).toBeInTheDocument();
            expect(screen.getByText(/El nombre debe tener al menos 3 caracteres/i)).toBeInTheDocument();
            expect(screen.getByText(/Por favor, introduce un correo válido/i)).toBeInTheDocument();
            expect(screen.getByText(/El mensaje debe tener al menos 10 caracteres/i)).toBeInTheDocument();
        });
    });
    
    it('Enviar los datos cuando los valores son validos', () => {
        render(<ContactForm />);
    
        fireEvent.change(screen.getByLabelText(/Nombre y Apellidos/i), {
            target: { value: 'Jenny Munera' },
        });
        fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
            target: { value: 'jennymunera94@gmail.com' },
        });
        fireEvent.change(screen.getByLabelText(/Mensaje/i), {
            target: { value: 'Este es un mensaje válido.' },
        });
        const submitButton = screen.getByText(/Enviar/i);
        fireEvent.click(submitButton);
        expect(screen.getByText(/Formulario Enviado Correctamente.../i)).toBeInTheDocument();
    });
});