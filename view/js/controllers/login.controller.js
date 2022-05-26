app.controller("LoginController", function ($scope, $http) {
     $scope.login = () => {
          // Primeiro conferir os dados
          if (!$scope.usuario || !$scope.senha) {
               alert("Preencha os campos.");
               return;
          };
          // Depois, conferir com o banco...
          $http.get('/user')
               .then((res) => {
                    let dados = res.data;
                    for (i = 0; i < dados.length; i++) {
                         if ($scope.usuario == dados[i].usuario) {
                              if ($scope.senha == dados[i].senha) {
                                   localStorage.setItem('Usuário', $scope.usuario);
                                   window.location = "#!/";
                              } else {
                                   alert("Sua senha incorreta.")
                                   return;
                              }
                              return;
                         } else {
                              alert("Usuário incorreto.")
                              return;
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