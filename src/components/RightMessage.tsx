import {
    Box,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import { Message } from '../domain/Message';

interface MessageProps {
    message: Message
}

export default function RightMessage(props: MessageProps) {
    const message = props.message;
    return (
        <Box sx={{
            maxWidth: 300,
            marginLeft: 'auto',
        }}>
            <Typography>{message.user.name}</Typography>
            <Card sx={{ bgcolor: '#b3e5fc' }}>
                <CardContent>
                    <Typography>
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}