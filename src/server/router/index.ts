// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { jobsRouter } from "./jobs";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("jobs.", jobsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
