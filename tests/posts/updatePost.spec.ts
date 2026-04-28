import { test, expect } from '@playwright/test';
import { postData } from '../../fixtures/posts';

test.describe('PUT /posts', () => {
  test('update post @regression', async ({ request }) => {
    const response = await request.put('/posts/1', {
      data: postData.updatedPost,
    }); // Realiza una solicitud PUT para actualizar el post con ID 1

    expect(response.status()).toBe(200); // Verifica que la respuesta tenga un código de estado 200

    const body = await response.json(); // Convierte la respuesta a JSON

    expect(body).toMatchObject(postData.updatedPost); // Verifica que el cuerpo de la respuesta coincida con los datos enviados
  });
});

test.describe('PATCH /posts', () => {
  test('partially update post title @regression', async ({ request }) => {
    const response = await request.patch('/posts/1', {
      data: postData.partialPost,
    }); // Realiza una solicitud PATCH para actualizar parcialmente el título del post con ID 1

    expect(response.status()).toBe(200); // Verifica que la respuesta tenga un código de estado 200

    const body = await response.json(); // Convierte la respuesta a JSON

    expect(body.title).toBe(postData.partialPost.title);// Verifica que el título del post se haya actualizado correctamente
    // Solo vuelve lo que se modifica con id entonces no se puede verificar el resto de las propiedades porque no se devuelven en la respuesta, por eso se comenta lo siguiente:
    // expect(body.body).toBe(postData.updatedPost.body); // Verifica que el cuerpo del post no se haya modificado
  });
});