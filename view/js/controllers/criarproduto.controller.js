app.controller("CriarProdutoController", function ($scope, $http) {
     $scope.criarProduto = () => {
          // Se tudo estiver certo, enviar objeto para o banco...
          let produto = {
               nome: $scope.nomeProduto,
               descricao: $scope.descricaoProduto,
               valor: $scope.precoProduto,
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