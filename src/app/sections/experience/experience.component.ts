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
      cargo: 'Desenvolvedor Frontend Júnior',
      periodo: '08/25 até o momento',
      local: 'Laboratório de Visão Computacional e Inteligência Artificial (VICIA)',
      descricao: 'Desenvolvimento de projeto em parceria com o Ministério da Educação (MEC), incluindo a criação de telas, ajustes de componentes e integração com a camada de backend (APIs) para garantir o funcionamento completo da aplicação.'
    },
    {
      cargo: 'UX Designer Pleno',
      periodo: '09/25 até o momento',
      local: 'Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP)',
      descricao: 'Criação de fluxos, identidade visual e padrões; desenvolvimento de prototípos; colaboração com desenvolvedores; análise de requisitos, usabilidade e acessibilidade.',
      historico: [
        { cargo: 'UX Designer', periodo: '09/25 a 07/26' },
        { cargo: 'UX Designer Pleno', periodo: '04/26 até o momento' }
      ]
    },
    {
      cargo: 'UX Designer',
      periodo: '06/25 a 09/25',
      local: 'Núcleo de Desenvolvimento de Software',
      descricao: 'Análise de padrões; criação de fluxos; desenvolvimento de prototípos; colaboração com desenvolvedores e análise de usabilidade para melhoria contínua da interface.'
    }
  ];
}