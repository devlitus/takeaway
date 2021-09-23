import { Component, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/service/plato.service';
import { Platos } from 'src/app/models/platos';
import { URL_IMAGEN } from '../../config/config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public platos: Array<Platos> = [];
  public url_imagen: string = URL_IMAGEN;
  constructor(public service: PlatoService) { }

  ngOnInit() {
    this.showPlatos();
  }
  showPlatos() {
    this.service.getPlatos()
    .subscribe((res: Platos) => {
      Object.assign(this.platos, res);
    });
  }
}
