import { Component, OnInit } from '@angular/core';
import { FavoriteServicesService } from '../../services/favoriteServices/favorite-services.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private fs: FavoriteServicesService,
  ) { }

  get favoritos() {
    return this.fs.localCards
  }
  ngOnInit() {
  }
}
