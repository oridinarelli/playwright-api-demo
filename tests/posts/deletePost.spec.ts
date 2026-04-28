import { test, expect } from '@playwright/test';

test.describe('DELETE /posts', () => {
  test('delete post @regression', async ({ request }) => {
    const response = await request.delete('/posts/1'); // Elimina el post con ID 1

    expect(response.status()).toBe(200); // Verifica que la respuesta tenga un status code 200

    const body = await response.json(); // Obtiene el cuerpo de la respuesta

    expect(body).toEqual({}); // Verifica que el cuerpo de la respuesta sea un objeto vacío, lo que indica que el post fue eliminado correctamente
  });
});