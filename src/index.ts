import { double, plot, reverse, sum } from './my-super-methods';
import { todos } from './todo/todo.data';
import { groupTodos, sortTodos } from './todo/todo.methods';

plot('sum(1,2,3) =', sum(1, 2, 3));

plot('double(10) =', double(10));

plot("reverse('őlüytüfnáfzér') =", reverse('őlüytüfnáfzér'));

plot('reverse([1,2,3,4,5]) =', reverse([1, 2, 3, 4, 5]));

plot(groupTodos(todos));

plot(sortTodos(todos));
