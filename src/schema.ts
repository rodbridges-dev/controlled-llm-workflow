import { z } from "zod";

export const ActionSchema = z.object({
  action: z.enum(["SEND_EMAIL", "CREATE_TASK", "NO_ACTION"]),
  reason: z.string()
});

export type ActionResponse = z.infer<typeof ActionSchema>;
