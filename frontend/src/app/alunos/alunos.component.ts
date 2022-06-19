import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public modalRef?: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = "Alunos";
  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1, nome: "Vitor", sobrenome: "Colazelli", telefone: 976619190 },
    { id: 2, nome: "Maria", sobrenome: "Gonçalves", telefone: 976619190 },
    { id: 3, nome: "José", sobrenome: "Pereira", telefone: 976619190 },
    { id: 4, nome: "João", sobrenome: "Sousa", telefone: 976619190 },
    { id: 5, nome: "Vinicius", sobrenome: "Silva", telefone: 976619190 },
    { id: 6, nome: "Paula", sobrenome: "Braga", telefone: 976619190 }
  ];

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){

  }

  alunoSelected(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }
}