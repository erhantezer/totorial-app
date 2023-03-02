import axios from "axios";

const useAdd = () => {

    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    const addTutorial = async (tutor) => {

        try {
            await axios.post(BASE_URL, tutor)
        } catch (error) {
            console.log(error)
        }
    }

    return { addTutorial }
}

export default useAdd