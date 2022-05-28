app.controller("PerfilController", function ($scope, $http, $routeParams) {
     let id = $routeParams.id;
     $scope.user = {};
     $scope.dadosAtualizados = false;

     if (id) {
          $http.get('/user/' + id)
               .then((res) => {
                    $scope.dados = res.data;
                    $scope.user.nome = $scope.dados.nome;
                    $scope.user.usuario = $scope.dados.usuario;
                    $scope.user.email = $scope.dados.email;
                    $scope.user.telefone = $scope.dados.telefone;
               })
     }

     $scope.senhasDiferentes = false;
     $scope.atualizarDados = () => {
          if ($scope.user.senha1 != $scope.user.senha2) {
               $scope.senhasDiferentes = true;
               return;
          }
          $scope.senhasDiferentes = false;

          let data = {
               nome: $scope.user.nome,
               usuario: $scope.user.usuario,
               senha: $scope.user.senha,
               email: $scope.user.email,
               telefone: $scope.user.telefone
          };

          $http.patch('/user/' + id, data)
               .then((res) => {
                    $scope.dadosAtualizados = true;
               })
     }
})