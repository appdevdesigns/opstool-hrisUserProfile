steal(
        // List your Page's dependencies here:
        'opstools/HrisUserProfile/controllers/HrisUserProfile.js',
        'opstools/HrisUserProfile/hrisUserProfile.css',
        function() {
            System.import('appdev').then(function() {
                steal.import('appdev/ad').then(function() {
                    AD.ui.loading.resources(3);

                    steal.import('site/labels/HRISUserProfile').then(function() {
                        AD.ui.loading.completed(3);
                    });
                });
            });
        }
);
