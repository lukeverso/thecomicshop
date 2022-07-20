app.controller("HeaderController", function ($scope) {
     $scope.home = () => {
          window.location = "#!/"
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
     $scope.editarPerfil = () => {
          let id = localStorage.getItem('ID');
          window.location = "#!/perfil/" + id;
     }
     $scope.meusAnuncios = () => {
          window.location = "#!/meusanuncios"
     }
     $scope.minhasCompras = () => {
          window.location = "#!/minhascompras"
     }
     $scope.user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';
     $scope.logout = () => {
          localStorage.removeItem('Usuário');
          localStorage.removeItem('ID');
          localStorage.removeItem('carrinho');
          window.location = '#!/';
          window.location.reload(true);
     }
})