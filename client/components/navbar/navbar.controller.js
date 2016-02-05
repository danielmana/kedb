'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Events',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('kedbApp')
  .controller('NavbarController', NavbarController);