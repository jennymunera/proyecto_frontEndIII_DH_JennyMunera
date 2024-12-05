import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';


describe('Navbar Component', () => {
    it('Renderizar todos los links de Navbar', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(getByText('Inicio')).toBeInTheDocument();
        expect(getByText('Contactanos')).toBeInTheDocument();
        expect(getByText('Informacion')).toBeInTheDocument();
        expect(getByText('Favoritos')).toBeInTheDocument();
    });
});