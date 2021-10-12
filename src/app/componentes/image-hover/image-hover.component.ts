import { Component, OnInit, Input } from '@angular/core';
import { Dish, Dishes} from 'src/app/models/platos';

@Component({
  selector: 'app-image-hover',
  templateUrl: './image-hover.component.html',
  styleUrls: ['./image-hover.component.css']
})
export class ImageHoverComponent implements OnInit {
  @Input() platos: Array<Dish> = [];
  @Input() urlImagen: string;

  constructor() { }

  ngOnInit() {
  }

}
