import { GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe('Se valida el componente GifItem',() => {
    const title = "Saitama";
    const url = "http://satiama.com/sati.jpg";


    test('Validamos el snapshot', () => {       
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el alt y src de la imagen',() => {
       render(<GifItem title={title} url={url} />);
       //screen.debug(); // para ver como esta la pantalla osea el screenshot

       //expect(screen.getByRole('img').src).toBe(url);
       //expect(screen.getByRole('img').alt).toBe(alt);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo del componente', () => {
       render(<GifItem title={title} url={url} />);

       expect(screen.getByText(title)).toBeTruthy();
    });
});