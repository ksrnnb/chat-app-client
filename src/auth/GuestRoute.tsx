import { useAuth } from './ProvideAuth';
import {
    Route,
    Redirect
} from "react-router-dom";
import { ReactNode } from 'react';

interface AuthRouteProps {
    children: ReactNode;
    exact?: boolean;
    path: string;
}

export function GuestRoute(props: AuthRouteProps) {
    const { children, ...rest } = props;
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}