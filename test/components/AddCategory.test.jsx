import { fireEvent,render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Validacion del archivo con addCategory', () => {
    test('Debe cambiar el valor de la caja de texto',() => {
        render(<AddCategory onNewCategory={() => {}} />); 
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target: {value: 'Feliz'}});

        expect(input.value).toBe('Feliz');
    });

    test('Debe llamar a onNewCategory si el input contiene valor',() => { 
        const value = "Goku";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />); 

        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');


        fireEvent.input(input,{target: {value: value}});

        fireEvent.submit(formulario);

        expect(input.value).toBeFalsy();

        expect(onNewCategory).toHaveBeenCalled();//Para comprobar que mi funcion sea llammada
        expect( onNewCategory).toHaveBeenCalledTimes(1);//Para comprobar que solo sea llamada una vez
        expect( onNewCategory ).toHaveBeenCalledWith(value);
    });

    test('no debe llamar el onNewCategory si el input esta vacio',() => {
        const value = "";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />); 

        const formulario = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target: {value: value}});
        fireEvent.submit(formulario);

        expect(input.value).toBeFalsy();

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});