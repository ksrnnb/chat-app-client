import { User } from "./User";
import { Message } from "./Message";

export interface Room {
    id: number
    name: string
    users: User[]
    messages: Message[]
}