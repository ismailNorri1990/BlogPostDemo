import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() postList: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }


  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      }
      );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


}
