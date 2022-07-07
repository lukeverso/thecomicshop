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
     $scope.editarPerfil = () => {
          let id = localStorage.getItem('ID');
          window.location = "#!/perfil/" + id;
     }
     $scope.meusAnuncios = () => {
          window.location = "#!/meusanuncios"
     }
     $scope.user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : null;
     $scope.logout = () => {
          localStorage.removeItem('Usuário');
          localStorage.removeItem('ID');
          window.location = '#!/login';
          window.location.reload(true);
     }
})