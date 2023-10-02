import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  errorMessage:string = environment.messages.minLeng;

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

      this.postService.createPost(post).subscribe({
        next: response => {
          console.log('se creo', post);
          this.router.navigate([`${environment.routes.crud.home}`]);
        }, 
        error: (error:HttpErrorResponse) => {
          console.log(error);
        }
      });
    }
  }

}
