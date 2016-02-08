
steal(
        // List your Controller's dependencies here:
        'appdev',
        'opstools/HrisUserProfile/views/UserProfileList/UserProfileList.ejs',
function(){


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
            AD.comm.hub.subscribe('hrisuserprofile.resize', function (key, data) {

                self.ProfileList.resize(data);
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