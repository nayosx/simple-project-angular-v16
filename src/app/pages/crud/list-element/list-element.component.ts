import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListElementComponent implements OnInit{

  listPost:Post[] = [];

  constructor(
    private postService:PostsService,
  ) {}

  ngOnInit(): void {
    this._getAllPosts();
  }


  private _getAllPosts():void {
    this.postService.getAllPosts().subscribe({
      next: response => {
        console.log(response);
        this.listPost = response;
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  handleDelete(post:Post):void {

  }


  private _delete(post:Post):void {
    this.postService.deletePost(post.id).subscribe({
      next: respose => {},
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
}
