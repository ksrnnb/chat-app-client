import axios from "axios";
import { roomsEndpoint } from "../route";
import {
    Box,
    Container,
    CssBaseline,
} from '@mui/material';
import NavBar from '../components/NavBar';
import Message from '../components/Message';
import ChatInput from '../components/ChatInput';
import { Room } from '../domain/Room';
import { useState, useEffect } from "react";
import { GetRoomResponse } from "../response/GetRoomResponse";
import { useParams } from "react-router";

const fetchRoom = async (setRoom: React.Dispatch<React.SetStateAction<Room | null>>, roomId: string) => {
    const res = await axios.get<GetRoomResponse>(
        `${roomsEndpoint}/${roomId}`,
        { withCredentials: true }
    );

    setRoom(res.data);
}

interface ChatRoomParams {
    id: string;
}

export default function Chat() {
    const [room, setRoom] = useState<Room | null>(null);
    const { id } = useParams<ChatRoomParams>();

    useEffect(() => {
        fetchRoom(setRoom, id);
    }, [id]);

    return (
        <>
            {room &&
                <>
                    <NavBar title={room.name} needBackIcon={true}/>
                    <Container component="main" maxWidth="md">
                        <CssBaseline />
                            <Box sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                        {
                            room.messages.map((message) => {
                                return <Message key={message.id} message={message} />;
                            })
                        }
                            </Box>
                    <ChatInput />
                    </Container>
                </>
            }
        </>
    );
}