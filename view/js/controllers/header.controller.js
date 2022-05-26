app.controller("HeaderController", function ($scope) {
     $scope.home = () => {
          window.location = "#!/"
     }
     $scope.catalogo = () => {
          window.location = "#!/catalogo"
     }
     $scope.categorias = () => {
          window.location = "#!/categorias"
     }
     $scope.login = () => {
          window.location = "#!/login"
     }
     $scope.carrinho = () => {
          window.location = "#!/carrinho"
     }
     $scope.user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : null;
     $scope.textoHeader = 'Bem-vindo(a), ' + $scope.user;
     $scope.logout = () => {
          localStorage.removeItem('Usuário');
          window.location.reload(true);
     }
})