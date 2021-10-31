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

export default function LeftMessage(props: MessageProps) {
    const message = props.message;
    return (
        <Box sx={{
            mb: 2,
            maxWidth: 300,
            marginRight: 'auto',
        }}>
            <Typography>{message.user.name}</Typography>
            <Card sx={{ bgcolor: '#eeeeee' }}>
                <CardContent>
                    <Typography>
                        {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}