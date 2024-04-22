export const User = {
  todos: ({id}: any, args:any, {db}: any, info: any) => {
     return db.todos.filter((todo:any)=> todo.userId===id);
  },
};
