class HomeCtrl {
  constructor(list, category, AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.list = list;
    this.category = category;

  }
}

export default HomeCtrl;
