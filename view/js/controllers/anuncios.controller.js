app.controller("AnunciosController", function ($scope, $http) {
     $scope.criarProduto = () => {
          window.location = '#!/criarproduto';
     }

     $http.get('/product/')
          .then((res) => {
               $scope.produtos = res.data
          })

     $scope.editar = (id) => {
          console.log(id)
     }

     $scope.excluir = (id) => {
          $http.delete('/product/' + id)
               .then(() => {
                    window.location.reload();
               })
     }
})