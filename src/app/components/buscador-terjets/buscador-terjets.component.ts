import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador-terjets',
  templateUrl: './buscador-terjets.component.html',
  styles: [
  ]
})
export class BuscadorTerjetsComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index]);
  }

}
