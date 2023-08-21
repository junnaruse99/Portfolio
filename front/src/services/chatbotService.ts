import clientAxios from "../config/axios"
import { IMessage } from "../interfaces/Message";

const API_URL = "portfolio";
const MESSAGE = "message";


export class ChatbotService {
    static getMessages(sessionId: string){
        return clientAxios.get<IMessage[]>(`${API_URL}/${MESSAGE}?sessionId=${sessionId}`)
    }

    static sendMessage(message: string, sessionId?: string) {
        return clientAxios.post<IMessage>(`${API_URL}/${MESSAGE}`, {prompt: message, ...(sessionId && {sessionId})})
    }
}