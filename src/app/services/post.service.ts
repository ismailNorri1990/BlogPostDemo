import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

private posts: Post[] = [
  {
  id: 1,
  title: 'titre1',
  content: 'content1',
  created_at: new Date(),
  loveIts: 1

}, {
  id: 2,
  title: 'titre2',
  content: 'content2',
  created_at: new Date(),
  loveIts: 0
}
];

postSubject = new Subject<Post[]>();

constructor() { }

emitPosts() {
  this.postSubject.next(this.posts);
}

addNewPost(post: Post) {
  post.id =  (this.posts.length - 1) + 1;

  this.posts.push(post);
  this.emitPosts();
}


deletePost(id: number) {
  this.posts.splice(id, 1);
  this.emitPosts();
}

augmentePost(id: number) {
    this.posts[id].loveIts++ ;
    this.emitPosts();
}

diminuePost(id: number) {
    this.posts[id].loveIts-- ;
    this.emitPosts();
}

}
