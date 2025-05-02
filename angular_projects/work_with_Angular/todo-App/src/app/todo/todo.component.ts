import { Component, OnInit } from '@angular/core';
import { dateValue, ToDo } from '../dataTypes';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [];
  btn : string = '';
  newTask: string = '';
  newTask2: string = '';
  dataValues : dateValue[] = [];
  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.todoService.getValue().subscribe((result)=>{
      // this.todos = result;
    });
    this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    })
  }


  onSubmit(data : dateValue){
  this.todoService.ADDtoDo(data);
  }
  addToDo() {
    if (this.newTask.trim()) {
      this.todoService.addToDo(this.newTask);
      this.newTask = '';
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleToDo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
