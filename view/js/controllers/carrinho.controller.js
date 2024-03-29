app.controller("CarrinhoController", function ($scope, $http) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';
     let carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];

     $scope.clear = () => {
          localStorage.removeItem('carrinho');
          window.location.reload();
     }

     $http.get('/product/')
          .then((res) => {
               let meusPedidos = [];
               for (i = 0; i < res.data.length; i++) {
                    for (k = 0; k < carrinho.length; k++) {
                         if (carrinho[k] == res.data[i]._id) {
                              meusPedidos.push(res.data[i])
                              console.log(meusPedidos)
                         }
                    }
               }
               $scope.pedidos = meusPedidos;
          })
          .catch((error) => {
               console.log(error)
          });

     $scope.finish = () => {
          let data = {
               comprador: userID
          }
          for (i = 0; i < carrinho.length; i++) {
               let id = carrinho[i];
               $http.put('/product/sold/' + id, data)
                    .then((res) => {
                         console.log(res);
                         localStorage.removeItem('carrinho');
                         window.location = '#!/minhascompras'
                    })
                    .catch((error) => {
                         console.log(error)
                    });
          }
     }
})