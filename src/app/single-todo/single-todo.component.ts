import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})


export class SingleTodoComponent implements OnInit {
  todo: any;
  erreur: string = "";
  constructor(private route: ActivatedRoute, private todos: TodoService) {

  }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.todo = this.todos.getTodo(id);
    console.log(this.todo);


    if (!this.todo) this.erreur = "Une erreur s'est produit";
  }

}
