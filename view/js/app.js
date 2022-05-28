var app = angular.module("ComicShop", ["ngRoute", "ngMaterial", "ngAria", "ngAnimate", "ngMessages"]);

app.config(function ($routeProvider) {
     $routeProvider.when("/", {
          templateUrl: "views/home.html",
          controller: "HomeController"
     })
     .when("/perfil/:id", {
          templateUrl: "views/perfil.html",
          controller: "PerfilController"
     })
     .when("/carrinho", {
          templateUrl: "views/carrinho.html",
          controller: "CarrinhoController"
     })
     .when("/login", {
          templateUrl: "views/login.html",
          controller: "LoginController"
     })
     .when("/criarconta", {
          templateUrl: "views/criarconta.html",
          controller: "CriarContaController"
     })
     .when("/catalogo", {
          templateUrl: "views/catalogo.html",
          controller: "CatalogoController"
     })
     .when("/categorias", {
          templateUrl: "views/categorias.html",
          controller: "CategoriasController"
     })
     .when("/criarproduto", {
          templateUrl: "views/criarproduto.html",
          controller: "CriarProdutoController"
     })
     .otherwise({
          templateUrl: "views/404.html",
          controller: "404Controller"
     });
});