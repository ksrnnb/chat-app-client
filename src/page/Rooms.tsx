import axios from "axios";
import { roomsEndpoint } from "../route";
import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material'
import { Room } from '../domain/Room'
import { useEffect, useState } from "react";
import { GetRoomsResponse } from "../response/GetRoomsResponse";

const fetchRooms = async (setRooms: React.Dispatch<React.SetStateAction<Room[]>>) => {
    const res = await axios.get<GetRoomsResponse>(roomsEndpoint, { withCredentials: true });

    setRooms(res.data);
}

export default function Rooms() {
    const iniRooms: Room[] = [];
    const [rooms, setRooms] = useState(iniRooms);

    useEffect(() => {
        fetchRooms(setRooms);
    }, []);

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="h5">
                    チャット一覧
                </Typography>
                <List>
                    {
                        rooms.map(room => {
                            return (
                                <ListItem key={room.id}>
                                    <ListItemButton component="a" href={`${roomsEndpoint}/${room.id}`}>
                                        <>
                                            <ListItemIcon>
                                                <Avatar>
                                                    {room.users[0].name.slice(0, 1)}
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary={room.name} />
                                        </>

                                    </ListItemButton>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Box>
        </Container>
    );
}
