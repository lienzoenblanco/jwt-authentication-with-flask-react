const hostName = window.location.hostname;
const backHostName = hostName.replace("3000", "3001");

export const BaseUrl = process.env.BACKEND_URL + "/api";
