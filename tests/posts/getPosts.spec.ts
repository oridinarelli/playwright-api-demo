import { test, expect } from '@playwright/test';

test.describe('GET /posts', () => {
    test('get all posts @smoke @regression', async ({ request }) => {
        const response = await request.get('/posts');

        expect(response.status()).toBe(200); // Verifica que la respuesta tenga un código de estado 200

        const body = await response.json(); // Convierte la respuesta a JSON    

        expect(Array.isArray(body)).toBeTruthy(); // Verifica que el cuerpo de la respuesta sea un array
        expect(body.length).toBeGreaterThan(0); // Verifica que el array de posts no esté vacío 

        expect(body[0]).toHaveProperty('id'); // Verifica que el primer post tenga la propiedad 'id'    
        expect(body[0]).toHaveProperty('title'); // Verifica que el primer post tenga la propiedad 'title'
        expect(body[0]).toHaveProperty('body'); // Verifica que el primer post tenga la propiedad 'body'    
    });
    test('get post by id @smoke @regression', async ({ request }) => {
        const response = await request.get('/posts/1');

        expect(response.status()).toBe(200); // Verifica que la respuesta tenga un código de estado 200

        const body = await response.json(); // Convierte la respuesta a JSON   

        expect(body.id).toBe(1); // Verifica que el ID del post sea 1
        expect(body).toHaveProperty('title'); // Verifica que el post tenga la propiedad 'title'
        expect(body).toHaveProperty('body'); // Verifica que el post tenga la propiedad 'body'
    });
    test('get non-existing post returns empty object @regression', async ({ request }) => {
        const response = await request.get('/posts/9999'); // Realiza una solicitud GET para un post que no existe

        expect(response.status()).toBe(404); // Verifica que la respuesta tenga un código de estado 404 para un post no existente

        const body = await response.json(); // Convierte la respuesta a JSON

        expect(body).toEqual({}); // Verifica que el cuerpo de la respuesta sea un objeto vacío para un post no existente
    });
});