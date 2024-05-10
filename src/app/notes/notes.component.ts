import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostsServiceService } from '../services/posts-service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

  posts: Post[] = [];

  constructor(private postService: PostsServiceService) {

    this.getData();
  }

  color = 'yellow';

  getData() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
