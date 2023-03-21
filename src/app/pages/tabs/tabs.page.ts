import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectTab!:any;
  @ViewChild('tabs') tabs!:IonTabs; 
  // importante estudiar a fondo el ViewChild

  constructor(private route: Router) { }
  crearFood() {
    this.route.navigate(['/products']);
  }
  categoria() {

    this.route.navigate(['/add-categoria']);
  }

  setCurrentTab(event:any){
    this.selectTab = this.tabs.getSelected()
  }

}
