(function() {       "use strict"; angular.module("mainApp").run(["$templateCache", function($templateCache) {$templateCache.put("calculator.html","<div class=\"well calculator-well\">\n  <fieldset class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <md-input-container class=\"main-value\">\n          <label class=\"md-red-theme\">Total</label>\n          <input type=\"text\" ng-model=\"$parent.calcTotal\"/>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-8 calc-section\">\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"1\" class=\"md-raised md-primary md-red-theme calc-btn\">One</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"2\" class=\"md-raised md-primary md-red-theme calc-btn\">Two</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"3\" class=\"md-raised md-primary md-red-theme calc-btn\">Three</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"4\" class=\"md-raised md-primary md-red-theme calc-btn\">Four</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"5\" class=\"md-raised md-primary md-red-theme calc-btn\">Five</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"6\" class=\"md-raised md-primary md-red-theme calc-btn\">Six</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"7\" class=\"md-raised md-primary md-red-theme calc-btn\">Seven</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"8\" class=\"md-raised md-primary md-red-theme calc-btn\">Eight</md-button>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"9\" class=\"md-raised md-primary md-red-theme calc-btn\">Nine</md-button>\n        </div>\n        <div class=\"col-xs-4\"></div>\n        <div class=\"col-xs-4 text-center\">\n          <md-button calc-value=\"0\" class=\"md-raised md-primary md-red-theme calc-btn\">Zero</md-button>\n        </div>\n      </div>\n      <div class=\"col-xs-4 calc-section\">\n        <div class=\"col-xs-1 col-md-4 text-center\">\n          <md-button calc-operator=\"+\" class=\"md-raised md-primary md-red-theme calc-btn\"><span class=\"hidden-sm hidden-xs\">Add</span><span class=\"hidden-lg hidden-md\">+</span></md-button>\n        </div>\n        <div class=\"col-xs-1 col-md-4 text-center\">\n          <md-button calc-operator=\"-\" class=\"md-raised md-primary md-red-theme calc-btn\"><span class=\"hidden-sm hidden-xs\">Subtract</span><span class=\"hidden-lg hidden-md\">-</span></md-button>\n        </div>\n        <div class=\"col-xs-1 col-md-4 text-center\">\n          <md-button calc-operator=\"*\" class=\"md-raised md-primary md-red-theme calc-btn\"><span class=\"hidden-sm hidden-xs\">Multiply</span><span class=\"hidden-lg hidden-md\">*</span></md-button>\n        </div>\n        <div class=\"col-xs-1 col-md-4 text-center\">\n          <md-button calc-operator=\"/\" class=\"md-raised md-primary md-red-theme calc-btn\"><span class=\"hidden-sm hidden-xs\">Divide</span><span class=\"hidden-lg hidden-md\">/</span></md-button>\n        </div>\n        <div class=\"col-xs-12 col-md-12 text-center\">\n          <md-button calc-equals=\"calc-equals\" class=\"md-raised md-primary md-red-theme calc-btn equals-btn\"><span class=\"hidden-sm hidden-xs\">Equals</span><span class=\"hidden-lg hidden-md\">=</span></md-button>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>");
$templateCache.put("navigation.html","<md-button href=\"/\" class=\"md-raised md-primary md-indigo-theme nav-btn\">Home</md-button>\n<md-button href=\"/javascript\" class=\"md-raised md-primary md-indigo-theme nav-btn\">Javascript</md-button>\n<md-button ng-click=\"changePage(&quot;youtube&quot;, &quot;My Youtube Channel&quot;)\" class=\"md-raised md-warn nav-btn\">My Youtube Channel</md-button>\n<md-button href=\"/custompc\" class=\"md-raised md-primary md-indigo-theme nav-btn\">Custom PC Buidling</md-button>\n<md-button class=\"md-raised md-warn nav-btn\">Flash</md-button>\n<md-button href=\"/profile\" class=\"md-raised md-primary md-indigo-theme nav-btn\">Profile</md-button>\n<md-button href=\"/profile\" class=\"md-raised md-primary md-indigo-theme nav-btn\">Contact</md-button>");}]);})();