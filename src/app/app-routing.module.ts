import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { animation: 'Homepage' }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { animation: 'Userpage' }
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
    data: { animation: 'Postpage' }
  },
  {
    path: 'animations',
    loadChildren: () => import('./reusable-animations/reusable-animations.module').then(m => m.ReusableAnimationsModule)
  },
  {
    path: 'multi-feature',
    loadChildren: () => import('./multi-feature/multi-feature.module').then(m => m.MultiFeatureModule),
    data: { animation: 'Multipage' }
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
