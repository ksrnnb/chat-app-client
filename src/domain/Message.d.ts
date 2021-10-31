import { User } from "./User";

export interface Message {
    id: number
    roomId: int
    userId: int
    text: string
    user: User
}