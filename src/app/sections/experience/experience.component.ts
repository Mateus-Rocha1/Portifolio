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
      descricao: 'Desenvolvimento de uma plataforma SaaS para ensino de línguas estrangeiras, utilizando Spring Boot, Angular, Docker e serviços AWS como Cognito e S3.Atuação inicial no backend e posterior expansão para desenvolvimento full-stack, incluindo funcionalidades de internacionalização e integração com serviços AWS.',
      historico: [
        { cargo: 'Desenvolvedor Backend', periodo: 'Março 2026 - Julho 2026' },
        { cargo: 'Desenvolvedor Full-stack', periodo: 'Julho 2026 - atual' }
      ]
    },

    {
      cargo: 'Desenvolvedor Full-stack',
      periodo: 'Agosto 2026 - atual',
      local: 'Núcleo de Desenvolvimento de Software (NDS) - IFCE',
      descricao: 'Desenvolvimento full-stack de uma nova versão do sistema interno do campus, utilizando .NET no backend e Angular no frontend, com participação em práticas de code review, CI/CD e qualidade de software.'
    },

    {
      cargo: 'Desenvolvedor Backend',
      periodo: 'Agosto 2026 - atual',
      local: 'Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP) - IFCE',
      descricao: 'Desenvolvimento backend de um SaaS para gerenciamento de imóveis utilizando Java/Spring Boot, com arquitetura de microsserviços, Docker e pipelines CI/CD com GitHub Actions.'
    }
  ];
}