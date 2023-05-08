import axios from "axios";

export function fetchChat(message: string, history: string[]) {
  return axios.post("/api/chat", {
    message,
    history,
  });
}
