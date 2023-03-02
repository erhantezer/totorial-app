import axios from "axios";
import { useGlobalContext } from "../context";

const useAdd = () => {
const {getTutorials} = useGlobalContext()
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    const addTutorial = async (tutor) => {
        try {
            await axios.post(BASE_URL, tutor)
        } catch (error) {
            console.log(error)
        }
        getTutorials()
    }

    return { addTutorial }
}

export default useAdd