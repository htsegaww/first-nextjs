import { editTask } from "@/utils/action";
import React from "react";

const EditForm = ({ task }) => {
  const { id, completed, contents } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/* contents */}
      <input
        type="text"
        required
        defaultValue={contents}
        name="contents"
        className="input input-bordered w-full"
      />

      {/* completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            defaultChecked={completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <button type="submit" className="btn btn-primary btn-block btn-sm">
          edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
