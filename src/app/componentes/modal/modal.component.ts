import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PlatoService } from 'src/app/service/plato.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @Input() nombre: any;
  plato: any;
  cantidad: number;
  constructor(public renderer: Renderer2, public servicePlato: PlatoService) { }

  ngOnInit() {
  }
  openModal() {
    // this.renderer.addClass(this.modal.nativeElement, 'md-show');
    this.checkout();
  }
  closeModal() {
    this.renderer.removeClass(this.modal.nativeElement, 'md-show');
  }
  checkout() {
    let oldCarrito = this.servicePlato.checkoutPlato;
    let newCarrito = oldCarrito.slice();
    let carrito = newCarrito.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    for (const key in oldCarrito) {
      if (oldCarrito.hasOwnProperty(key)) {
        const element = oldCarrito[key];
      }
    }
    // console.log(carrito);
    // console.log('old carrito', oldCarrito);
    // console.log('car', car);
  }
}
