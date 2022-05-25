var app = angular.module("ComicShop", ["ngRoute", "ngMaterial", "ngAria", "ngAnimate", "ngMessages"]);

app.config(function ($routeProvider) {
     $routeProvider.when("/", {
          templateUrl: "views/home.html",
          controller: "HomeController"
     })
     .when("/perfil", {
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
     .when("/catalogo", {
          templateUrl: "views/catalogo.html",
          controller: "CatalogoController"
     })
     .when("/categorias", {
          templateUrl: "views/categorias.html",
          controller: "CategoriasController"
     })
     .when("/faleconosco", {
          templateUrl: "views/faleconosco.html",
          controller: "FaleConoscoController"
     })
     .otherwise({
          templateUrl: "views/404.html",
          controller: "404Controller"
     });
});