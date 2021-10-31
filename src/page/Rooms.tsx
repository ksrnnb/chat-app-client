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
import NavBar from '../components/NavBar';
import { Room } from '../domain/Room';
import { useEffect, useState } from "react";
import { GetRoomsResponse } from "../response/GetRoomsResponse";
import { useHistory } from "react-router";

const fetchRooms = async (setRooms: React.Dispatch<React.SetStateAction<Room[]>>) => {
    const res = await axios.get<GetRoomsResponse>(roomsEndpoint, { withCredentials: true });

    setRooms(res.data);
}

export default function Rooms() {
    const iniRooms: Room[] = [];
    const [rooms, setRooms] = useState(iniRooms);
    const history = useHistory();

    useEffect(() => {
        fetchRooms(setRooms);
    }, []);

    const handleClick = (id: number) => {
        history.push(`rooms/${id}`);
    }

    return (
        <>
            <NavBar title="チャット一覧" />
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <List>
                        {
                            rooms.map(room => {
                                return (
                                    <ListItem key={room.id}>
                                        <ListItemButton onClick={() => handleClick(room.id)}>
                                            <ListItemIcon>
                                                <Avatar>
                                                    {room.users[0].name.slice(0, 1)}
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary={room.name} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </Box>
            </Container>
        </>
    );
}
