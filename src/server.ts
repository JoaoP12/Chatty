import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

// Abre o servidor HTTP com o Websocket
http.listen(3333, () => console.log("Server is running on port 3333"));