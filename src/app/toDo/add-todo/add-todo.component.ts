import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos = new Todo();

  constructor(private todoService: TodoService, private routeur: Router) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.todoService.addTodo(this.todos);
    this.routeur.navigateByUrl('todos');
  }

}
