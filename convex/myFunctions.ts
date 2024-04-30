import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { queryWithAuth } from "@convex-dev/convex-lucia-auth";

// Write your Convex functions in any file inside this directory (`convex`).
// See https://docs.convex.dev/functions for more.

// You can read data from the database via a query:
export const getUser = queryWithAuth({
  // Validators for arguments.
  args: {},

  // Query implementation.
  handler: async (ctx, args) => {
    return {
      viewer: ctx.session?.user.email,
    };
  },
});

export const listMessages = queryWithAuth({
  // Validators for arguments.
  args: {
    count: v.number(),
  },

  // Query implementation.
  handler: async (ctx, args) => {
    //// Read the database as many times as you need here.
    //// See https://docs.convex.dev/database/reading-data.
    const messages = await ctx.db
      .query("messages")
      // Ordered by _creationTime, return most recent
      .order("desc")
      .take(args.count);
    return {
      latestMessages: messages.toReversed(),
    };
  },
});

export const addMessage = mutation({
  // Validators for arguments.
  args: {
    value: v.string(),
    sender: v.string(),
  },

  // Mutation implementation.
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", { value: args.value, sender: args.sender });
  },
});
