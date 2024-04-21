export const Mutation = {
  addTodo: (
    parent: any,
    { name, content, userId }: any,
    { db }: any,
    info: any
  ) => {
    const user=db.users.some((user:any)=>user.id===userId);

    if (!user || user.length===0) {
      throw new Error("y a pas de user de cet id");
    } else {
      const newTodo = {
        id: db.todos[db.todos.length - 1].id + 1,
        status: "WAITING",
        name,
        content,
        userId,
      };

      db.todos.push(newTodo);
      return newTodo;
    }
  },
};
