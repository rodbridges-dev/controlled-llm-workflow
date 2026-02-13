import { ActionResponse } from "./schema";

export function executeAction(response: ActionResponse) {
  switch (response.action) {
    case "SEND_EMAIL":
      console.log("Executing: SEND_EMAIL");
      console.log("Reason:", response.reason);
      break;

    case "CREATE_TASK":
      console.log("Executing: CREATE_TASK");
      console.log("Reason:", response.reason);
      break;

    case "NO_ACTION":
      console.log("No action taken.");
      break;

    default:
      // This should never happen because schema already validated
      throw new Error("Unauthorized action attempted.");
  }
}
