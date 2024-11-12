import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const skillRouter = createTRPCRouter({
  getSkills: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.skill.findMany();
  }),
});