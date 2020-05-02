import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [{
    title: 'Post 1',
    content: 'LoremIpsen',
    loveIts: 5,
    created_at: new Date()
    },
    {
      title: 'Post 2',
      content: 'LoremIpsen,LoremIpsen,LoremIpsen,LoremIpsen',
      loveIts: 3,
      created_at: new Date()
      },
      {
        title: 'Post 3',
        content: 'LoremIpsen,LoremIpsen,LoremIpsen',
        loveIts: 2,
        created_at: new Date()
        }];
}
