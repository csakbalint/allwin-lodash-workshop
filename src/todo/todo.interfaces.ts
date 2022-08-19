export interface Section {
  title: string;
  todos: Todo[];
}

export interface Todo {
  section: string;
  title: string;
  priority: 'casual' | 'urgent';
  done: boolean;
}
