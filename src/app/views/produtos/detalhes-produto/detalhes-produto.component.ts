import { ProdutoService } from './../../../services/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      if (id) {
        this.produto = this.produtoService.getProduto(id);
      }

      if (!this.produto) {
        this.router.navigate(['../../nao-encontrado'], { relativeTo: this.route });
      }
    });
  }

}
