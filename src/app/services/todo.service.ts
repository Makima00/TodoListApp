import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  currentDate = new Date();
  todos: Todo[];
  disableAll: boolean = false;
  todoSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    this.getTotoFromServer();
  }

  emitTodo() {
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number) {
    this.todos[i].status = !this.todos[i].status;
    this.emitTodo();
    this.saveTodoFromServer();
  }
  onModify(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodo();
    this.saveTodoFromServer();
  }
  getTodo(id: number) {
    if (this.todos[id]) return this.todos[id];
    return false;
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todoSubject.next(this.todos);
    this.saveTodoFromServer();
  }
  saveTodoFromServer(): void {
    this.httpClient.put(
      "https://todo-app-afb03-default-rtdb.firebaseio.com/todoList.json", this.todos).subscribe(
        () => console.log("Donnee bien sauvegarder"),
        (error) => console.log("une erreur a survenu " + error)
      );
  }
  getTotoFromServer(): void {
    this.httpClient.get<Todo[]>(
      "https://todo-app-afb03-default-rtdb.firebaseio.com/todoList.json").subscribe(
        (todorecup: Todo[]) => {
          this.todos = todorecup;
          this.emitTodo();
        }
      );
  }
}
