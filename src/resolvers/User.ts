export const User = {
  todos: ({id}: any, args:any, {db}: any, info: any) => {
    console.log("userid",id)
     return db.todos.filter((todo:any)=> todo.userId===id);
  },
};
