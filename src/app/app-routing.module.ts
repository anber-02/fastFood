import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./pages/tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'add-categoria',
    loadChildren: () => import('./pages/add-categoria/add-categoria.module').then( m => m.AddCategoriaPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'admin-producto',
    loadChildren: () => import('./pages/admin-producto/admin-producto.module').then( m => m.AdminProductoPageModule)
  },
  {
    path: 'new-book',
    loadChildren: () => import('./pages/new-book/new-book.module').then( m => m.NewBookPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
