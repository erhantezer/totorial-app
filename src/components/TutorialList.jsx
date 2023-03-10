import { FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { AiFillDelete } from "react-icons/ai"
import useDelete from "../hooks/useDelete";
import {useState} from "react"
import EditTutorial from "./EditTutorial";

const TutorialList = () => {
    const [edit, setEdit] = useState("")
    const { tutorials } = useGlobalContext()
    const { deleteTutorial } = useDelete()


    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials?.map((tutorial) => {
                        const { id, title, description } = tutorial
                        return (
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td className="text-center text-nowrap">
                                    <FaEdit
                                        className="me-2 text-warning"
                                        type="button"
                                        size={20}
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-modal"
                                        onClick={() => setEdit(tutorial)}
                                    />
                                    <AiFillDelete
                                        size={22}
                                        type="button"
                                        className="text-danger "
                                        onClick={() => deleteTutorial(id)}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <EditTutorial {...edit} />
        </div>
    )
}

export default TutorialList

