import TaskCard from "./TaskCard";

const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
    const handleClear = () => { setTasklist([]); }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={handleClear}>Clear All</button>
            </div>

            <ul>
                {tasklist.map((todo) => <TaskCard 
                                                key={todo.id}
                                                tasklist={tasklist} 
                                                setTasklist={setTasklist}
                                                todo={todo} 
                                                task={task} 
                                                setTask={setTask}
                                            />)}
            </ul>
        </section>
    )
}

export default ShowTask