import { simulateLLM } from "./simulateLLM";
import { validateResponse } from "./validator";
import { executeAction } from "./executor";

async function main() {
  const goal = "Please send an email update";

  console.log("Goal: ", goal);

  const rawResponse = await simulateLLM(goal);
  console.log("Raw LLM response: ", rawResponse);

  const validated = validateResponse(rawResponse);

  if (!validated) {
    console.error("Rejected invalid AI response");
    return;
  }

  executeAction(validated);
}

main().catch((err) => {
  console.error("Unhandled execution error: ", err);
});
