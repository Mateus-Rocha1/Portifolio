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
      descricao: 'Plataforma web criada com o propósito de reduzir a lacuna no aprendizado de xadrez na população brasileira, tornando o ensino do jogo mais acessível, moderno e envolvente.',
      imagem: 'assets/img/projects/ratingup.png',
      githubUrl: 'https://github.com/SEU-USUARIO/ratingup',
      tecnologias: ['Angular', 'Typescript', 'Java', 'Spring', 'MinIO', 'Docker', 'PostgreSQL', 'Swagger', 'RobotFramework', 'NGINX']
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