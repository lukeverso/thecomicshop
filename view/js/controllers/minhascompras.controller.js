app.controller("MinhasComprasController", function ($scope, $http) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';

     $http.get('/product/')
          .then((res) => {
               let meusPedidos = [];
               for (i = 0; i < res.data.length; i++) {
                    if (res.data[i].vendido == true) {
                         meusPedidos.push(res.data[i])
                    }
               }
               $scope.pedidos = meusPedidos;
          })
          .catch((error) => {
               console.log(error)
          });
})