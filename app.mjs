import http from "http";
import { todolistService } from "./todolist-service.mjs";


const service = new todolistService();
const server = http.createServer((req, res) => {
    // res.write("Todolist APi");
    // res.end();
    res.setHeader("Content-Type", "application/json");
    if(req.method === "GET"){
        service.getTodoList(req,res);
    }else if(req === "POST"){
        service.createTodo(req,res)
    }else if(req === "PUT"){
        service.updateTodo(req,res)
    }else if(req === "DELETE"){
        service.deleteTodo(req,res)
    };
});

server.listen(3000);