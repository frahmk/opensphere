goog.provide('os.ui.navTopDirective');

goog.require('os.defines');
goog.require('os.ui.NavBarCtrl');



/**
 * The nav-top directive
 * @return {angular.Directive}
 */
os.ui.navTopDirective = function() {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: os.ROOT + 'views/navtop.html',
    controller: os.ui.NavBarCtrl,
    controllerAs: 'navTop'
  };
};


/**
 * Add the directive to the module.
 */
os.ui.Module.directive('navTop', [os.ui.navTopDirective]);
