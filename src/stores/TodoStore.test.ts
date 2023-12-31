import TodoStore from "./TodoStore";

let todos = new TodoStore();

describe("TodoList", () => {
  beforeEach(() => {
    todos = new TodoStore();
  });

  it("adds todos", () => {
    todos.add("My Todo");

    expect(todos.list.length).toBe(1);
    expect(todos.list.find((t) => t.title === "My Todo")).toBeDefined();
  });

  it("removes a todo", () => {
    todos.add("Test");
    todos.remove(todos.list[0]);

    expect(todos.list.length).toBe(0);
    expect(todos.list.find((t) => t.title === "Test")).toBeFalsy();
  });

  it("toggles a todo", () => {
    todos.add("Test");
    todos.toggle(todos.list[0]);

    expect(todos.list[0].isDone).toBe(true);
  });
});
