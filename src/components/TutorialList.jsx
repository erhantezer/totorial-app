

const TutorialList = ({tutorials}) => {
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
                        return (
                            <tr>
                                
                            </tr>    
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TutorialList

