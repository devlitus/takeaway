import { Component, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/service/plato.service';
import { Platos } from 'src/app/models/platos';
import { URL_IMAGEN } from 'src/app/config/config';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  platos: Array<Platos> = [];
  categorias: Array<Categoria> = [];
  urlImagen: string = URL_IMAGEN;
  hidden = true;
  mostrar = 'md-show';
  plato: any;
  constructor(public service: PlatoService, public serviceCategoria: CategoriaService) {}

  ngOnInit() {
    this.showPlat();
  }
  showPlat() {
    this.service.getPlatos()
    .subscribe((res: Platos) => {
      Object.assign(this.platos, res);
      // console.log(res);
    });
    this.serviceCategoria.getCategoria()
    .subscribe((res: Categoria) => {
      // console.log(res);
      Object.assign(this.categorias, res);
    });
  }
  showImag(image) {
    if (image) {
     return this.hidden = false;
    }
    return true;
    // console.log(this.urlImagen);
    // console.log(ev);
    // console.log(image);
  }
  detailPlat(platNombre: any, platPrecio: any, platId: any, platDescripicon: any) {
    let plat: Platos = {
      nombre: platNombre,
      descripcion: platDescripicon,
      precio: platPrecio,
      id: platId
    };
    return this.service.checkout(plat);
    // console.log(plat);
  }

}
