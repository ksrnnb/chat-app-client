import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
    id: number
}

export interface AuthContextInterface {
    user: User | null;
    isLoading: boolean;
    setLoading(b: boolean): void;
    signIn(user: User): void;
    signOut(): void;
    isLoggedIn(): boolean;
}

const defaultAuthContext: AuthContextInterface = {
    user: null,
    isLoading: true,
    setLoading: (b: boolean) => { },
    signIn: (user: User) => { },
    signOut: () => { },
    isLoggedIn: () => {
        return false;
    },
}

const authContext = createContext(defaultAuthContext);

export function ProvideAuth({ children }: { children: ReactNode }) {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export function useAuth() {
    return useContext(authContext);
}

function useProvideAuth(): AuthContextInterface {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    const signIn = (user: User) => {
        setUser(user);
    }

    const signOut = () => {
        setUser(null);
    }

    const isLoggedIn = () => {
        return user !== null;
    }

    return { user, isLoading, setLoading, signIn, signOut, isLoggedIn };
}