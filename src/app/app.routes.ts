import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { ListarAlertas } from "./pages/listar-alertas/listar-alertas";
import { CadastroAlertas } from "./componentes/cadastro-alertas/cadastro-alertas";

export const routes: Routes = [
  // Rota para a Página Inicial
  {
    path: 'home',
    // 2. Uso da propriedade 'component'
    component: Home 
  },
  
  // Rota para a Lista de Denúncias
  {
    path: 'denuncias',
    component: ListarAlertas
  },
  
  // Rota para o Formulário de Cadastro
  {
    path: 'cadastro',
    component: CadastroAlertas
  },

  // ---------------------------------------------
  // ROTAS AUXILIARES
  // ---------------------------------------------

  // Rota Padrão: Redireciona a URL base (/) para /home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  // Rota Curinga: Redireciona para /home
  {
    path: '**',
    redirectTo: 'home'
  }
];
