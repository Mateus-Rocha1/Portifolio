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
      cargo: 'Desenvolvedor Full-stack',
      periodo: 'Março 2026 - atual',
      local: ' Laboratório de Visão Computacional e Inteligência Artificial (VICIA) - IFCE',
      descricao: 'desenvolvimento web com Spring Boot, Angular e AWS',
      historico: [
        { cargo: 'Desenvolvedor Backend', periodo: 'Março 2026 - Julho 2026' },
        { cargo: 'Desenvolvedor Full-stack', periodo: 'Julho 2026 - atual' }
      ]
    },

    {
      cargo: 'Desenvolvedor Full-stack',
      periodo: 'Agosto 2026 - atual',
      local: 'Núcleo de Desenvolvimento de Software (NDS) - IFCE',
      descricao: 'desenvolvimento web com .NET, Angular'
    },

    {
      cargo: 'Desenvolvedor Backend',
      periodo: 'Agosto 2026 - atual',
      local: 'Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP) - IFCE',
      descricao: 'desenvolvimento web com Spring Boot'
    }
  ];
}