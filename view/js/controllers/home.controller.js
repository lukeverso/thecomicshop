app.controller("HomeController", function ($scope, $http) {
     let userID = localStorage.getItem('ID') ? localStorage.getItem('ID') : '';
     let user = localStorage.getItem('Usuário') ? localStorage.getItem('Usuário') : '';

     $scope.catalogo = () => {
          window.location = "#!/catalogo"
     }
     $scope.categorias = () => {
          window.location = "#!/categorias"
     }

     function guardarCompra(data) {
          let a;
          if (!localStorage.getItem('carrinho')) {
               a = [];
          } else {
               a = JSON.parse(localStorage.getItem('carrinho'));
          }
          a.push(data);
          localStorage.setItem('carrinho', JSON.stringify(a));
     }

     $http.get('/product/')
          .then((res) => {
               let response = res.data;
               let minhasVendas = [];
               for (i = 0; i < response.length; i++) {
                    if (response[i].id_vendedor != userID) {
                         minhasVendas.push(response[i]);
                    }
               }
               $scope.produtos = minhasVendas;
          })

     $scope.comprar = (id) => {
          if (!userID) {
               alert('É preciso estar logado para comprar o produto.')
               window.location = '#!/login';
          } else {
               guardarCompra(id);
               window.location = '#!/carrinho';
          }
     }
})