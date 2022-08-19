import { Section, Todo } from './todo.interfaces';

export const groupTodos = (todos: Todo[]): Section[] => {
  const sections: Section[] = [];
  for (let i = 0; i < todos.length; i++) {
    let section = null;
    for (let j = 0; j < sections.length; j++) {
      if (sections[j].title === todos[i].section) {
        section = sections[j];
      }
    }
    if (!section) {
      section = { title: todos[i].section, todos: [] };
      sections.push(section);
    }
    section.todos.push(todos[i]);
  }
  return sections;
};

export const sortTodos = (todos: Todo[]) => {
  todos.sort((a, b) => {
    if (a.done === b.done) {
      return b.priority.localeCompare(a.priority);
    }
    return a.done ? 1 : b.done ? -1 : 0;
  });
  return todos;
};
