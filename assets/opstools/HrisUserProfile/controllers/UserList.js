steal(
        // List your Controller's dependencies here:
        'opstools/HrisUserProfile/views/UserList/UserList.ejs',
function(){
System.import('appdev').then(function() {
    steal.import('can/construct/super/super', 
                    'appdev/control/control',
                    'appdev/comm/hub').then(function() {

    AD.Control.extend('opstools.HrisUserProfile.UserList', { 

        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '/opstools/HrisUserProfile/views/UserList/UserList.ejs'
            }, options);

            // call parent init()
            this._super(element, options);

            this.initDOM();

//             // listen for resize notifications
//             AD.comm.hub.subscribe('hrisuserprofile.resize', function (key, data) {
// 				self.element.css("height", data.height + "px");
				
//                 // the height of our list should be the height of our portal - height of our bottom buttons
// 				//var buttonHeight = self.element.find(".opsportal-widget-bottom-btn").outerHeight(true);				
// 				var buttonHeight = self.element.find(".op-widget-footer").outerHeight(true);


// 				// //self.element.find('.genlist-widget-inner').css("height", data.height+'px');
// 				// self.element.find('.op-widget-body').css("height", data.height+'px');

// 			    var mastheadHeight = self.element.find(".op-widget-masthead").outerHeight(true);

// 				// for the purposes of displaying to the client, I pulled js code from /assets/js/GenericList.js to here to calculate correct height of list
// 				// I removed the subtraction of the value of 15 from the height...what is that value for? It was causing an extra space of 15px above the bottom button, so seems unnecessary
// 				//self.element.find('.hris-nav-list').css("height", (data.height - mastheadHeight -5-15- buttonHeight) + "px");
// //self.element.find('.opsportal-nav-list').css("height", (data.height - mastheadHeight -5 - buttonHeight) + "px");
// self.element.find('.op-widget-body').css("height", (data.height - mastheadHeight -5 - buttonHeight) + "px");

// 				// now we apply a padding to our widget container so that the list drops below the masthead
// //self.element.find(".genlist-widget-inner").css("padding-top", (mastheadHeight+5) + "px");

//             });
            // listen for resize notifications
            this.resizeID = AD.comm.hub.subscribe('hrisuserprofile.resize', function (key, data) {

                if (self.element) {
                    self.UserList.resize(data);
                } else {
                    AD.comm.hub.unsubscribe(self.resizeID);
                }
            });
        },

        initDOM: function() {
            var self = this;

            // insert our base DOM with the Column contents: objectlist, and bottom elements
            this.element.html(can.view(this.options.templateDOM, {} ));

            // create an Op Widget on our element:
            this.UserList = new AD.op.Widget(this.element);
        }

    });

});
});
});