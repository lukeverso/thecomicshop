app.controller("CriarProdutoController", function ($scope, $http) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';

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

     $scope.voltar = () => {
          window.location = '#!/meusanuncios'
     }
})