import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: "1",
    conteudo: "Aprenendo angular",
    autoria: "dev",
    modelo: "modelo1"
  }

  criarPensamento() {
    alert("Novo pensamento")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
