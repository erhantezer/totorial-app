import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios";

const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

const Home = () => {
const [tutorials, setTutorials] = useState([]);
const [loading, setLoading] = useState(false);

const getTutorials = async () => {
  setLoading(true)
  try {
    const {data} = await axios.get(BASE_URL);
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

if(loading) {
  return (
      <main>
        <h2>Loading...</h2>
      </main>
    )
}

  return (
    <>
      <AddTutorial/>
      <TutorialList tutorials={tutorials}/>
    </>
  )
}

export default Home