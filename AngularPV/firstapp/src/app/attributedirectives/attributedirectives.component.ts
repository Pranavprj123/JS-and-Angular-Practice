import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  imports: [NgClass,NgStyle],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {

  darktheme:boolean=true;
  isHighlighted:boolean=false;
  classes:any= 
  {
    bg:'bg-primary',
    tc:'text-white',
    m:'m-3',
  }
  toggle()
  {
    this.darktheme=!this.darktheme;
    }

  boxStyles():any
  {
    return{'background-color':this.isHighlighted?'red':'white',
      'color':'green'
    }
  }

  changeHighlight()
  {
    this.isHighlighted=!this.isHighlighted;
  }
}


