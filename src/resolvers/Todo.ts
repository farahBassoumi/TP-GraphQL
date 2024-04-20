export const Todo = {
  user: ({userId}: any, args:any, {db}: any, info: any) => {
     return db.users.find((user:any)=> user.id===userId);
  },
};
