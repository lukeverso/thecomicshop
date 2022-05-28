app.controller("LoginController", function ($scope, $http) {
     $scope.login = () => {
          // Primeiro conferir os dados
          $scope.nadaPreenchido = false;
          $scope.senhaPreenchida = false;
          $scope.usuarioPreenchido = false;
          $scope.senhaIncorreta = false;
          
          // Depois, conferir com o banco...
          $http.get('/user')
               .then((res) => {
                    if (!$scope.usuario && !$scope.senha) {
                         $scope.nadaPreenchido = true;
                         return;
                    };
                    if (!$scope.usuario) {
                         $scope.senhaPreenchida = true;
                         return;
                    };
                    if (!$scope.senha) {
                         $scope.usuarioPreenchido = true;
                         return;
                    };
                    $scope.nadaPreenchido = false;
                    $scope.senhaPreenchida = false;
                    $scope.usuarioPreenchido = false;
                    let dados = res.data;
                    for (i = 0; i < dados.length; i++) {
                         console.log(i)
                         if ($scope.usuario == dados[i].usuario) {
                              if ($scope.senha == dados[i].senha) {
                                   localStorage.setItem('Usuário', $scope.usuario);
                                   localStorage.setItem('ID', dados[i]._id);
                                   window.location = "#!/";
                              } else {
                                   $scope.senhaIncorreta = true;
                                   return;
                              }
                              return;
                         } else {
                              continue;
                         }
                    }
               })
               .catch((error) => {
                    console.log(error)
               });
     }
     $scope.criarConta = () => {
          window.location = "#!/criarconta";
     }
})