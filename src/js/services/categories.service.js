export default class Categories {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getAll() {
    return this._$http.get(this._AppConstants.categoriesUrl).then((res) => res.data);
  }
  
  get(id) {
    let deferred = this._$q.defer();
      this.getAll().then(
            (categories) => { 
                  let category = categories.filter(category => category.id == id);
                  deferred.resolve(category[0]);
            },
            (err) => deferred.reject(err)
      );
    
    return deferred.promise;
  }
}
