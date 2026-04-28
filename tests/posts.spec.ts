import { test, expect } from '@playwright/test';

test.describe('Posts API', () => {

    test('get all posts @smoke @regression', async ({ request }) => {
        const response = await request.get('/posts');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);

        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
        expect(body[0]).toHaveProperty('body');
    });
    test('get post by id @smoke @regression', async ({ request }) => {
        const response = await request.get('/posts/1');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');
    });
    test('update post @regression', async ({ request }) => {
        const updatedPost = {
            id: 1,
            title: 'Updated title',
            body: 'Updated body',
            userId: 1,
        };

        const response = await request.put('/posts/1', {
            data: updatedPost,
        });

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toMatchObject(updatedPost);
    });
    test('delete post @regression', async ({ request }) => {
        const response = await request.delete('/posts/1');

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toEqual({});
    });
});