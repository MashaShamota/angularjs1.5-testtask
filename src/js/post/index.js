import angular from 'angular';

// Create the module where our functionality can attach to
let postModule = angular.module('app.post', []);

// Include our UI-Router config settings
import PostConfig from './post.config';
postModule.config(PostConfig);

// Controllers
import PostCtrl from './post.controller';
postModule.controller('PostCtrl', PostCtrl);

export default postModule;
