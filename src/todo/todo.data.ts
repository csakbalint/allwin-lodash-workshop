import { Todo } from './todo.interfaces';

export const todos = [
  {
    section: 'Prepare for the interview',
    title: 'Read the React documentation ⛈',
    priority: 'urgent',
    done: true,
  },
  {
    section: 'Prepare for the interview',
    title: 'Learn some flexbox 🎁',
    priority: 'casual',
    done: false,
  },
  {
    section: 'Prepare for the interview',
    title: 'Be a Typescript wizard 🧙‍♀️',
    priority: 'urgent',
    done: false,
  },
  {
    section: 'Shopping',
    title: '3kg potato 🥔',
    priority: 'casual',
    done: true,
  },
  {
    section: 'Shopping',
    title: '1kg tomato 🍅',
    priority: 'casual',
    done: false,
  },
] as Todo[];
