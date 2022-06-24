:rocket: Technologies

- Graph CMS (Content Management System)
- Vite
- ReactJS
- Typescript


Headless CMS(GraphCMS): Painel de admin. (dados fornecidos atraves de uma API rest ou gql).

Wordpress não é headless pq traz tanto a parte de admin incluindo backend e frontend (temas, plugins, etc).

ai a vantagem é o ganho de flexibilidade. 

Query: Selecionar ou resgatar dados.
Mutations: Criar, deletar ou alterar dados.


overfetching: qnd o backend retorna muitos dados alem do que o frontend precisa.
underfetching: qnd o backend retorna apenas o que o frontend precisa. Porém com restAPI isso não acontece por que temos que especificar o id do professor ou da aula. E ai que gql se destaca. nos possibilitando fazer com que o front end diga ao back end o que iremos precisar exatamente de qual instancia.

Dicas:

- Criar as variantes dos botões e componentizalas.