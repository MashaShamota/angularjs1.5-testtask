import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import PostsService from './posts.service';
servicesModule.service('Posts', PostsService);

import CategoriesService from './categories.service';
servicesModule.service('Categories', CategoriesService);

export default servicesModule;
