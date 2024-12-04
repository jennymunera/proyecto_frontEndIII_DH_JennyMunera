import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';

        if (name === 'name' && (!value || value.length < 3)) {
            error = 'El nombre debe tener al menos 3 caracteres.';
        }else if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
            error = 'El nombre solo puede contener letras y espacios.';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Por favor, introduce un correo válido.';
        } else if (name === 'message' && value.length < 10) {
            error = 'El mensaje debe tener al menos 10 caracteres.';
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Validaciones 
        if (!name || !email || !message || Object.values(errors).some((error) => error)) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }
        console.log('Datos enviados:', formData);
        alert('¡Formulario enviado correctamente!');
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre y Apellidos</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                />
                {errors.name && <small className="error">{errors.name}</small>}
            </div>
            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingresa tu correo electrónico"
                />
                {errors.email && <small className="error">{errors.email}</small>}
            </div>
            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje"
                ></textarea>
                {errors.message && <small className="error">{errors.message}</small>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;