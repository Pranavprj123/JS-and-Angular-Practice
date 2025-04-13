import { LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  name:string = 'abc';
}
