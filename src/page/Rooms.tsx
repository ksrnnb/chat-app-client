import axios from "axios";
import { roomsEndpoint } from "../route";

const fetchRooms = async () => {
    return await axios.get(roomsEndpoint, { withCredentials: true });
}

export default function Rooms() {
    const rooms = fetchRooms();
    return <h2>rooms</h2>;
}
