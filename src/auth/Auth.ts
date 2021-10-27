import axios from 'axios';
import { SelfResponse } from "../response/SelfResponse";
import { selfEndpoint } from "../route";
import { AuthContextInterface } from "./ProvideAuth";

function self() {
    return axios.get<SelfResponse>(selfEndpoint, { withCredentials: true });
}

export async function login(auth: AuthContextInterface) {
    try {
        const res = await self();
        const user = { id: res.data.id };
        auth.signIn(user);
    } catch (e) {
        // do nothing
    }
    auth.setLoading(false);
}