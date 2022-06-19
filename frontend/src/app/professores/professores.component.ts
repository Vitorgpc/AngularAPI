import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public modalRef?: BsModalRef;
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: "Claudio", disciplina: "Matematica" },
    { id: 2, nome: "Marcia", disciplina: "Fisica" },
    { id: 3, nome: "Carlos", disciplina: "Quimica" },
    { id: 4, nome: "Wesley", disciplina: "Historia" },
    { id: 5, nome: "Maria", disciplina: "Geografia" },
    { id: 6, nome: "Renan", disciplina: "Portugues" }
  ];

  professorSelected(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltar(){
    this.professorSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}
