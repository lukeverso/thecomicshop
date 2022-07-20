app.controller("CriarProdutoController", function ($scope, $http, $routeParams) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';

     $scope.editaveis = {};
     let idProduto = $routeParams.id;
     if (idProduto) {
          $http.get('/product/' + idProduto)
               .then((res) => {
                    $scope.editaveis.nome = res.data.nome;
                    $scope.editaveis.descricao = res.data.descricao;
                    $scope.editaveis.valor = res.data.valor;
               })
               .catch((error) => {
                    console.log(error)
               })
     }

     $scope.criarProduto = () => {
          if (!$scope.nomeProduto || !$scope.descricaoProduto || !$scope.precoProduto) {
               alert("Preencha os campos.");
               return;
          }
          if (!$scope.nomeProduto) {
               alert("Insira o nome do produto.");
               return;
          }
          if (!$scope.descricaoProduto) {
               alert("Insira a descrição do produto.");
               return;
          }
          if (!$scope.precoProduto) {
               alert("Insira o preço do produto.");
               return;
          }
          // Se tudo estiver certo, enviar objeto para o banco...
          if (idProduto) {
               let produto = {
                    nome: $scope.nomeProduto,
                    descricao: $scope.descricaoProduto,
                    valor: $scope.precoProduto,
               };
               $http.put('/product/' + idProduto, produto)
                    .then(() => {
                         alert("Produto alterado com sucesso.");
                         window.location = "#!/meusanuncios";
                    })
                    .catch((error) => {
                         console.log(error)
                    })
          } else {
               let produto = {
                    nome: $scope.nomeProduto,
                    descricao: $scope.descricaoProduto,
                    valor: $scope.precoProduto,
                    id_vendedor: userID,
                    vendedor: user
               };
               $http.post('/product/', produto)
                    .then(() => {
                         alert("Seu produto foi criado com sucesso!");
                         window.location = "#!/meusanuncios";
                    })
                    .catch((error) => {
                         console.log(error)
                    })
          }
     }

     $scope.voltar = () => {
          window.location = '#!/meusanuncios'
     }
})