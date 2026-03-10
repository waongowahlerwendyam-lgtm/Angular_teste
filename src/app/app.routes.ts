// import { Login } from './pages/login/login';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Listes } from './LISTES/listes/listes';
import { ListesServices } from './LISTES/listes-services/listes-services';  
import { Lectur } from './LISTES/lectur/lectur';

export const routes: Routes = [

  { path: '', 
    component: Home 
  },

  { path: 'about',
    component: About
   },

  // { path:'login',
  //   component:Login
   
  // },

  { path: 'contact', 
    component: Contact 
  },
  
  { path: 'services',
    component: Services,
    children: [
      {   path: 'ListesServices', component: ListesServices, children: [{ path: 'Lectur', component: Lectur }
      ] }
       
    ] 
  },

  { path: 'products',
    component: Products, 
    children: [
      { path: 'Listes', component: Listes }
    ]
  },

  { path: '**', redirectTo: '' }

];
