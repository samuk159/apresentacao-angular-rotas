import { ProdutoService } from './../../../services/produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto;

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
  }

}
