import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven';
  anytext: string= "";
  anytext1: string= "";
  anytext2: string= "";
  anytext3: string= "";
submitted: boolean = false;

onSubmit () {
this.submitted = true;
  }
}
