

const TaskCard = ({tasklist, setTasklist, todo, task, setTask}) => {
    const handleDelete = (id) => {
        const updatedTasklist = tasklist.filter((item) => item.id !== id);
        setTasklist(updatedTasklist);
    }

    const handleEdit = (id) => {
        const selectedTask = tasklist.find((item) => item.id === id);
        setTask(selectedTask);
    }

    return (
        <li>
            <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
        </li>
    )
}

export default TaskCard