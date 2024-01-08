import { json } from "stream/consumers";

export class todolistService{
    todoList = ["Rafi", "Defrana", "Bismillah", "akhir", "tahun","bisa","belajar","banyak","hal"];
    getJsonTodolist(){
        return JSON.stringify({
            code: 200,
            status: "Ok",
            data: this.todoList.map((value, index)=>{
                return{
                    id: index,
                    todo: value
                }
            })
        });
    }
    getTodoList(req, res){
        res.write(this.getJsonTodolist())
        res.end();
    }

    createTodo(req,res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);

            res.write(this.getJsonTodolist());
            res.end();
        });
    };

    updateTodo(req,res){
         req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

           if(this.todoList[body.id]){
            this.todoList[body.id] = body.todo;
           }
          
            res.write(this.getJsonTodolist());
            res.end();
        });

    }

    deleteTodo(req,res){
               req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

           if(this.todoList[body.id]){
            this.todoList.splice(body.id, 1)
           }
          
            res.write(this.getJsonTodolist());
            res.end();
        });
    }
};