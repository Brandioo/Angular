import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newItem = '';

  items = this.backendSevice.toDoItems;

  showFrameClass = true;

  isShown = true;
  students = ['Brand', 'Xhoi', 45]


  constructor(private backendSevice: BackendService) {

  }

  ngOnInit(): void {
  }

  addItem() {
    this.backendSevice.toDoItems.push(this.newItem);
  }

}
