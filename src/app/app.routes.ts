import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario/formulario';
import { Notfound } from './page/notfound/notfound';

export const routes: Routes = [

    {path: "registro", component: Formulario},
    {path:"", pathMatch: 'full', redirectTo: "registro"},
    {path: "**", component: Notfound}

];
