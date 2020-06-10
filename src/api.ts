import type { RegistrationPayload } from "./types";

const API_BASE_URL = "http://localhost:4000";

async function register(user: RegistrationPayload) {
  try {
    const result = await fetch(`${API_BASE_URL}/register`, {
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });

    return result;
  } catch (error) {
    return error;
  }
}

export default {
  register,
};
