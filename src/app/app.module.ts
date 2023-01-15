import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ToDoComponent } from "./toDo/todo.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SingleTodoComponent } from "./single-todo/single-todo.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AddTodoComponent } from "./toDo/add-todo/add-todo.component";
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';

// Les routes de l'appli
export const ROUTES: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: ToDoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'single/:id', component: SingleTodoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'addTodo', component: AddTodoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },

];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    HeaderComponent,
    SingleTodoComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
