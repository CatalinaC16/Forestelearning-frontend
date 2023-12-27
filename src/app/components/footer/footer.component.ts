import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getFooterClass() {
    let cls = '';
    if(this.collapsed && this.screenWidth>768){
      cls = 'footer-trimmed';
    }
    else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0 )
    {
      cls ='footer-screen';
    }
    return cls;
  }

}
