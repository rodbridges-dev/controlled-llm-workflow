export async function simulateLLM(goal: string): Promise<unknown> {
  // Simulate unpredictable AI behavior
  if (goal.includes("email")) {
    return {
      action: "SEND_EMAIL",
      reason: "User requested email communication."
    };
  }

  // Simulate bad output
  return {
    action: "DELETE_DATABASE", 
    reason: "Seemed appropriate."
  };
}
