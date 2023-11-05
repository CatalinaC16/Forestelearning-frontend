import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from "../../assets/dataForApp/nav-data";
import {SideNavToggle} from "../../assets/interfaces/SideNavToggle";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations:[
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)',offset:'0'}),
            style({transform: 'rotate(2turn)',offset:'1'})
          ]))
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<SideNavToggle>= new EventEmitter();
  collapsed = false;
  screenWidth=0;
  navData = navbarData;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  closeSideNav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  openSideNav(){
    this.collapsed = true;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }
}
