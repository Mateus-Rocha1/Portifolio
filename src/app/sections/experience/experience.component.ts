import { Component } from '@angular/core';

interface Experience {
  cargo: string;
  periodo: string;
  local: string;
  descricao: string;
  historico?: { cargo: string; periodo: string }[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiencias: Experience[] = [
    {
      cargo: '',
      periodo: '',
      local: 'Laboratório de Visão Computacional e Inteligência Artificial (VICIA)',
      descricao: ''
    },

    {
      cargo: '',
      periodo: '',
      local: 'Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP)',
      descricao: '',
      historico: [
        { cargo: '', periodo: '' },
        { cargo: '', periodo: '' }
      ]
    },
    
    {
      cargo: '',
      periodo: '',
      local: '',
      descricao: ''
    }
  ];
}