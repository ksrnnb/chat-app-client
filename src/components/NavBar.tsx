import axios from 'axios';
import {
    AppBar,
    Box,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from "react-router";
import { logoutEndpoint, tokenEndpoint } from '../route';
import { LogoutRequest } from '../request/LogoutRequest';
import { TokenResponse } from '../response/TokenResponse';
import { useAuth, AuthContextInterface } from '../auth/ProvideAuth';

interface NavBarProps {
    title: string
    needBackIcon?: boolean
}

const logout = async (auth: AuthContextInterface) => {
    const tokenRes = await axios.get<TokenResponse>(tokenEndpoint, { withCredentials: true });

    const req: LogoutRequest = {
        token: tokenRes.data.token,
    };

    await axios.post(
        logoutEndpoint,
        req,
        { withCredentials: true }
    );

    auth.signOut();
}

export default function NavBar(props: NavBarProps) {
    const history = useHistory();
    const auth = useAuth();
    const handleBack = () => {
        history.goBack();
    }

    const handleLogout = () => {
        logout(auth);
    }

    return (
        <AppBar position="fixed" enableColorOnDark={true}>
            <Toolbar>
                {props.needBackIcon &&
                    <Tooltip title="戻る">
                        <ChevronLeftIcon sx={{ cursor: 'pointer' }} onClick={handleBack} />
                    </Tooltip>
                }
                <Box sx={{ px: 1 }} />
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <Tooltip title="ログアウト">
                    <LogoutIcon sx={{ cursor: 'pointer' }} onClick={handleLogout} />
                </Tooltip>
            </Toolbar>
        </AppBar >
    );
}