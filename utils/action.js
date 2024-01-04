"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const contents = formData.get("contents");

  //zod: for validation
  const Task = z.object({
    contents: z.string().min(5),
  });
  try {
    Task.parse({ contents });
    //insert the data to the database using...
    await prisma.task.create({
      data: { contents },
    });
    //this will make sure the data displays in the specific path for example, we want this to be displayed in tasks.
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};
// export const createTask = async (formData) => {
//   const contents = formData.get("contents");
//   //insert the data to the database using...
//   await prisma.task.create({
//     data: { contents },
//   });
//   //this will make sure the data displays in the specific path for example, we want this to be displayed in tasks.
//   revalidatePath("/tasks");
// };

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};
export const editTask = async (formData) => {
  //get all the values that could be updated
  const id = formData.get("id");
  const contents = formData.get("contents");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: { id },
    data: {
      contents,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
