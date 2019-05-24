import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;

  constructor() { }

  newBlogForm() {
    this.newPost = true;
  }

  draftComment() {
    return true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
    // Get All blogs
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }

  ngOnInit() {
  }

}
