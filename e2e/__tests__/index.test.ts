const env = {
    url: 'http://localhost:3333/',
};

describe('e2e tests', () => {
    beforeAll(async () => {
        await page.goto(env.url, { waitUntil: 'domcontentloaded' });
    });

    test('test that shows that e2e tests are working', async () => {
        await expect(page).toMatch('lorem ipsum')
    });
});
