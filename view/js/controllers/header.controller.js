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
     $scope.faleConosco = () => {
          window.location = "#!/faleconosco"
     }
     $scope.login = () => {
          window.location = "#!/login"
     }
     $scope.carrinho = () => {
          window.location = "#!/carrinho"
     }
})