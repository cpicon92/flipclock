module.declare([
    "../vendor/twig"
], function(require, exports, module) {
    var twig = require("../../vendor/twig").twig,
    
    return twig({data: '<div class="name">Flipclock.us</div>
<div class="version">Version 1.1</div>
<div class="icon"></div>
<div class="copyright">Copyright 2011-2012 <a href="http://johnroepke.com/">John Roepke</a></div>
'});

});