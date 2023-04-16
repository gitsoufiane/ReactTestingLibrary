// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: "soufiane" }, { name: "luisa" }, { name: "charlotte" }])
    );
  }),
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "soufiane", imagePath: "/images/soufiane.png" },
        { name: "luisa", imagePath: "/images/luisa.png" },
      ])
    );
  }),
];
