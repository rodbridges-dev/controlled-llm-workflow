# Controlled LLM Execution Pattern

Minimal example of how to handle LLM output safely in a Node.js backend using TypeScript and Zod.

The goal is simple: treat model output as untrusted input and enforce boundaries before anything executes.

---

## What This Shows

* Structured JSON response handling
* Runtime schema validation (Zod)
* Explicit action allow-list
* Clear separation between generation and execution

The example simulates a model returning both valid and invalid actions and demonstrates how unauthorized output is rejected before execution.

---

## Why

LLMs return probabilistic output.
Backend systems expect deterministic behavior.

If model responses are executed directly, you risk triggering actions you didn’t explicitly permit.

This pattern enforces:

* A fixed contract (schema)
* A finite set of allowed actions
* A defensive execution layer

Anything outside the contract is rejected.

---

## Flow

Model response
→ Validate against schema
→ Check allowed actions
→ Execute (or reject)

---

## Scope

This is not a full governance framework.

It’s a small, focused reference pattern that shows how to bound model-driven behavior inside an application.
