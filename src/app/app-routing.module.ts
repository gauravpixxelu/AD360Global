// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin.component';
import SuperAdminComponent from './super-admin/super-admin.component';
import ADComponent from './admin/admin.component';
import AdvertiserComponent from './advertiser/advertiser.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/super-admin',
        pathMatch: 'full'
      },
      {
        path: 'super-admin',
        component: SuperAdminComponent,
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: ADComponent,
      },
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'advertiser',
        component: AdvertiserComponent,
      },
      {
        path: 'advertiser/campaigns',
        loadComponent: () => import('./advertiser/campaigns/campaigns.component')
      },      
      {
        path: 'advertiser/new-campaigns',
        loadComponent: () => import('./advertiser/new-campaigns/new-campaigns.component')
      },
      {
        path: 'advertiser/campaigns/new-insertion-order',
        loadComponent: () => import('./advertiser/campaigns/new-insertion-order/new-insertion-order.component')
      },
      {
        path: 'advertiser/campaigns/select-line-items',
        loadComponent: () => import('./advertiser/campaigns/select-line-items/select-line-items.component')
      },
      {
        path: 'advertiser/campaigns/select-line-items/new-line-items',
        loadComponent: () => import('./advertiser/campaigns/select-line-items/new-line-items/new-line-items.component')
      },
      {
        path: 'advertiser/creatives',
        loadComponent: () => import('./advertiser/creatives/creatives.component')
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
