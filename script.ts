const $todoList = document.querySelector('.todos') as HTMLElement;
const $form = document.querySelector('.todo-add-form') as HTMLFormElement;
const $formInput = $form.querySelector('.todo-input') as HTMLInputElement;
const $searchInput = document.querySelector('.header__search') as HTMLInputElement;;
import { TodoList } from './todolist.js';

const myTodoList = new TodoList($todoList);

$todoList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('item-actions_type_delete')) {
        const todoItem = target.closest('.todo') as HTMLElement;
        myTodoList.remove(todoItem.dataset.id as string);
    }
});

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $formInput.value;
    myTodoList.add(value);
    $form.reset();
});

$searchInput.addEventListener('input', (event) => {
    const input = event.target as HTMLInputElement;
    const searchValue = input.value;
    myTodoList.search(searchValue);
});

myTodoList.add('Hello');
myTodoList.add('World');
