import { useReducer, useEffect } from "react";
import useLocalStorage, { STORED_VALUES } from "./useLocalStorage";
import jwt from 'jwt-decode';
import { navigate } from "gatsby";
import { AuthReducer, initialState, State } from "../State/reducers/AuthReducer";

export interface JWT {
    name: string;
    given_name: string;
    roles: string;
    exp: number;
    iss: string;
}

function useAuth() {
    const [authState, authDispatch] = useReducer(AuthReducer, initialState);
    const { value, setValue, remove } = useLocalStorage(STORED_VALUES.TOKEN, "");

    useEffect(() => {
        if (value) { login(value); } else { logout(); }
    }, [])

    const login = (responseToken: string) => {
        const user = jwt<JWT>(responseToken);
        authDispatch({
            type: 'LOGIN_ACTION',
            username: user.given_name,
            id: user.iss
        });
        setValue(responseToken);
        navigate("/admin/Start");
    }

    const logout = () => {
        remove(STORED_VALUES.TOKEN);
        authDispatch({ type: 'LOGOUT_ACTION' });
        navigate("/");
    }

    const isLoggedIn = (): boolean => { return authState.isAuth; }

    const getLoggedInUser = (): State => { return authState; }

    return { login, logout, isLoggedIn, getLoggedInUser }
}

export default useAuth;