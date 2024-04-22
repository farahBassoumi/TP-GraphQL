export const Mutation = {
  addTodo: (parent: any, { todoInput }: any, { db }: any, info: any) => {
    // console.log('4USERIDDDDDD',todoInput.userId);
    const user = db.users.some((user: any) => user.id === todoInput.userId);

    if (!user || user.length === 0) {
      throw new Error("y a pas de user de cet id");
    } else {
      const newTodo = {
        id: db.todos[db.todos.length - 1].id + 1,
        status: "WAITING",
        ...todoInput,
      };

      db.todos.push(newTodo);
      return newTodo;
    }
  },
  updateTodo: (parent: any, { todoId, updateTodoInput }: any, { db }: any) => {
    // console.log("4USERIDDDDDD", todoId);

    // console.log("4USERIDDDDDD", updateTodoInput.name);

    // console.log("4USERIDDDDDD", updateTodoInput.userId);
    const user = db.users.find(
      (user: any) => user.id === updateTodoInput.userId
    );

    if (user == undefined || user == null) {
      throw new Error(` the user${updateTodoInput.userId} does not exist`);
    } else {
      const todo = db.todos.find((todo: any) => todo.id === todoId);
      if (todo == undefined || todo == null) {
        throw new Error(` the todo${updateTodoInput.name} does not exist`);
      } else {

        updateTodoInput.userId ? (todo.userId = updateTodoInput.userId) : null;
        updateTodoInput.name ? (todo.name = updateTodoInput.name) : null;
        updateTodoInput.content
          ? (todo.content = updateTodoInput.content)
          : null;
        updateTodoInput.status ? (todo.status = updateTodoInput.status) : null;
      }
      return todo;
    }
  },
  deleteTodo: (
    parent: any,
    id: number,
    { updateTodoInput }: any,
    { db }: any,
    info: any
  ) => {
    const todo = db.todos.filter(
      (todo: any) => todo.name === updateTodoInput.name
    );
    if (todo === undefined || todo === null) {
      console.log(` todo of the name ${updateTodoInput.name} does not exist`);
      throw new Error(
        ` todo of the name ${updateTodoInput.name} does not exist`
      );
    } else {
      return todo;
    }
  },
};
function existeInArray(array: any, attribut: any, value: any) {
  const element = array.some((elem: any) => elem[attribut] === value);
  return element !== null;
}
function verify(elem: any) {
  if (elem == undefined || elem === null) return false;
  return true;
}
