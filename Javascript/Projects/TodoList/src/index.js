import _ from "lodash";
import "./style.css";

class Project {
  constructor(type) {
    this.type = type;
    this.todos = [];
    this.projects = [];
  }

  createProject(type) {
    const newProject = {
      type: type,
      todos: [],
    };
    this.projects.push(newProject);
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
    this.createUserProjectButton = document.createElement("button");
    this.createUserProjectButton.id = "create-project-button";

    this.createUserProjectButton.innerHTML = `Create Project`;

    this.createUserProjectButton.addEventListener("click", () => {
      this.createUserProject();
    });

    this.main.append(this.createUserProjectButton);
  }

  createUserProject() {
    const projectDialog = document.createElement("dialog");
    projectDialog.id = "project-dialog";

    const storeUserProject = () => {
      const typeInput = document.getElementById("type");

      if (typeInput.checkValidity()) {
        const projectType = typeInput.value;

        const newProject = new Project(projectType);
        newProject.createProject(projectType);
        this.displayUserProject(newProject);
        alert(`Project type "${projectType}" has been created! `);
        typeInput.value = "";
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

    createButton.addEventListener("click", storeUserProject);
    closeButton.addEventListener("click", () => {
      projectDialog.close();
    });

    document.body.appendChild(projectDialog);
    projectDialog.showModal();
  }

  displayUserProject = (project) => {
    const createUserTodoButton = document.createElement("button");
    createUserTodoButton.id = "create-user-todo-button";

    if (project.projects && project.projects.length > 0) {
      for (let i = 0; i < project.projects.length; i++) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("display-user-project");
        const todosList = project.projects[i].todos
          .map(
            (todo) => `
          <div>${todo.title}</div>
          <div>${todo.description}</div>
          <div>${todo.dueDate}</div>
          <div>${todo.priority}</div>`
          )
          .join("");
        projectDiv.innerHTML = `
            <div>${project.projects[i].type}</div>
            <div>${todosList}</div>
            <button onClick="createUserTodo(project)">Create Todo</button>
            <button>Edit Project</button>`;

        this.main.appendChild(projectDiv);
        console.log(projectDiv);
      }
    }
  };

  createUserTodo = (project) => {
    const TodoDialog = document.createElement("dialog");
    TodoDialog.id = "todo-dialog";

    const storeUserTodo = () => {
      const todoTitleInput = document.getElementById("title");
      const todoDescriptionInput = document.getElementById("description");
      const todoDueDateInput = document.getElementById("dueDate");
      const todoPriorityInput = document.getElementById("priority");

      if (
        todoTitleInput.checkValidity() &&
        todoDescriptionInput.checkValidity() &&
        todoDueDateInput.checkValidity() &&
        todoPriorityInput.checkValidity() &&
        project
      ) {
        const todoTitle = todoTitleInput.value;
        const todoDescription = todoDescriptionInput.value;
        const todoDueDate = todoDueDateInput.value;
        const todoPriority = todoPriorityInput.value;

        const newTodo = new Todos(
          todoTitle,
          todoDescription,
          todoDueDate,
          todoPriority
        );

        project.todos.push(newTodo);
        alert(`New list has been created!`);

        todoTitleInput = "";
        todoDescriptionInput = "";
        todoDueDateInput = "";
        todoPriority = "";
      } else {
        alert("Please enter a project type!");
      }

      typeInput.value = "";
    };

    projectDialog.innerHTML = `<label for="type">Type</label>
    <input type="text" name="type" id="type" required />
    <button id="createButton">Create</button>
    <button autofocus id="closeButton">Close</button>`;

    const createButton = projectDialog.querySelector("#createButton");
    const closeButton = projectDialog.querySelector("#closeButton");

    createButton.addEventListener("click", storeUserProject);
    closeButton.addEventListener("click", () => {
      projectDialog.close();
    });

    document.body.appendChild(projectDialog);
    projectDialog.showModal();
  };
}

const user = new UserStart();
document.body.appendChild(user.main);
