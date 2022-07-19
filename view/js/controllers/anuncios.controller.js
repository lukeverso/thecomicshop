app.controller("AnunciosController", function ($scope, $http) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';

     $scope.criarProduto = () => {
          window.location = '#!/criarproduto';
     }

     $http.get('/product/')
          .then((res) => {
               let response = res.data;
               let minhasVendas = [];
               for (i = 0; i < response.length; i++) {
                    if (response[i].id_vendedor == userID) {
                         minhasVendas.push(response[i]);
                    }
               }
               $scope.produtos = minhasVendas;
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