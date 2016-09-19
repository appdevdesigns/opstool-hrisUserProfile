
steal(
        // List your Controller's dependencies here:
        'opstools/HrisUserProfile/controllers/UserList.js',
        'opstools/HrisUserProfile/controllers/UserProfileList.js',
        'opstools/HrisUserProfile/controllers/UserSummary.js',

        // views:
        'opstools/HrisUserProfile/views/HrisUserProfile/HrisUserProfile.ejs',
   
function(){
    System.import('appdev').then(function() {
        steal.import('bootstrap',
                        'font-awesome.css',
                        'js/GenericList',
                        'OpsPortal/classes/OpsTool').then(function() {
    AD.Control.OpsTool.extend('HrisUserProfile', {

        init: function( element, options ) {
            var self = this;
            options = AD.defaults({
                    templateDOM: '/opstools/HrisUserProfile/views/HrisUserProfile/HrisUserProfile.ejs',
                    resize_notification: 'hrisuserprofile.resize',
                    tool:null   // the parent opsPortal Tool() object
            }, options);
            this.options = options;

            // call parent init()
            this._super(element, options);

            // // Call parent init
            // AD.classes.opsportal.OpsTool.prototype.init.apply(this, arguments);

            this.dataSource = this.options.dataSource; // AD.models.Projects;

//            this.shouldUpdateUI = true;     // we have not updated our UI for the work area yet.

            this.initDOM();

            new AD.controllers.opstools.HrisUserProfile.UserList(this.element.find('.hris-user-widget'), {});
			new AD.controllers.opstools.HrisUserProfile.UserProfileList(this.element.find('.hris-user-profile-widget'), {});
			new AD.controllers.opstools.HrisUserProfile.UserSummary(this.element.find('.tool-hris-user-summary'), {});

			this.element.find('.tt').tooltip(options);
			this.element.find('.tt-field').tooltip({placement: 'left'});

			this.element.find('.po-help').popover(options);
			this.element.find('.po').popover({
			    html : true,
			    title: function() {
			      return self.element.find('.po-title').html();
			    },
			    content: function() {
			      return self.element.find('.po-content').html();
			    }
			});
			
			this.element.find('.hris-form-datepicker').datepicker({});

        },


        initDOM: function() {

            this.element.html(can.view(this.options.templateDOM, {} ));

        },


/*
        needsUpdate: function() {
            // called by containing ops portal Tool() object when a new
            // has been issued.
            this.shouldUpdateUI = true;
        },



        resize: function( data ) {
            // called by containing ops portal Tool() object when a tool is
            // shown to the user.

            // more importantly it keeps a tool from resizing when it isn't
            // shown, which can introduce css mistakes from false height()
            // values.

            if (this.shouldUpdateUI) {
                AD.comm.hub.publish('hrisadminobjects.resize', data);
                this.shouldUpdateUI = false;
            }

        },

*/
        resize: function(data) {

            this._super(data);

            this.element.find('.op-stage').css("height", (data.height )+ "px");
        },


        '.ad-item-add click': function($el, ev) {

            ev.preventDefault();
        }


    });


});
});
});