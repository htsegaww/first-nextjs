import prisma from "@/utils/db";

const prismaHandler = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     contents: "play soccer",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamples = async () => {
  const tasks = await prismaHandler();
  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>;
  return (
    <div>
      <h1 className="text-7xl">Prisma</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😁{task.contents}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamples;
