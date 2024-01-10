import _ from "lodash";
import "./style.css";

class Project {
  constructor(type) {
    this.type = type;
    this.todos = [];
    this.projects = [];
  }

  createProject(project) {
    this.projects.push(project);
  }

  readProject() {
    return this.projects;
  }

  updateProject(newName) {
    this.name = newName;
  }

  deleteProject(projectToDelete) {
    const index = this.projects.indexOf(projectToDelete);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoToDelete) {
    const index = this.todos.indexOf(todoToDelete);
    if (index !== -1) {
      this.todos.splice(index, 1);
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

class UserStart {
  constructor() {
    this.main = document.createElement("div");
    this.main.id = "main";
    this.title = document.createElement("div");
    this.title.id = "interface-title";
    this.started = document.createElement("button");
    this.started.id = "start-interface";

    this.title.innerHTML = `<h1>Welcome to the Todoism</h1>
    <h2>Let's make your life systematically!</h2>`;

    this.started.innerHTML = "Let's get started";

    this.started.addEventListener("click", () => {
      this.switchTab(new UserMain());
    });

    this.main.append(this.title, this.started);
  }

  switchTab(moduleInstance) {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.append(moduleInstance.main);
  }
}

class UserMain {
  constructor() {
    this.user = new UserStart();
    this.main = document.createElement("div");
    this.main.id = "main";
    this.createProjectButton = document.createElement("button");
    this.createProjectButton.id = "create-project-button";
    this.createTodoButton = document.createElement("button");
    this.createTodoButton.id = "create-todo-button";

    this.createProjectButton.innerHTML = `Create Project`;
    this.createTodoButton.innerHTML = `Create Todo`;

    this.createProjectButton.addEventListener("click", () => {
      this.createProject();
    });

    this.createTodoButton.addEventListener("click", () => {
      this.createTodo();
    });

    this.main.append(this.createProjectButton, this.createTodoButton);
  }

  createProject() {
    const projectDialog = document.createElement("dialog");
    projectDialog.id = "project-dialog";

    const storeProject = () => {
      const typeInput = document.getElementById("type");
      const projectType = typeInput.value;

      if (projectType) {
        const newProject = new Project(projectType);
        newProject.createProject();
        alert(`Project type "${projectType}" has been created! `);
        document.getElementById("project-dialog").close();
      } else {
        alert("Please enter a project type!");
      }
    };

    projectDialog.innerHTML = `<label for="type">Type</label>
    <input type="text" name="type" id="type" required />
    <button id="createButton">Create</button>
    <button autofocus id="closeButton">Close</button>`;

    const createButton = projectDialog.querySelector("#createButton");
    const closeButton = projectDialog.querySelector("#closeButton");

    createButton.addEventListener("click", storeProject);
    closeButton.addEventListener("click", () => {
      projectDialog.close();
    });

    document.body.appendChild(projectDialog);
    projectDialog.showModal();
  }
}

const user = new UserStart();
document.body.appendChild(user.main);
