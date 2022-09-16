import { createRouter } from "./context";
import { z } from "zod";

export const jobsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.postings.findMany();
    },
  });
