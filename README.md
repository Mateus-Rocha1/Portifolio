# Portfólio Pessoal

Portfólio pessoal desenvolvido em Angular, com o objetivo de reunir em um único lugar minha apresentação profissional, currículo, experiências e projetos individuais, servindo como cartão de visita para recrutadores, colegas e qualquer pessoa interessada em conhecer meu trabalho.

🔗 **Acesse online:** [mateus-rocha1.github.io/Portifolio](https://mateus-rocha1.github.io/Portifolio/)

---

## 🛠️ Tecnologias utilizadas

- **[Angular](https://angular.io/)** — framework principal da aplicação
- **TypeScript** — linguagem de desenvolvimento
- **SCSS** — estilização com variáveis de tema (paleta de cores centralizada)
- **[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)** — automação de deploy para o GitHub Pages
- **GitHub Pages** — hospedagem estática do site

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── navbar/                  # Barra de navegação fixa com links por âncora
│   ├── sections/
│   │   ├── hero/                # Seção Início (foto, nome, cargo, redes sociais)
│   │   ├── about/                # Seção Sobre mim
│   │   ├── resume/                # Seção Currículo (download PT/EN)
│   │   ├── experience/          # Seção Experiências (lista dinâmica via *ngFor)
│   │   └── projects/             # Seção Projetos (carrossel de cards)
│   ├── app.component.html       # Composição das seções na página única
│   └── app.module.ts
├── assets/
│   ├── img/                      # Fotos e imagens de capa dos projetos
│   └── docs/                     # Currículos em PDF (PT/EN)
└── styles.scss                    # Variáveis globais de tema e estilos base
```

Cada seção corresponde a um componente Angular independente, o que facilita manutenção e evolução isolada de cada parte do site.

---

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) e [Angular CLI](https://angular.io/cli) instalados.

```bash
# clone o repositório
git clone https://github.com/mateus-rocha1/Portifolio.git
cd Portifolio

# instale as dependências
npm install

# rode o servidor de desenvolvimento
ng serve
```

Depois disso, acesse `http://localhost:4200` no navegador. A aplicação recarrega automaticamente a cada alteração salva nos arquivos.

---

## 📦 Como fazer o deploy

O deploy é feito para o GitHub Pages através do `angular-cli-ghpages`, que builda o projeto em modo produção e publica o resultado na branch `gh-pages`.

```bash
ng build --configuration production --base-href=/Portifolio/
npx angular-cli-ghpages --dir=dist/portfolio
```

Ou, de forma simplificada, usando o script configurado no `package.json`:

```bash
npm run deploy
```

Após alguns minutos, as alterações ficam disponíveis em [mateus-rocha1.github.io/Portifolio](https://mateus-rocha1.github.io/Portifolio/).

---

## 📄 Seções do site

1. **Início** — foto de perfil, nome, cargo e ícones de redes sociais (GitHub, LinkedIn, Instagram, e-mail).
2. **Sobre mim** — apresentação pessoal e profissional, formação, experiências e stack técnica.
3. **Currículo** — botões de download do currículo em português e inglês.
4. **Experiências** — histórico profissional e acadêmico, listado dinamicamente a partir de um array de dados.
5. **Projetos** — carrossel de projetos individuais, com descrição, imagem de capa, badges de tecnologias e link para o repositório no GitHub.

---

## 👤 Autor

**Mateus Pinheiro da Rocha**
[GitHub](https://github.com/mateus-rocha1) · [LinkedIn](https://www.linkedin.com/in/mateus-pinheiro-da-rocha-5937a437b)