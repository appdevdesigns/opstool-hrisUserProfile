steal(
        // List your Page's dependencies here:
        'appdev',
        function() {
            AD.ui.loading.resources(3);
        },
        'opstools/HrisUserProfile/controllers/HrisUserProfile.js',
        'opstools/HrisUserProfile/hrisUserProfile.css',
        function() {
            steal('site/labels/HRISUserProfile.js', function() {
                AD.ui.loading.completed(3);
            })
        }
);
