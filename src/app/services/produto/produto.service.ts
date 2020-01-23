import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos() {
    return [
      { id: 1, nome: 'Camisa Polo', preço: 80 },
      { id: 2, nome: 'Calça Jeans', preço: 100 },
      { id: 3, nome: 'Calça Sarja', preço: 120 },
      { id: 4, nome: 'Tênis Nike', preço: 200 },
      { id: 5, nome: 'Tênis Olympikus', preço: 80 },
    ];
  }

  getProduto(id: number) {
    return this.getProdutos().find(p => p.id === id);
  }

}
