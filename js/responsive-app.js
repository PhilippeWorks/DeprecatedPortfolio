 //using enquire.js for media queries

enquire.register("all and (max-width: 600px), all and (max-device-width: 600px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
    	projects.forEach((element, index) => {
    		if (index != counter) {
    			//creates new figure for each unshown project
    			$("#jumbotron").append("<figure id=\"portfolio-slide\" class=\"mobile-slide\"><figcaption id=\"portfolio-slide-title\">"+ projects[index].title +"</figcaption><img id=\"portfolio-img\" src=\""+ projects[index].src +"\" alt=\""+ projects[index].title +"\"><div id=\"overlay\"><p id=\"project-description\">"+ projects[index].description +"</p><a id=\"website-link\" class=\"overlay-buttons\" target=\"_blank\" href=\""+ projects[index].url +"\">go to website</a><a id=\"source-code-link\" class=\"overlay-buttons\" target=\"_blank\" href=\""+ projects[index].srcUrl +"\">view source code</a></div></figure>")
    		}
    	});

        //adds margins to get rid of header and footer overlap on content
        $("body").css("margin-top", $("header").css("height"));
        $("#jumbotron").css("margin-bottom", $("footer").css("height"));
    },

    // OPTIONAL
    // If supplied, triggered when the media query transitions
    // *from a matched state to an unmatched state*.
    unmatch : function() {
    	//removes created DOM elements by selecting shared class name
    	$(".mobile-slide").remove();
        $("body").css("margin-top", "0");
        $("#jumbotron").css("margin-bottom", "0");
    },


    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {},

    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function
    // until the first time the media query is matched
    deferSetup : true,

    // OPTIONAL
    // If supplied, triggered when handler is unregistered.
    // Place cleanup code here
    destroy : function() {}

});

enquire.register("screen and (min-height: 975px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
        $("html").css("margin-top", (window.innerHeight - 975)/2);

        $( window ).resize(() => {
            $("html").css("margin-top", (window.innerHeight - 975)/2)
        });
    },

    // OPTIONAL
    // If supplied, triggered when the media query transitions
    // *from a matched state to an unmatched state*.
    unmatch : function() {
        //removes created DOM elements by selecting shared class name
        $("html").css("margin-top", "0");
    },


    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {},

    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function
    // until the first time the media query is matched
    deferSetup : true,

    // OPTIONAL
    // If supplied, triggered when handler is unregistered.
    // Place cleanup code here
    destroy : function() {}

});