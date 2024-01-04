import { createTask } from "@/utils/action";
const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here "
          name="contents"
          required
        />
        <button className="btn btn-primary join-item" type="submit">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
