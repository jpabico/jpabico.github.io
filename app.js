var app = angular.module("myapp", []);

    app.filter('to_trusted', ['$sce', function($sce) {
        return function(x) {
            return $sce.trustAsHtml(x);
        };
    }]);
    
    app.controller("BigController", function($scope) {
        $scope.stuff = myAppsInfo;
        $scope.appClickNum = 0;

        $scope.testhtml = '<ul>my list <li>item1</li><li>item2</li></ul>';

        this.setAppClickNum = function(appIndex) {
            return $scope.appClickNum = appIndex;
        };

        this.getAppImageMain = function(appIndex) {
            // PanelController.testing(3);
            return $scope.stuff[appIndex].images[0];
        };

        this.getAppImage = function(appIndex) {
            return $scope.stuff[appIndex].images[0];
        };

        this.getAppName = function(appIndex) {
            return $scope.stuff[appIndex].name;
        };

        this.getAppDescription = function(appIndex) {
            return $scope.stuff[appIndex].description_text;
        };

        this.getAppFeatures = function(appIndex) {
            return $scope.stuff[appIndex].features_text;
        };

        this.getAppTechnology = function(appIndex) {
            return $scope.stuff[appIndex].technology_text;
        };

        this.getAppUrl = function(appIndex) {
            return $scope.stuff[appIndex].url;
        };

    });

    app.controller("PanelController", function($scope) {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab
        };

        // this.testing = function(number) {
        //     console.log(number)
        // }

    } );
    
    app.controller("GalleryController", function($scope) {
        this.verycurrent = 0;
        this.setVeryCurrent = function(pickThisApp) {
            this.veryCurrent = pickThisApp || 0;
        };
    });

    // var myAppsInfo = [
    //     {
    //         name: "Wait and Eat", 
    //         images: ['images/resz_quest_pic.jpg'],
    //         description_text: " placeholder for now",
    //         features_text: [" "],
    //         technology_text: ["Javascript", "Angular.js", "jQuery/AJAX", "HTML5", "CSS3", "APIs (Firebase, Twilio, Zapier)"],
    //         url: "http://google.com"
    //     }, 
    //     {
    //         name: "Jury", 
    //         images: ['images/resz_jury_landing_page.jpg'],
    //         description_text: "Don't want to get in the middle of 2 friends arguing?  Settle it with the JURY!  Want to facilitate learning and discussion by involving students outside of the classroom?  Take it to the JURY!  Holding auditions for a band or theatrical production? JURY! Can't decide what to wear today?  JURY!  The possibilities are endless!",
    //         features_text: ["Open new cases and post your side of the story", "Upload videos from YouTube and submit photo evidence", "Comment on each party's arguments and support their causes", "Deliberate with other jurors and and upvote/downvote others' comments", "Vote for the plaintiff or defendant and decide the winner!"],
    //         technology_text: ["Ruby on Rails", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "APIs (YouTube, CRON)", "Active Record"],
    //         url: "http://jury2.herokuapp.com"
    //     },
    //     {
    //         name: "Letter Stream", 
    //         images: ['images/resz_letterstream_pic.jpg'],
    //         description_text: "Hey Kids!  On the way to the Reading Rainbow, don't forget to stop by the Letter Stream and develop your skills!  Reading doesn't have to be difficult.  Letter Stream will help you read faster, be more creative, and enjoy the experience of reading a good book!",
    //         features_text: ["Choose the color words that you like best", "Adjust the highlighter speed to read at your own pace", "Build your imagination and write your own stories", "Upload stories you'd like to practice reading"],
    //         technology_text: ["Sinatra framework", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "Active Record"],
    //         url: "http://letterstream.herokuapp.com"
    //     },
    //     {
    //         name: "Tumblr-Clone", 
    //         images: ['images/resz_tumblr-clone-dbc.jpg'],
    //         description_text: "Tumblr-Clone is a social neworking app modeled after the Tumblr platform.  This was built as a personal project and used for instructional purposes to teach others how to develop web apps.",
    //         features_text: ["Blog about daily events", "Post multimedia content", "Follow other users", "Share your experiences!"],
    //         technology_text: ["Ruby on Rails", "Ruby", "Javascript", "Bootstrap", "HTML5", "CSS3", "Active Record"],
    //         url: "http://tumblr-clone-dbc.herokuapp.com"
    //     },
    //     {
    //         name: "Connect 4", 
    //         images: ['images/resz_connect-4.jpg'],
    //         description_text: "Based on the classic game board, Flizzard Connect was built as a team project at Dev Bootcamp.",
    //         features_text: ["Challenge your friends to a game", "Start a new game with the push of a button if you mess up before your friend can stop you", "In case you space out, the game will tell you how your opponent won"],
    //         technology_text: ["Javascript", "jQuery", "HTML5", "CSS3", "PHP"],            
    //         url: "http://connect-4-dbc.herokuapp.com"
    //     },
    //     {
    //         name: "Quest", 
    //         images: ['images/resz_quest_pic.jpg'],
    //         description_text: "Currently under construction, Quest (QUiz-tEST) allows students to prepare one another for their exams.  Also, teachers can spy, er I mean... see the activity of the students and use the information to plan and design lessons and review sessions.",
    //         features_text: ["Write questions and provide answers to classmates", "Send your questions to your classmates via Twitter", "Review your progress and see which questions you missed (and got correct!)", "Teachers can also view the activity and results"],
    //         technology_text: ["Ruby on Rails", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "APIs (YouTube, Twitter)", "Active Record"],
    //         url: "#"
    //     }
    // ];


     var myAppsInfo = [
        {
            name: "Patient Pager", 
            images: ['images/resz_patient_pager.jpg'],
            description_text: "   Catering to the needs of the patients, Patient Pager gives patients the freedom to wait OUTSIDE the waiting room without fear of missing their scheduled appointment.  Families will know exactly when and where to pick up their loved ones.  And medical offices can improve patient flow by allowing the doctor to notify the next patient as soon as the doctor is ready.  No need to rush the doctor.  Everyone gets the time they deserve.  Now everyone can be a patient patient!",
            features_text: ["- Sending text messages with the push of a button to notify patients that the doctor is ready", "- Easily adding/removing patents from the list", "- Customizing the messages sent to patients"],
            technology_text: ["- Angular.js", "- Javascript", "- jQuery/AJAX", "- HTML5", "- CSS3", "- APIs (Firebase, Twilio, Zapier)"],
            url: "https://patient-pager.firebaseapp.com"
        }, 
        {
            name: "Jury", 
            images: ['images/resz_jury_landing_page.jpg'],
            description_text: "   Don't want to get in the middle of 2 friends arguing?  Settle it with the JURY!  Want to facilitate learning and discussion by involving students outside of the classroom?  Take it to the JURY!  Holding auditions for a band or theatrical production? JURY! Can't decide what to wear today?  JURY!  The possibilities are endless!",
            features_text: ["- Opening new cases and posting your side of the story", "- Uploading videos from YouTube and submiting photo evidence", "- Commenting on each party's arguments and supporting their causes", "- Deliberating with other jurors and and up/downvoting others' comments", "- Voting for the plaintiff or defendant and deciding the winner!"],
            technology_text: ["- Ruby on Rails", "- Ruby", "- Javascript", "- jQuery/AJAX", "- HTML5", "- CSS3", "- APIs (YouTube, CRON)", "- Active Record"],
            url: "http://jury2.herokuapp.com"
        },
        {
            name: "Letter Stream", 
            images: ['images/resz_letterstream_pic.jpg'],
            description_text: "   Hey Kids!  On the way to the Reading Rainbow, don't forget to stop by the Letter Stream and develop your skills!  Reading doesn't have to be difficult.  Letter Stream will help you read faster, be more creative, and enjoy the experience of reading a good book!",
            features_text: ["- Choosing the word color that you like best", "- Adjusting the highlighter speed to read at your own pace", "- Building your imagination and writing your own stories", "- Uploading stories you'd like to practice reading"],
            technology_text: ["- Sinatra framework", "- Ruby", "- Javascript", "- jQuery/AJAX", "- HTML5", "- CSS3", "- Active Record"],
            url: "http://letterstream.herokuapp.com"
        },
        {
            name: "Tumblr-Clone", 
            images: ['images/resz_tumblr-clone-dbc.jpg'],
            description_text: "   Tumblr-Clone is a social neworking app modeled after the Tumblr platform.  This was built as a personal project and used for instructional purposes to teach others how to develop web apps.",
            features_text: ["- Blogging about daily events", "- Posting multimedia content", "- Following other users", "- Sharing your experiences!"],
            technology_text: ["- Ruby on Rails", "- Ruby", "- Javascript", "- Bootstrap", "- HTML5", "- CSS3", "- Active Record"],
            url: "http://tumblr-clone-dbc.herokuapp.com"
        },
        {
            name: "Connect 4", 
            images: ['images/resz_connect-4.jpg'],
            description_text: "   Based on the classic game board, Flizzard Connect was built as a team project at Dev Bootcamp.",
            features_text: ["- Challenging your friends to a game", "- Starting a new game with the push of a button if you mess up before your friend can stop you", "- Having the game will tell you how your opponent won in case you space out"],
            technology_text: ["- Javascript", "- jQuery", "- HTML5", "- CSS3", "- PHP"],            
            url: "http://connect-4-dbc.herokuapp.com"
        },
        {
            name: "Quest", 
            images: ['images/resz_quest_pic.jpg'],
            description_text: "Currently under construction, Quest (QUiz-tEST) allows students to prepare one another for their exams.  Also, teachers can spy, er I mean... see the activity of the students and use the information to plan and design lessons and review sessions.",
            features_text: ["- Writing questions and providing answers to classmates", "- Sending your questions to your classmates via Twitter", "- Reviewing your progress and seeing which questions you missed (and got correct!)", "- Allowing teachers to view the activities and results"],
            technology_text: ["- Ruby on Rails", "- Ruby", "- Javascript", "- jQuery/AJAX", "- HTML5", "- CSS3", "- APIs (YouTube, Twitter)", "- Active Record"],
            url: "#"
        }
    ];