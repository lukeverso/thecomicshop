app.controller("CriarContaController", function ($scope, $http) {
     $scope.criarConta = () => {
          // Primeiro conferir os dados
          if (!$scope.nome && !$scope.usuario && !$scope.senha1 && !$scope.senha2 && !$scope.email && !$scope.telefone) {
               alert("Preencha os campos.");
               return;
          }
          if (!$scope.nome) {
               alert("Insira seu nome.");
               return;
          };
          if (!$scope.usuario) {
               alert("Insira seu nome de usuário.");
               return;
          };
          if (!$scope.senha1) {
               alert("Insira sua senha.");
               return;
          };
          if (!$scope.senha2) {
               alert("Repita sua senha.");
               return;
          };
          if ($scope.senha1 != $scope.senha2) {
               alert("As senhas digitadas precisam ser iguais.");
               return;
          };
          if (!$scope.email) {
               alert("Insira seu e-mail.");
               return;
          };
          if (!$scope.telefone) {
               alert("Insira seu telefone.");
               return;
          };
          // Se tudo estiver certo, enviar objeto para o banco...
          let usuario = {
               nome: $scope.nome,
               usuario: $scope.usuario,
               senha: $scope.senha1,
               email: $scope.email,
               telefone: $scope.telefone
          };
          $http.post('/user', usuario)
               .then(() => {
                    alert("Sua conta foi criada com sucesso!");
                    window.location = "#!/login";
               })
               .catch((error) => {
                    console.log(error)
               });
     }
})