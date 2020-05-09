import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.newPost();
  }


  newPost() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmit() {
    const formValue = this.postForm.value;
    const newPost = new Post (
      0,
      formValue['title'],
      formValue['content'],
      0,
      new Date()
    );
    this.postService.addNewPost(newPost);
    this.router.navigate(['/']);
  }
}
