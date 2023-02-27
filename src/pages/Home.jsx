
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import { useGlobalContext } from "../context"


const Home = () => {
const {loading} = useGlobalContext()

if(loading) {
  return (
      <main className="text-center mt-5">
        <h2 className="fs-1">Loading...</h2>
      </main>
    )
}

  return (
    <>
      <AddTutorial/>
      <TutorialList />
    </>
  )
}

export default Home