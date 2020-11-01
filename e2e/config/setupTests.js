import api from './api';

require('expect-puppeteer');

beforeAll(async () => {
    jest.setTimeout(100000); // CI fix
    await page.goto('http://0.0.0.0:3333', { waitUntil: 'domcontentloaded' });
    // if you don't want to mock api requests remove code below
    await page.setRequestInterception(true);
    page.on('request', (interceptedRequest) => {
        if (interceptedRequest.url().endsWith('/test-url') && interceptedRequest.method() === 'GET') {
            interceptedRequest.respond({
                body: api.testRequest,
            });
        } else {
            interceptedRequest.continue();
        }
    });
});
