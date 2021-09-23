import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-3d',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class Menu3DComponent implements OnInit {
  @ViewChild('open') open!: ElementRef;
  constructor(public rendered: Renderer2, public el: ElementRef) { }

  ngOnInit() {
  }
  openMenu() {
    this.rendered.addClass(this.open.nativeElement, 'rm-open');
  }
  closeMenu() {
    this.rendered.removeClass(this.open.nativeElement, 'rm-open');
    // this.rendered.removeClass(this.open.nativeElement, 'rm-nodelay');
    this.rendered.removeClass(this.open.nativeElement, 'rm-in');
  }
  detailMenu() {
    this.rendered.addClass(this.open.nativeElement, 'rm-in');
    // this.rendered.addClass(this.open.nativeElement, 'rm-nodelay');
    console.log(this.rendered.parentNode(this.el.nativeElement));
  }
  viewDetails(ev: any) {
    // console.log(this.el.nativeElement.className);
  }

}
