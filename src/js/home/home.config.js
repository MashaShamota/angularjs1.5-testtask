function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      list: function(Posts) {
        return Posts.getFeatured().then(
          (list) => list,
          (err) => console.log(err),
        )
      },
      category: function(){
          return;
      }
    }
    
  });

  $stateProvider
  .state('app.category', {
    url: '/category/:id',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Category',
   resolve: {
      list: function(Posts, $stateParams) {
        return Posts.getCategoryPosts($stateParams.id).then(
          (list) => list,
          (err) => console.log(err),
        )
      },
      category: function(Categories, $stateParams) {
        return Categories.get($stateParams.id).then(
          (category) => category,
          (err) => console.log(err),
        )
      }
    }
  });

};

export default HomeConfig;
