import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Visual Feats Netlify Dynamic Site Hackethon';
  imageUrl = 'https://unsplash.com/photos/photo-of-moon-pd4lo70LdbI';
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Visual Feats Netlify Dynamic Site Hackethon';
//   imageUrl = 'https://unsplash.com/photos/photo-of-moon-pd4lo70LdbI';
// }
