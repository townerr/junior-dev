import { createRouter } from "./context";
import { z } from "zod";

export const jobsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.postings.findMany();
    },
  })
  .query("getPostingById", {
    input: z.object({
      id: z.string()
    }),
    async resolve({ ctx, input }) {
      if(input.id === "-1") return null;
      return await ctx.prisma.postings.findUnique({
        where: {
          id: input.id,
        },
      });
    }
  });
