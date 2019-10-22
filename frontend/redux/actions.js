export function toggleAuth(token) {
  return {
    type: "TOGGLE_AUTH",
    payload: { token }
  };
}
