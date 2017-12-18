class PostCategoriesCtrl {
  constructor(Categories, $scope, $log) {
    'ngInject';
    
   this._$scope = $scope;

   // Get list of all categories
    Categories
      .getAll()
      .then(
        (categories) => {
            categories = categories.filter(category => category.is_active);
            let categoriesNestedList = categories.filter(category => !category.parent_category_id)
                    .reduce(function(acc, cur,) {
                        cur.children = [];
                        acc[cur.id] = cur;
                        return acc;
                    }, {});
            let categoriesSecondLevel = categories.filter(category => category.parent_category_id);
            
            angular.forEach(categoriesSecondLevel, category => {
                
                if(category.parent_category_id in categoriesNestedList){
                    categoriesNestedList[category.parent_category_id].children.push(category);
                }else{
                    console.log("There is no parent category with ID: "+ category.parent_category_id);
                }
            }, categoriesNestedList);
            
          this.categories = categoriesNestedList;
          this.categoriesLoaded = true;
        }
      ).catch($log.error);
  }
  
}

let PostCategories = {
  controller: PostCategoriesCtrl,
  templateUrl: 'components/post-categories.html',
};

export default PostCategories;
