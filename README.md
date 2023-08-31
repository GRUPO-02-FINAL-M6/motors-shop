#
<!-- Visão geral do projeto: Descreva a finalidade e o escopo do projeto, seus objetivos e a arquitetura geral. Inclua informações sobre as tecnologias utilizadas e as dependências principais. -->
O Projeto Full Stack Motors Shop, é  um site de anúncios de carros, com o objetivo de anunciar carros a venda. O usuário ao cadastrar, terá a opção da conta ser do tipo cliente ou anunciante; caso seja anunciante, alguns detalhes do site irão diferenciar do cliente, como por exemplo, a página do anunciante, a qual conterá os carros que o usuário colocou a venda. No menu embutido do header terá a opção de redirecionar para a página de anúncios também. O anunciante poderá realizar o crud, criar cards de anuncio, editar as informações, deletar, e ter os cards de amostra para os clientes visualizarem. 

Na página home, independente do usuário estar ou não logado, poderá visualizar os veículos disponíveis a venda. Há um filtro avaliando a marca, modelo, cor, ano, combustível,preço e km. Há também um botão para limpar a pesquisa feita.

Na página de anunciante, conterá informações do anunciante  num card sobreposto na página, onde haverá as iniciais do anunciador, diferente da conta que é tipo cliente, terá um botão para criar anuncio, o qual conterá um modal de criar anuncio ao ser clicado. Nos cards desta página, haverá também dois botões: editar e ver detalhes. No primeiro botão terá um modal para editar o anúncio clicado, ainda no mesmo modal de editar, no final do mesmo, terá o botão para excluir anúncio o qual ao ser clicado irá aparecer outro modal para confirmar a exclusão do anúncio. No segundo botão de ver detalhes, o usuário será direcionado para a página com mais detalhes do veículo; nela, será possível o usuário opinar, comentar sobre o veículo selecionado. Assim como também poderá ter uma visualização melhor do automóvel, informações, descrições e a opções de ver todos os anuncios do anunciante.

As tecnologias utilizadas  foram JavaScript, React. As bibliotecas foram hookform/resolvers para validar os registros feitos através dos formulários nas páginas de cadastro, login e nos modais. Styled-component para a estilização dos componentes. Axios para a funcionalidade/integração da api,react-dom, react-icons para os icones utilizados como o x de fechar modal. O react-router-dom para proteção das rotas criadas das páginas. O react-toastify para sinalizar quando alguma requisição e solicitada como criar, deletar ou atualizar. O zod para validação do schema no formulário.


<!-- Instalação e configuração: Forneça instruções claras sobre como configurar e executar o projeto em um novo ambiente de desenvolvimento. Inclua requisitos de sistema, comandos para instalar dependências e quaisquer configurações adicionais necessárias. -->
 Para executar este projeto é importante que o usuário disponha de uma máquina a qual contenha uma ide, como por exemplo o visual studio code. No terminal instale o comando npm i, e posteriormente rode o npm run dev.

<!-- Componentes: Documente os componentes reutilizáveis do seu projeto, fornecendo uma descrição clara de sua funcionalidade, propriedades (props) aceitas e exemplos de uso. Inclua também informações sobre qualquer estado interno mantido pelo componente. -->
Os componentes reutilizados neste projeto foram header e footers nas páginas, no header na página home quando o usuário não estava logado, aparece como opção os botões de logar e cadastrar. Após logado, aparecerá um ícone com as iniciais do nome e sobrenome que ao ser clicado irá aparecer as opções  de editar perfil, editar endereço e sair. Para os modais foram criados estados para abrir e fechar quando clicados. O carrosel de imagens foi utilizado tanto na home quanto na página onde o veículo é apresentado isoladamente, buttons foi criado um componente e para utiliza-lo em diferentes partes do código bastou apenas estiliza-lo por meio e props do componente button. Os cards foram renderizados tanto na página home quanto na página do anunciante.

<!-- Estilos e temas: Se o seu projeto possui estilos e temas personalizados, documente as convenções de nomenclatura, estrutura do arquivo de estilos, classes ou estilos específicos e como aplicá-los aos componentes. -->

As convenções acordadas pelo grupo foram as variaveis em inglês, criamos um arquivo globalStyled no qual registramos a estilização sugerida pelo figma. Utilizamos a biblioteca styled-component para estilizar; no component button foram passadas props como tipo, class e o click.
<!-- Ferramentas: Descreva os frameworks/libs utilizados no projeto
Exemplos e tutoriais: Se possível, forneça exemplos de uso e tutoriais que demonstrem a utilização de recursos importantes do projeto, como a criação de novos componentes, a integração de APIs ou a implementação de funcionalidades específicas. -->