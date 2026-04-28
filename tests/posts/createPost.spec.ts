import { test, expect } from '@playwright/test';
import { postData } from '../../fixtures/posts';

test.describe('POST /posts', () => {
    test('create post @regression', async ({ request }) => {
        const response = await request.post('/posts', {
            data: postData.validPost,
        }); // Realiza una solicitud POST para crear un nuevo post utilizando los datos del fixture

        expect(response.status()).toBe(201); // Verifica que la respuesta tenga un código de estado 201 (Created)

        const body = await response.json(); // Convierte la respuesta a JSON

        expect(body).toMatchObject(postData.validPost); // Verifica que el cuerpo de la respuesta coincida con los datos enviados para el nuevo post
        expect(body).toHaveProperty('id'); // Verifica que la respuesta incluya una propiedad 'id' para el nuevo post creado
    });
});