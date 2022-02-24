import {useState, useEffect} from "react";

export enum STORED_VALUES{
    THEME = "THEME",
    TOKEN = "STORED_VALUES.TOKEN"
}

function getSavedValue(key: (STORED_VALUES | string), initialValue: any){
    const savedValue = JSON.parse(localStorage.getItem(key) as string);
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue()
    return initialValue;
}

function useLocalStorage(key: (STORED_VALUES | string), initialValue: any){
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    const remove = (key: string) => {
        localStorage.removeItem(key);
    }

    return{value, setValue, remove};
}

export default useLocalStorage;