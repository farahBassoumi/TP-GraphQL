import { db } from "../db/db";
export const Query = {
  hello: () => "Hello GL3 2023 2024 :D",
  getUsers: () => [
    {
      name: "aymen",
      age: 41,
      profiles: [
        {
          url: "x/aymenSellaaouti",
          socialMedia: "X",
        },
      ],
    },
  ],
  getTodos: (parent: any, args: any, context: any, info: any) => {
    // console.log('info1111111111',parent);
    // console.log('info222222222222222',args);
    // console.log('info333333333333333',context);
    // console.log('info444444444444444444',info);

    return db.todos;
  },
  getTodoById: (
    parent: any,
    { id }: { id: number },
    context: any,
    info: any
  ) => {
    console.log("info222222222222222", id);
    const todo = db.todos.find((todo) => todo.id === id);

    if (todo === null || todo === undefined) {
      throw new Error(`le todo de id ${id} n'existe pas`);
    }
  
    return todo;
  },
};
