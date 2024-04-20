export const Query = {


  getUsers: (parent: any, args: any, {db}: any, info: any) => {
    return db.users;
  },


  getUserById: (parent: any, { id }: any, {db}: any, info: any) => {
    const user = db.users.find((user:any) => user.id === id);
    if (!user || user === undefined)
      throw new Error(` the user id you demanded ${id} does not exist `);

    return user;
  },
 
  getTodos: (parent: any, args: any, {db}: any, info: any) => {
    return db.todos;
  },
  getTodoById: (
    parent: any,
    { id }: { id: number },
    {db}: any,
    info: any
  ) => {
    const todo = db.todos.find((todo:any) => todo.id === id);

    if (todo === null || todo === undefined) {
      throw new Error(`le todo de id ${id} n'existe pas`);
    }

    return todo;
  },
};
