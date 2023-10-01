import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibraryService } from 'src/app/shared/services/library.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListElementComponent implements OnInit{

  constructor(
    private libService:LibraryService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks():void {
    this.libService.getAllBooks().subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

}
