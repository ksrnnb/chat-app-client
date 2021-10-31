import { Message } from '../domain/Message';
import { useAuth } from '../auth/ProvideAuth';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

interface MessageProps {
    message: Message
}

export default function MessageElement(props: MessageProps) {
    let auth = useAuth();
    const user = auth.user;

    if (user === null) {
        return <></>;
    }

    return (
        user.id === props.message.userId ?
            <LeftMessage message={props.message} /> :
            <RightMessage message={props.message} />
    );
}