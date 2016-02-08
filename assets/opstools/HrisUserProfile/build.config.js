module.exports={
    "map": {
        "jquery/jquery" : "jquery",
        "bootstrap": "bootstrap.js",
        "GenericList": "GenericList.js",
    },
    "paths": {
        "jquery" : "js/jquery.min.js",                  // 'http://code.jquery.com/jquery-1.11.1.min.js'
        "bootstrap.js": "js/bootstrap/js/bootstrap.min.js",
        "font-awesome.css": "styles/font-awesome.css",
        "GenericList.js": "js/GenericList.js",
    },
    "ext": {
        "ejs": "can/view/ejs/system"
    },
    "buildConfig": {
        "map": {
            "can/util/util": "can/util/domless/domless"
        }
    }
};