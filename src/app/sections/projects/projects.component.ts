import { Component } from '@angular/core';

interface Project {
  nome: string;
  descricao: string;
  imagem: string;
  githubUrl: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projetos: Project[] = [
    {
      nome: 'RatingUp',
      descricao: 'Plataforma web desenvolvida para tornar o aprendizado de xadrez mais acessível, oferecendo recursos para auxiliar iniciantes no estudo e na evolução no jogo. O projeto foi desenvolvido como uma aplicação full-stack, com frontend em Angular e backend em Java/Spring.',
      imagem: 'assets/img/ratingup.png',
      githubUrl: 'https://github.com/Mateus-Rocha1/ratingup',
      tecnologias: ['Angular', 'Typescript', 'Java', 'Spring Boot', 'MinIO', 'Docker', 'PostgreSQL', 'Swagger', 'Robot Framework', 'NGINX']
    },
    
    {
      nome: 'Portfolio Pessoal',
      descricao: 'Portfólio pessoal desenvolvido em Angular, com o objetivo de reunir em um único lugar minha apresentação profissional, currículo, experiências e projetos individuais, servindo como cartão de visita para recrutadores, colegas e qualquer pessoa interessada em conhecer meu trabalho.',
      imagem: 'assets/img/portfolio.png',
      githubUrl: 'https://github.com/Mateus-Rocha1/Portifolio',
      tecnologias: ['Angular', 'Typescript', 'SCSS', 'angular-cli-ghpages ']
    }
    // adicione mais projetos aqui, seguindo o mesmo formato
  ];

  indiceAtual = 0;

  anterior() {
    this.indiceAtual = this.indiceAtual === 0
      ? this.projetos.length - 1
      : this.indiceAtual - 1;
  }

  proximo() {
    this.indiceAtual = this.indiceAtual === this.projetos.length - 1
      ? 0
      : this.indiceAtual + 1;
  }
}