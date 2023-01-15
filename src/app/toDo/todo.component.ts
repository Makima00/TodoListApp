import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../services/todo.service";


@Component({
    selector: 'my-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['todo.component.css']
})

export class ToDoComponent implements OnInit, OnDestroy {

    currentDate: Date | undefined;
    todos;
    todoSub: Subscription;
    disableAll: boolean = false;

    constructor(private todoservice: TodoService, private routeur: Router) { }

    ngOnInit() {
        this.currentDate = this.todoservice.currentDate;
        this.disableAll = this.todoservice.disableAll;
        this.todoSub = this.todoservice.todoSubject.subscribe(
            (data: any) => {
                this.todos = data;
            }
        );

        this.todoservice.emitTodo();

    }



    onChangeStatus(i: number) {
        this.todoservice.onChangeStatus(i);
    }
    onModify(i: number) {
        this.todoservice.onModify(i);
        this.disableAll = !this.disableAll;
    }
    onView(id: number) {
        this.routeur.navigate(['single', id]);
    }
    ngOnDestroy(): void {
        this.todoSub.unsubscribe();
    }
}