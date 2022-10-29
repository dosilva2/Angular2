import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../../fornecedor.service';
import { Fornecedor } from '../../product/fornecedor.model';

@Component({
  selector: 'app-fonercedor-update',
  templateUrl: './fonercedor-update.component.html',
  styleUrls: ['./fonercedor-update.component.css']
})
export class FonercedorUpdateComponent implements OnInit {
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

}
