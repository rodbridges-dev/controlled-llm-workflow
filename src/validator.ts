import { ActionSchema, ActionResponse } from "./schema";

export function validateResponse(data: unknown): ActionResponse | null {
  const result = ActionSchema.safeParse(data);

  if (!result.success) {
    console.error("Validation error:", result.error.issues);
    return null;
  }

  return result.data;
}
