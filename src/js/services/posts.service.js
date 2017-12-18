export default class Posts {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getAll() {
    return this._$http.get(this._AppConstants.postsUrl).then((res) => res.data);
  }
  
  get(id) {
    let deferred = this._$q.defer();
      this.getAll().then(
            (posts) => { 
                  let post = posts.filter(post => post.id == id);
                  deferred.resolve(post[0]);
            },
            (err) => deferred.reject(err)
      );
    
    return deferred.promise;
  }
  
  getCategoryPosts(id) {
      let deferred = this._$q.defer();
      this.getAll().then(
            (posts) => { 
                  let list = posts.filter(post => post.category_id == id && post.is_active );
                  deferred.resolve(list);
            },
            (err) => deferred.reject(err)
      );
    
    return deferred.promise;
  }
  
  getFeatured() {
      let deferred = this._$q.defer();
      this.getAll().then(
            (posts) => { 
                  let list = posts.filter(post => post.is_featured && post.is_active);
                  deferred.resolve(list);
            },
            (err) => deferred.reject(err)
      );
    
    return deferred.promise;
  }
}
