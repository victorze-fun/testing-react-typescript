// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw'; // msw supports graphql too!

const handlers = [
  rest.post('/inventory/cheesecake', async (req, res, ctx) => {
    const quantity = await req.json();
    console.log(quantity);
    return res(ctx.json({ quantity }));
  }),
  rest.get('/inventory', (req, res, ctx) => {
    const data = { cheesecake: 2, croissant: 5, macaroon: 96 };
    return res(ctx.json(data));
  }),
];

export { handlers };
