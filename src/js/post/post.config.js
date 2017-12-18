function PostConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.post', {
    url: '/post/:id',
    controller: 'PostCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'post/post.html',
    title: 'Post',
    resolve: {
      post: function(Posts, $state, $stateParams) {
        return Posts.get($stateParams.id).then(
          (post) => post,
          (err) => console.log(err),
        )
      }
    }
  });
};

export default PostConfig;
