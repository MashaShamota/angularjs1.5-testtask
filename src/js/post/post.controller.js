class PostCtrl {
  constructor(post, $sce, $rootScope) {
    'ngInject';

    this.post = post;
    $rootScope.setPageTitle(this.post.title);
    this.post.body = $sce.trustAsHtml(this.post.description);
  }

}

export default PostCtrl;
