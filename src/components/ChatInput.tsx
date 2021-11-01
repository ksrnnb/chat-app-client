import axios from "axios";
import {
    Box,
    Button,
    TextField
} from '@mui/material';
import { roomsEndpoint, tokenEndpoint } from "../route";
import { useState } from 'react';
import { useParams } from "react-router";
import { TokenResponse } from '../response/TokenResponse';
import { SendMessageResponse } from '../response/SendMessageResponse';
import { SendMessageRequest } from '../request/SendMessageRequest';

interface ChatRoomParams {
    id: string;
}

const sendMessage = async (roomId: string, message: string) => {
    const tokenRes = await axios.get<TokenResponse>(tokenEndpoint, { withCredentials: true });

    const req: SendMessageRequest = {
        message: message,
        token: tokenRes.data.token,
    };

    const res = await axios.post<SendMessageResponse>(
        `${roomsEndpoint}/${roomId}`,
        req,
        { withCredentials: true }
    );

    return res.data;
}

interface ChatInputProps {
    updateRoom(): void
}

export default function ChatInput(props: ChatInputProps) {
    const [message, setMessage] = useState('');
    const { id } = useParams<ChatRoomParams>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        sendMessage(id, message);
        setMessage('');
        props.updateRoom();
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