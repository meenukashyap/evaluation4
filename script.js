// {
//     "tasks": [
//       { "id": 1, "title": "Task 1", "description": "Description for Task 1", "status": "Open", "dueDate": "2024-06-10T12:00:00" },
//       { "id": 2, "title": "Task 2", "description": "Description for Task 2", "status": "In Progress", "dueDate": "2024-06-15T14:30:00" },
//       { "id": 3, "title": "Task 3", "description": "Description for Task 3", "status": "Closed", "dueDate": "2024-06-20T10:00:00" },
//       ...
//     ]
//   }
tasks.forEach(element => {
    

let card=document.getElementById("container");
let task_title=document.getElementById("task title");
let  description=document.getElementById("description");
let status=document.getElementById("status");
let duedate=document.getElementById("due date");
let priority=document.getElementById("priority");
let action=document.getElementById("btn");
append(card,task_title,descritpion,status,duedate,priority,action);

});
