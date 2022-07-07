app.controller("CriarProdutoController", function ($scope) {
     $scope.estados = ['Novo', 'Usado'];
     $scope.categorias = ['Marvel', 'DC', 'Vertigo', 'Image', 'Bonelli', 'Disney', 'Turma da Mônica', 'Importado', 'Outros'];
     $scope.formatos = ['Mensal', 'Encadernado', 'Capa dura', 'Omnibus'];
     
     $scope.criarProduto = () => {
          // // Primeiro conferir os dados
          // if (!$scope.nomeProduto && !$scope.descricaoProduto && !$scope.estadoProduto && !$scope.precoProduto && !$scope.categoriaProduto && !$scope.formatoProduto && !$scope.anoProduto && !$scope.fotoProduto) {
          //      alert("Preencha os campos.");
          //      return;
          // }
          // if (!$scope.nomeProduto) {
          //      alert("Insira seu nome.");
          //      return;
          // };
          // if (!$scope.descricaoProduto) {
          //      alert("Insira seu nome de usuário.");
          //      return;
          // };
          // if (!$scope.estadoProduto) {
          //      alert("Insira sua senha.");
          //      return;
          // };
          // if (!$scope.precoProduto) {
          //      alert("Repita sua senha.");
          //      return;
          // };
          // if (!$scope.categoriaProduto) {
          //      alert("Insira seu e-mail.");
          //      return;
          // };
          // if (!$scope.formatoProduto) {
          //      alert("Insira seu telefone.");
          //      return;
          // };
          // if (!$scope.anoProduto) {
          //      alert("Insira seu telefone.");
          //      return;
          // };
          // if (!$scope.fotoProduto) {
          //      alert("Insira seu telefone.");
          //      return;
          // };
          // Se tudo estiver certo, enviar objeto para o banco...
          let produto = {
               nome: $scope.nomeProduto,
               descricao: $scope.descricaoProduto,
               estado: $scope.estadoProduto,
               preco: $scope.precoProduto,
               categoria: $scope.categoriaProduto,
               formato: $scope.formatoProduto,
               ano: $scope.anoProduto,
               foto: $scope.fotoProduto
          };
          console.log(produto)
          // $http.post('/user', usuario)
          //      .then(() => {
          //           alert("Sua conta foi criada com sucesso!");
          //           window.location = "#!/login";
          //      })
          //      .catch((error) => {
          //           console.log(error)
          //      });
     }
})