"use client";
import { createTaskCustom } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn btn-primary join-item"
      type="submit"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};
const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message) {
      toast.success("task created successfully");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here "
          name="contents"
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
