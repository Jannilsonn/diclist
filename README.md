O projeto diclist tem como objetivo armazenar palavras no dicionário pessoal do usuário, lista simples e anotações.

Obs: Não foi criado um CRUD, apenas uma demonstração com dados salvos no próprio documento.

Estrutura

- O componente Header contém o Guide que por sua vez tem as opções de navegação;

    - Recentes(History): Pesquisas recentes

    - Dicionário(DicUser): Palavras para formação de um dicionário pessoal

    - Lista(List): Listas simples

    - Nota(Note): Anotações básicas

- Section Apresenta o conteúdo da página;

    - Ao clicar em uma das opções do Guide, você é redirecionado para sua página onde é exibido uma lista dos itens salvos.

    - Escolhendo um item abrirá sua página onde consta as informações referente ao selecionado.



Consulta a API

Para pegar os dados dos itens é feita uma requisição na pasta “api”.

Ex: /dic/equidade >> /api/dic/equidade

retorna um json com os dados relevantes da requisição.

Na API pode ser feita a consultas em outras APIs ou Banco de dados. No caso foi criado apenas um array de objetos para exemplo. 