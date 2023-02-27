import axios from "axios";
import { useGlobalContext } from "../context";


const useEdit = () => {
const {tutorials,getTutorials} = useGlobalContext();
const {id,title,description} = tutorials;
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    const editTutorial = async () => {
        try {
            await axios.put(`${BASE_URL}/${id}/`, {title, description})
        } catch (error) {
            console.log(error)
        }
        getTutorials()
    }
    return { editTutorial }
}
export default useEdit