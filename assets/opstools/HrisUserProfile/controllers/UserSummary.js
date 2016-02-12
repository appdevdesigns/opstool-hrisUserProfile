
steal(
        // List your Controller's dependencies here:
        'opstools/HrisUserProfile/views/UserSummary/UserSummary.ejs',
function(){
System.import('appdev').then(function() {
    steal.import('can/construct/super/super', 
                    'appdev/control/control',
                    'appdev/comm/hub').then(function() {

    AD.Control.extend('opstools.HrisUserProfile.UserSummary', { 


        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '/opstools/HrisUserProfile/views/UserSummary/UserSummary.ejs'
            }, options);

            // call parent init()
            this._super(element, options);

            this.initDOM();

			this.element.find('#idOfPassportDiv').hide();

			// listen for resize notifications
            AD.comm.hub.subscribe('opsportal.resize', function (key, data) {

                self.element.find('#hris-user-basic-information').css('height', data.height+'px');
                
				//self.element.find(".opsportal-stage-container").css("height", data.height + "px");
				//self.element.find(".op-stage").css("height", data.height + "px");
				
            });

        },


        initDOM: function() {
            var self = this;

            // insert our base DOM with the Column contents: objectlist, and bottom elements
            this.element.html(can.view(this.options.templateDOM, {} ));
        },
        

		'.op-filter-tag click':function($el, ev) {
			var self = this,
				myFilter = self.element.find($el).data('hris-filter');
			
			if (self.element.find($el).hasClass('filter-on')) {
				self.element.find($el).removeClass('filter-on');
				$('#'+myFilter).hide();
			} else {
				self.element.find($el).addClass('filter-on');
				$('#'+myFilter).show();
			}
				
			ev.preventDefault();
		}

    });

});
});
});