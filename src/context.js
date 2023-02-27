import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
}

const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

export const AppProvider = ({ children }) => {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTutorials = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(BASE_URL);
            setTutorials(data)
            setLoading(false)
            console.log(data)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        getTutorials()
    }, []);



    return (
        <AppContext.Provider value={{ tutorials, getTutorials, loading }}>
            {children}
        </AppContext.Provider>
    )
}