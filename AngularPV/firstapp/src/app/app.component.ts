import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
// import { AdditionComponent } from './addition/addition.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { ParentComponent } from './parent/parent.component';
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent, DataBindingComponent,PipeExampleComponent,DirectivesExampleComponent,SwitchexampleComponent,ParentComponent,AttributedirectivesComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'firstapp';
}
