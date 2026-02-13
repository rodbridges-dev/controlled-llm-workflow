import { simulateLLM } from "./simulateLLM";
import { validateResponse } from "./validator";
import { executeAction } from "./executor";

async function main() {
    // Returns valid result
    const goal = "Please send an email update.";

    // Returns invalid result
    // const goal = "Delete everything.";

    console.log("Goal:", goal);

    const rawResponse = await simulateLLM(goal);
    console.log("Raw LLM response:", rawResponse);

    try {
        const validated = validateResponse(rawResponse);

        if (!validated) {
            console.error("Rejected invalid AI response.");
            return;
        }

        executeAction(validated);

    } catch (error) {
        console.error("Validation failed. Unauthorized action detected.");
    }
}

main();
