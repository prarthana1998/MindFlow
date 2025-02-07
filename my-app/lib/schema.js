import { z } from "zod";

export const journalSchema = z.object({
    title: z.string().min(1, "Give your entry a name please"),
    content: z.string().min(1, "Content is required"),
    collectionId: z.string().optional(),
});
