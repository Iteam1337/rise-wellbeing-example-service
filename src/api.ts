import type { RegistrationPayload } from "./types";

const API_BASE_URL = "/api";

async function register(user: RegistrationPayload) {
  try {
    const result = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());

    return result;
  } catch (error) {
    return error;
  }
}

export default {
  register,
};
