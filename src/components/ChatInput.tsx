import axios from "axios";
import {
    Box,
    Button,
    TextField
} from '@mui/material';
import { roomsEndpoint } from "../route";
import { useState } from 'react';
import { useParams } from "react-router";
import { useAuth } from '../auth/ProvideAuth';
import { SendMessageResponse } from '../response/SendMessageResponse';
import { SendMessageRequest } from '../request/SendMessageRequest';

interface ChatRoomParams {
    id: string;
}

const sendMessage = async (roomId: string, message: string, userId: number) => {
    const req: SendMessageRequest = {
        userId: userId,
        text: message,
    };

    const res = await axios.post<SendMessageResponse>(
        `${roomsEndpoint}/${roomId}`,
        req,
        { withCredentials: true }
    );

    return res.data;
}

export default function ChatInput() {
    const [message, setMessage] = useState('');
    const { id } = useParams<ChatRoomParams>();
    const auth = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        if (auth.user === null) {
            return;
        }

        sendMessage(id, message, auth.user.id);
    }

    return (
        <Box>
            <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="メッセージを入力"
                required
                value={message}
                onChange={handleChange}
            />
            <Button
                type="button"
                variant="contained"
                onClick={handleClick}
                sx={{ mt: 3, mb: 2 }}
            >
                送信
            </Button>
        </Box>
    );
}