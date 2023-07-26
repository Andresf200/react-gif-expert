import getGifs from "../../src/helpers/getGifs";

describe('Valida el helper getGifs',() => {
    test('debe retornar un arreglo de gifs', async() =>{
        const gifs = await getGifs('One Puch');

        expect(gifs.length).toBeGreaterThan(0);// Que sea mayor a 0
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});