import axios from "axios";

const useAdd = () => {

    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    const postTutorial = async ({ }) => {

        try {
            await axios.post(BASE_URL, {})
        } catch (error) {
            console.log(error)
        }
    }

    return { postTutorial }
}

export default useAdd