import { ProdutosRoutingModule } from './produtos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { ProdutoService } from '../../services/produto/produto.service';

@NgModule({
  declarations: [
    ListaProdutosComponent, 
    DetalhesProdutoComponent, 
    ProdutoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutosModule { }
