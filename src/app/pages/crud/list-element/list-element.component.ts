import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListElementComponent implements OnInit{

  listPost:Post[] = [];
  modalRef?: BsModalRef;

  pageAdd:string = environment.routes.crud.add;

  postToDelete:Post = {
    id:0,
    userId: 0,
    title: '',
    body: ''
  };

  constructor(
    private postService:PostsService,
    private modalService: BsModalService
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

  private _delete(post:Post):void {
    this.postService.deletePost(post.id).subscribe({
      next: respose => {
        this._deleteElementOnArray(post.id);
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  private _deleteElementOnArray(id:number):void {
    this.listPost = this.listPost.filter(item => item.id != id);
  }
  
  openModal(template: TemplateRef<any>, item:Post) {
    this.postToDelete = item;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }
  
  confirm(): void {
    this.modalRef?.hide();
    this._delete(this.postToDelete);
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
}
