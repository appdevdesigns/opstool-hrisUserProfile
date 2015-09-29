steal(
        // List your Page's dependencies here:
        'appdev',
        function() {
            AD.ui.loading.resources(3);
        },
        '//opstools/HrisUserProfile/controllers/HrisUserProfile.js'
        ,'//opstools/HrisUserProfile/hrisUserProfile.css'
        ,'site/labels/HRISUserProfile.js'
).then(function(){
	AD.ui.loading.completed(3);
});