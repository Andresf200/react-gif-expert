import {render,screen} from '@testing-library/react';
import { GifGrid } from '../../src/components';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />',() => {
    const category = 'One Punch';

    test('debe mostrar el loading inicialmente',() => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargen las imagen',() => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});