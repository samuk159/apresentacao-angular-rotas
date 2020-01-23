import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos() {
    return [
      { id: 1, nome: 'Camisa Polo', preco: 80 },
      { id: 2, nome: 'Calça Jeans', preco: 100 },
      { id: 3, nome: 'Calça Sarja', preco: 120 },
      { id: 4, nome: 'Tênis Nike', preco: 200 },
      { id: 5, nome: 'Tênis Olympikus', preco: 80 },
    ];
  }

  getProduto(id: number) {
    return this.getProdutos().find(p => p.id == id);
  }

}
