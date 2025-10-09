import { http, HttpResponse } from 'msw';

// Example handlers for MVP; replace with real endpoints later.
export const handlers = [
  // Example GET
  http.get('/api/example', () => {
    return HttpResponse.json({
      items: [
        { id: 1, name: 'Alpha' },
        { id: 2, name: 'Beta' },
        { id: 3, name: 'Gamma' },
      ],
    });
  }),

  // Example POST
  http.post('/api/submit', async ({ request }) => {
    const data = await request.json().catch(() => ({}));
    return HttpResponse.json({ success: true, received: data }, { status: 201 });
  }),
];
