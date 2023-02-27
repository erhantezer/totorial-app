import axios from "axios"
import { useGlobalContext } from "../context";


const useDelete = () => {
const {getTutorials} = useGlobalContext()
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    const deleteTutorials = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}/`)
        } catch (error) {
            console.log(error)
        }
        getTutorials(); //! database dan sildikten sonra tekrar çağırırız yeniden render edip güncellesin 
    }

    return { deleteTutorials }
}

export default useDelete