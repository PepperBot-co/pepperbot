import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@pb/server/api/trpc";
import { z } from "zod";

export const flowRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.flow.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  getById: publicProcedure
    .input(z.object({ flowId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.flow.findUnique({
        where: {
          id: input.flowId,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        data: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.flow.create({
        data: {
          title: input.title,
          slug: input.slug,
          description: input.description,
          data: input.data,
        },
      });
    }),

  updateData: publicProcedure
    .input(
      z.object({
        flowId: z.string(),
        data: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.flow.update({
        where: {
          id: input.flowId,
        },
        data: {
          data: input.data,
        },
      });
    }),
});

/**
 * const cardData = [
  {
    title: "Daily Standup",
    description: "Track daily updates and blockers on autopilot",
    id: "daily-standup",
    slug: "",
    data: `{"edges":[{"id":"1=>2","source":"1","target":"2","type":"workflow"},{"id":"2=>3","source":"2","target":"3","type":"workflow"}],"nodes":[{"id":"1","data":{"label":"Intro","icon":"<Bolt />","description":"Write your into. Add '[reason]' or '[name]' for your personal touch."},"position":{"x":0,"y":0},"type":"intro","selected":false,"selectable":false},{"id":"2","data":{"label":"Message","icon":"<ChatBubble />","description":"Craft a query that requires responses in unformatted text."},"position":{"x":0,"y":300},"type":"workflow","selected":false,"selectable":false},{"id":"3","data":{"label":"Outro","icon":"<Bolt />","description":"Write a friendly closing message, blending appreciation and your unique touch."},"position":{"x":0,"y":600},"type":"outro","selected":false,"selectable":false}]}`,
  },
  {
    title: "Quick Check-in",
    description: "Keep teammates in the loop with a three-question survey",
    id: "quick-check-in",
    slug: "",
    data: `{"edges":[{"id":"1=>2","source":"1","target":"2","type":"workflow"},{"id":"2=>3","source":"2","target":"3","type":"workflow"}],"nodes":[{"id":"1","data":{"label":"Intro","icon":"<Bolt />","description":"Write your into. Add '[reason]' or '[name]' for your personal touch."},"position":{"x":0,"y":0},"type":"intro","selected":false,"selectable":false},{"id":"2","data":{"label":"Message","icon":"<ChatBubble />","description":"Craft a query that requires responses in unformatted text."},"position":{"x":0,"y":300},"type":"workflow","selected":false,"selectable":false},{"id":"3","data":{"label":"Outro","icon":"<Bolt />","description":"Write a friendly closing message, blending appreciation and your unique touch."},"position":{"x":0,"y":600},"type":"outro","selected":false,"selectable":false}]}`,
  },
  {
    title: "Blockers Report",
    description: "Give your team an easy way to flag the blockers",
    id: "blockers-report",
    slug: "",
    data: `{"edges":[{"id":"1=>2","source":"1","target":"2","type":"workflow"},{"id":"2=>3","source":"2","target":"3","type":"workflow"}],"nodes":[{"id":"1","data":{"label":"Intro","icon":"<Bolt />","description":"Write your into. Add '[reason]' or '[name]' for your personal touch."},"position":{"x":0,"y":0},"type":"intro","selected":false,"selectable":false},{"id":"2","data":{"label":"Message","icon":"<ChatBubble />","description":"Craft a query that requires responses in unformatted text."},"position":{"x":0,"y":300},"type":"workflow","selected":false,"selectable":false},{"id":"3","data":{"label":"Outro","icon":"<Bolt />","description":"Write a friendly closing message, blending appreciation and your unique touch."},"position":{"x":0,"y":600},"type":"outro","selected":false,"selectable":false}]}`,
  },
];
 */
