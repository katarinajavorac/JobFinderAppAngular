/* import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-or-register',
    pathMatch: 'full'
  },
  {
    path: 'login-or-register',
    loadChildren: () => import('./auth/login-or-register/login-or-register.module').then(m => m.LoginOrRegisterPageModule)
  },
  // dodajte ovdje druge rute
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-or-register',
    pathMatch: 'full'
  },
 /*  {
    path: 'superheroes',
    loadChildren: () => import('./superheroes/superheroes.module').then( m => m.SuperheroesPageModule),
    canLoad: [AuthGuard]
  }, */
  /*{
    path: 'add-superhero',
    loadChildren: () => import('./add-superhero/add-superhero.module').then( m => m.AddSuperheroPageModule)
  },*/
 /*  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule),
      canLoad: [AuthGuard]
  }, */
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
      canLoad: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-or-register',
    loadChildren: () => import('./auth/login-or-register/login-or-register.module').then( m => m.LoginOrRegisterPageModule)
  },
/*   {
    path: 'mysuperheroes',
    loadChildren: () => import('./mysuperheroes/mysuperheroes.module').then( m => m.MysuperheroesPageModule),
    canLoad: [AuthGuard]
  }, */



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 