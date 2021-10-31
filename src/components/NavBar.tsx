import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useHistory } from "react-router";

interface NavBarProps {
    title: string
    needBackIcon?: boolean
}

export default function NavBar(props: NavBarProps) {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    }

    return (
        <AppBar position="static" enableColorOnDark={true}>
            <Toolbar>
                {props.needBackIcon && 
                    <ChevronLeftIcon onClick={handleBack}></ChevronLeftIcon>
                }
                <Box sx={{ px: 1 }} />
                <Typography variant="h5">
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}