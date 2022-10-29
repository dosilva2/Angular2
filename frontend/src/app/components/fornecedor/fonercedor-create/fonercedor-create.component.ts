import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../../fornecedor.service';
import { Fornecedor } from '../../product/fornecedor.model';

@Component({
  selector: 'app-fonercedor-create',
  templateUrl: './fonercedor-create.component.html',
  styleUrls: ['./fonercedor-create.component.css']
})
export class FonercedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    nome: '',
    endereco: '',
    numero: 0,
    bairro: '',
    cep: 0
  }

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  }

  createFornecedor(): void {
    this.fornecedorService.createFor(this.fornecedor).subscribe(() =>{
    this.fornecedorService.showMessage('Fornecedor cadastrado com sucesso')
    this.router.navigate(['/fornecedor'])
    })    
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }

}
