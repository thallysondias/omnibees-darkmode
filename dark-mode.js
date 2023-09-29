jQuery(document).ready(function ($) {
    var main = function () {

        var getUrlVars = function () {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vars[key] = value;
            });
            return vars;
        };

        var addToggleColor = function(){

        }

        var invertLogoColor = function () {
            $(".dark-mode .header-top .logo img").css("filter", "invert(1)");
        }
        var invertWebsiteColor = function(baseColor, grayColor, textColor) {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.innerHTML =
                '.dark-mode .bg-white { ' +
                '    background: ' + baseColor + ' !important;' +
                '  }';
            document.head.appendChild(styleElement);
        }

        var initDarkMode = function () {
            //Get Global Variables
            var baseColor = "#111";
            var grayColor = "666"
            var textColor = "#ffffff";

            //Add class on body
            var element = document.body;
            element.classList.toggle("dark-mode");

            //Change Hotel Logo
            invertLogoColor();            
            invertWebsiteColor(baseColor, grayColor, textColor);
            addToggleColor();

        };

        var darkmode = getUrlVars().darkmode;
        if (darkmode > "true") {
            console.log("Init Dark Mode Omnibees");
            initDarkMode();
        }
    }
    main();

});
