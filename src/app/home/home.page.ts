import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonCheckbox, IonButton, IonList, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonInput } from '@ionic/angular/standalone';
import { NgClass } from '@angular/common';
export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, NgClass, DatePipe, IonHeader, IonCheckbox, IonList, IonButton, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonInput, NgFor],
})
export class HomePage {
  
  todoList : TodoItem [] = [];
  newTask : string = '';
  
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed : false
    }

    this.todoList.push(newTodoItem);
    this.newTask = ''; // Clear the input field after adding the task

  }
}

toggleCompletion(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  
}

deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    console.log(this.todoList)
  }
}
  
