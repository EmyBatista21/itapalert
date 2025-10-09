import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { ListarAlertas } from "./pages/listar-alertas/listar-alertas";
import { CadastroAlertas } from "./componentes/cadastro-alertas/cadastro-alertas";
import { LoginComponent } from "./pages/login/login/login";
import { AuthGuard } from "./guards/auth.guard/auth.guard";
import { Cadastro } from "./pages/cadastro/cadastro";
import { Sobre } from "./pages/sobre/sobre";
import { ManageAlertsComponent } from "./pages/manage-alerts/manage-alerts";
import { MapComponent } from "./componentes/map-component/map-component";

export const routes: Routes = [
  // Página de Login
  { path: 'login', component: LoginComponent },

  { path: 'cadastro', component: Cadastro },
  // Página Inicial protegida
  {
    path: 'home',
    component: Home,
    canActivate: [AuthGuard]   // só entra logado
  },

  // Lista de Denúncias (protegida)
  {
    path: 'denuncias',
    component: ListarAlertas,
    canActivate: [AuthGuard]
  },

  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'atualizar',
    component: ManageAlertsComponent,
    canActivate: [AuthGuard]
  },

  // Cadastro de Denúncias (protegida)
  {
    path: 'cadastroAlertas',
    component: CadastroAlertas,
    canActivate: [AuthGuard]
  },

  {
    path: 'sobre',
    component: Sobre,
  },

  // Rota padrão -> redireciona para login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Rota curinga (sempre por último)
  {
    path: '**',
    redirectTo: 'login'
  }
];
