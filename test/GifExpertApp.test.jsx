import {render,screen, fireEvent} from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe("Prueba de GifExpertApp", () => {
    test('Validar que la pagina muestre el titulo',() => {
        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp'));
    });

    test('Validar que este recibiendo datos onAddCategory', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target: {value: 'Power Rangers'}});
        fireEvent.submit(form);

        expect(screen.getByText('Power Rangers')).toBeTruthy();
    });

    test('Validamos que la funcion onAddCategory no permita repetir las categorias', () => {
        render(<GifExpertApp />);
        const category = 'Power Rangers';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target: {value: category}});
        fireEvent.submit(form);

        fireEvent.input(input,{target: {value: category}});
        fireEvent.submit(form);

        expect(screen.getAllByText(category).length).toBe(1);
    });

    test('Validamos que aparescan los titulos en pantalla', () => {
        render(<GifExpertApp />);
        const category = 'Power Rangers';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target: {value: category}});
        fireEvent.submit(form);
       
        expect(screen.getByText('Goku')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getAllByRole('heading',{level: 3}).length).toBe(2);
    });
});