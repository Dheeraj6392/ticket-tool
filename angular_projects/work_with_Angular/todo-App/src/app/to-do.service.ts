import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // ✅ Fixed import
import { dateValue, ToDo } from './dataTypes';  // ✅ Ensure this model exists
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos: ToDo[] = []; // ✅ Initialize as empty
  private todoSubject = new BehaviorSubject<ToDo[]>(this.todos);
  todos$ = this.todoSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTodos(); // ✅ Load todos in the constructor safely
  }

  /** ✅ Safe method to load todos only in browser */
  private loadTodos() {
    if (typeof window !== 'undefined' && localStorage) { // ✅ Check if localStorage exists
      this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
      this.todoSubject.next(this.todos);
    }
  }

  toggleToDo(id : number){
   this.todos = this.todos.map(todo=> todo.id === id ? {
    ...todo ,completed : !todo.completed
   } : todo);
   this.updateLocalStorage();
  }

  /** ✅ Method to add a new ToDo */
  addToDo(data:any) {
    const newTodo: ToDo = {id: Date.now(),title : data, completed: false};
    this.todos.push(newTodo);
    this.updateLocalStorage();
  }

  ADDtoDo(data : dateValue){
    console.log(data);
     return this.http.post('http://localhost:3000/seller', data);
  }

  deleteTodo(id : number){
    this.todos = this.todos.filter(todo=> todo.id !== id);
    this.updateLocalStorage();
  }
  /** ✅ Method to update local storage */
  private updateLocalStorage() {
    if (typeof window !== 'undefined' && localStorage) { // ✅ Ensure localStorage exists
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.todoSubject.next(this.todos);
    }
  }

  getValue(){
    return this.http.get('http://localhost:3000/seller');
  }
}
