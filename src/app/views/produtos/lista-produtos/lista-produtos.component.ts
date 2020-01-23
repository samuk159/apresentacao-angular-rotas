import { ProdutoService } from './../../../services/produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos = [];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }

}
