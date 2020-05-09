import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;
  @Input() loveIts: number;

  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  onAugmente() {
    this.postService.augmentePost(this.index);
  }

  onDiminue() {
    this.postService.diminuePost(this.index);
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }

}
