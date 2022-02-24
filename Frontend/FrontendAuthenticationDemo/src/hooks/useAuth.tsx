import { useReducer, useEffect, useState } from "react";
import useLocalStorage, { STORED_VALUES } from "./useLocalStorage";
import jwt from 'jwt-decode';
import { navigate } from "gatsby";
import { AuthReducer, initialState, State } from "../State/reducers/AuthReducer";

export interface JWT {
    Id: string;
    name: string;
    given_name: string;
    roles: string;
    exp: number;
    iss: string;
}

function useAuth() {
    const [authState, authDispatch] = useReducer(AuthReducer, initialState);
    const { value, setValue, remove } = useLocalStorage(STORED_VALUES.TOKEN, "");
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        if (value) {
            login(value);
        } else {
            logout();
        }
        setLoaded(true);
    }, [])

    const login = (responseToken: string) => {
        const user = jwt<JWT>(responseToken);

        authDispatch({
            type: 'LOGIN_ACTION',
            username: user.given_name,
            id: user.Id
        });
        setValue(responseToken);
        navigate("/admin/Start");
    }

    const register = () => {
        //TODO
    }

    const logout = () => {
        remove(STORED_VALUES.TOKEN);

        authDispatch({
            type: 'LOGOUT_ACTION'
        });

        navigate("/");
    }

    const isLoggedIn = (): boolean => {
        return authState.isAuth;
    }

    const getLoggedInUser = (): State => {
        return authState;
    }

    return {
        login,
        logout,
        register,
        isLoggedIn,
        getLoggedInUser,
        loaded
    }
}

export default useAuth;