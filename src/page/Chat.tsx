import axios from "axios";
import { roomsEndpoint } from "../route";
import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import NavBar from '../components/NavBar';
import { Room } from '../domain/Room';
import { useState, useEffect } from "react";
import { GetRoomResponse } from "../response/GetRoomResponse";
import { useParams } from "react-router";
import { URLSearchParams } from "url";

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
    }, []);

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
                            </Box>
                    </Container>
                </>
            }
        </>
    );
}