import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosComponent
  },
  {
    path: 'detalhes/:id',
    component: DetalhesProdutoComponent
  },
  {
    path: 'nao-encontrado',
    component: ProdutoNaoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
