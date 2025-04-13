import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  imports: [NgClass,NgStyle],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {
  classes:any= 
  {
    bg:'bg-primary',
    tc:'text-white',
    m:'m-3',
  }
}
