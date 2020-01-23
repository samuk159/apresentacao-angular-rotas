import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosComponent,
    children: [
      {
        path: 'novo',
        component: NovoProdutoComponent
      },
      {
        path: 'detalhes/:id',
        component: DetalhesProdutoComponent
      },
      {
        path: 'nao-encontrado',
        component: ProdutoNaoEncontradoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
