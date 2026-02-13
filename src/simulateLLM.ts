export async function simulateLLM(goal: string): Promise<unknown> {
  if (goal.toLowerCase().includes("email")) {
    return {
      action: "SEND_EMAIL",
      reason: "User requested email be sent"
    };
  }

  // Example of an unauthorized action returned by the model
  return {
    action: "DELETE_DATABASE",
    reason: "Model returned unauthorized action"
  };
}
