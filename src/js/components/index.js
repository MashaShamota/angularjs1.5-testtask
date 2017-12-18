import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import PostPreview from './post-preview.component';
componentsModule.component('postPreview', PostPreview);

import PostCategories from './post-categories.component';
componentsModule.component('postCategories', PostCategories);

export default componentsModule;
