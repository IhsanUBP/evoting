import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./input-akun/sign-in/sign-in.module').then(
        (m) => m.SignInPageModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./input-akun/sign-up/sign-up.module').then(
        (m) => m.SignUpPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
