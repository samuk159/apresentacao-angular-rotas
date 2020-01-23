import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';

@NgModule({
  declarations: [
    ListaProdutosComponent, 
    NovoProdutoComponent, 
    DetalhesProdutoComponent, 
    ProdutoNaoEncontradoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
