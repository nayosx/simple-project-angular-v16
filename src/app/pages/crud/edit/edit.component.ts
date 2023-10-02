import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageOption } from 'src/app/shared/models/message.model';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit{

  form:FormGroup;
  errorMessageMinLng:string = environment.messages.minLeng;

  alert: MessageOption = {
    msg: environment.messages.errorUnknowSave,
    className: 'alert-danger'
  };

  isError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postService:PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      userId:[1],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
      id:[0]
    });
  }
  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id')) ? (this.route.snapshot.paramMap.get('id')) : 0;
    if(id) {
      this._getPost(parseInt(id));
    }
  }

  private _getPost(id:number):void {
    this.postService.getPostById(id).subscribe({
      next: response => {
        this._populateForm(response);
      }, 
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  private _populateForm(post:Post):void {
    this.form.patchValue(post);
  }


  onSubmit() {
    if (this.form.valid) {
      this.isError = false;
      const post:Post = this.form.value;
      this.postService.updatePost(post.id, post).subscribe({
        next: response => {
          this.router.navigate([`${environment.routes.crud.home}`]);
        }, 
        error: (error:HttpErrorResponse) => {
          console.log(error);
          this.isError = true;
        }
      });
    }
  }

}
