import { FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { AiFillDelete } from "react-icons/ai"

const TutorialList = () => {
// const {tutorials} = useGlobalContext()
    const tutorials = [
        {
            id: 1,
            title: "JS",
            description: "JS is a programming language",
        },
        {
            id: 2,
            title: "React",
            description: "JS library for UI design",
        },
    ]

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
                                        data-bs-target="#edit-tutor"
                                    />
                                    <AiFillDelete
                                        size={22}
                                        type="button"
                                        className="text-danger "
                                        
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TutorialList

