import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { URL_USUARIO_IMAGEN } from 'src/app/config/config';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public urlImagen:string = URL_USUARIO_IMAGEN;
  public isExpanded:boolean = false;
  constructor(public serviceLogin: LoginService) { }
  ngOnInit() {
    this.scroll();
    this.scrollPage();
  }
  scroll() {
    $(document).ready(function () {
      $(window).bind('scroll', function() {
        let navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
      });
    });
  }
  scrollPage() {
    $(document).ready(function() {
      $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });
    });
  }
}
