import _ from "lodash";
import "./style.css";

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.projects = [];
  }

  createProject(project) {
    this.projects.push(project);
  }

  readProject() {
    return this.projects;
  }

  updateProject(newName){
    this.name = newName;
  }

  deleteProject(projectToDelete) {
    const index = this.projects.indexOf(projectToDelete);
    if(index !== -1){
      this.projects.splice(index, 1);
    }
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoToDelete) {
    const index = this.todos.indexOf(todoToDelete);
    if(index !== -1){
      this.projects.splice(index, 1);
    }
  }
}

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  //CRUD Todos
  createTodo(title, description, dueDate, priority) {
    return new Todos(title, description, dueDate, priority);
  }

  updateTodo(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
  }
}

class Interface {
  constructor(){
    this.title = document.createElement("div");
    this.title.id = "interface-title";
    this.main = document.createElement("div");
    this.main.id = "interface-main";
    this.createProjectButton = document.createElement("div");
    this.createProjectButton.id = "create-project-button";
    this.createTodoButton = document.createElement("div");
    this.createTodoButton.id = "create-todo-button";

    document.body.append(this.title, this.main, this.createProjectButton, this.createTodoButton);

    this.createProjectButton.addEventListener("click", ()=>{

    });

    this.createTodoButton.addEventListener("click", ()=>{

    });
  }

}
