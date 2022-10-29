import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../product/fornecedor.model';
import { FornecedorService } from '../../fornecedor.service';

@Component({
  selector: 'app-fonercedor-read',
  templateUrl: './fonercedor-read.component.html',
  styleUrls: ['./fonercedor-read.component.css']
})
export class FonercedorReadComponent implements OnInit {
  
  fornecedor: Fornecedor[] = [];
  displayedColumns = ['nome','endereco', 'numero', 'bairro', 'cep']

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.readFor().subscribe(fornecedor =>{
      this.fornecedor = fornecedor
    })
  }

}
