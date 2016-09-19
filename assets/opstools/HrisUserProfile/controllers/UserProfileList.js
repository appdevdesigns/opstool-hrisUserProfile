
steal(
        // List your Controller's dependencies here:
        'opstools/HrisUserProfile/views/UserProfileList/UserProfileList.ejs',
function(){
System.import('appdev').then(function() {
    steal.import('can/construct/super/super', 
                    'appdev/control/control',
                    'appdev/comm/hub').then(function() {

    AD.Control.extend('opstools.HrisUserProfile.UserProfileList', { 


        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '/opstools/HrisUserProfile/views/UserProfileList/UserProfileList.ejs'
            }, options);

            // call parent init()
            this._super(element, options);

            this.initDOM();

            // listen for resize notifications
            this.resizeID = AD.comm.hub.subscribe('hrisuserprofile.resize', function (key, data) {

                if (self.element) {
                    self.ProfileList.resize(data);
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
            this.ProfileList = new AD.op.Widget(this.element);
        },
		
        
		'#hris-user-profile-list .genlist-item click':function($el, ev) {
			var self = this,
				myType = self.element.find($el).data('hris-attr');
			
			$('#hris-stage-user .opsportal-stage-main').hide();
			$('#' + myType).show();
			
			$('#hris-user-profile-list .genlist-item').hasClass('genlist-active') ? $('#hris-user-profile-list .genlist-item').removeClass("genlist-active genlist-active-object") : "";
			self.element.find($el).addClass("genlist-active genlist-active-object");
				
			ev.preventDefault();
		}

    });

});
});
});