import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageOption } from 'src/app/shared/models/message.model';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent {

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
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      userId:[1],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const post:Post = this.form.value;
      this.isError = false;
      this.postService.createPost(post).subscribe({
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
