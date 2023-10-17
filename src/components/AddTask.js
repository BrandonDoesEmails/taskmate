
const AddTask = ({tasklist, setTasklist, task, setTask}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        if(task.id) {
            const date = new Date();
            const updateTasklist = tasklist.map((item) => (
                item.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : item 
            ));
            setTasklist(updateTasklist);
            setTask({});
        }
        else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
            setTasklist([...tasklist, newTask]);
            setTask({});
        }
    }

    
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task" 
                    autoComplete="off" 
                    placeholder="add task" 
                    maxLength={25} 
                    value={task.name || ''}
                    onChange={event => setTask({...task, name: event.target.value})}
                />
                <button type='submit'>{task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
}

export default AddTask