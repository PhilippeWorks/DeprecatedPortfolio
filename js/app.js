//Model
let projects = [
	{
		title: "Arcade Game Demo",
		src: "imgs/arcadegame.png",
		description: "A simple 1 level demo inspired by frogger. Made with the HTML5 canvas API.",
		url:"projects/arcade-game/index.html",
		srcUrl: "https://github.com/PhilippeWorks/Arcade-Game-Demo"
	},
	{
		title: "Neighborhood Directory",
		src: "imgs/neighborhood.png",
		description: "Checkout this business directory for a village named Everett. Made with vanilla javascript, the Google Maps API and Open Weather API.",
		url:"projects/neighborhood-directory/index.html",
		srcUrl: "https://github.com/PhilippeWorks/Neighborhood-Directory"
	},
	{
		title: "Random-Quote Generator",
		src: "imgs/quote-machine.png",
		description: "Share these cool quotes on social media. Using the facebook and twitter API for share buttons.",
		url:"projects/random-quote-generator/index.html",
		srcUrl: "https://github.com/PhilippeWorks/Quote-Machine"
	},
	{
		title: "Online Resume",
		src: "imgs/onlineresume.png",
		description: "Have a look at the online version of my resume. jQuery is at the core of this project.",
		url:"projects/online-resume/index.html",
		srcUrl: "https://github.com/PhilippeWorks/Online-Resume"
	}
];

//fills in portfolio slide
let counter = 0;
let slideMaker = (slide) => {
	$("#portfolio-slide-title").html(projects[slide].title);
	$("#portfolio-img").attr("src", projects[slide].src);
	$("#portfolio-img").attr("alt", projects[slide].title);
	$("#project-description").html(projects[slide].description);
	$("#source-code-link").attr("href", projects[slide].srcUrl);
	$("#website-link").attr("href", projects[slide].url);
	};

slideMaker(counter);


//right arrow button
$("#right-arrow").click( () => {
	$("#portfolio-slide").fadeOut(400);
	window.setTimeout( () => {
		counter++;	
		if (counter < projects.length) {
			slideMaker(counter);
		} else if (counter === projects.length) {
			counter = 0;
			slideMaker(counter);
		}
	}, 400);
	//gives space for fadeout to finish before generating next slide
	window.setTimeout( () => {$("#portfolio-slide").fadeIn(400);}, 500);
});

//left arrow button
$("#left-arrow").click( () => {
	$("#portfolio-slide").fadeOut(400);
	window.setTimeout( () => {
		counter--;	
		if (counter < projects.length) {
			slideMaker(counter);
		} else if (counter === projects.length) {
			counter = 0;
			slideMaker(counter);
		}
	}, 400);

	//gives space for fadeout to finish before generating next slide
	window.setTimeout( () => {$("#portfolio-slide").fadeIn(400);}, 500);
});

//nav bar controls
let navBar = [];


class navButton {
	constructor(button, page) {
		this.button = button;
		this.page = page;

		this.button.click( () => {
			//to prevent redundant animation
			if(this.page.css("display") != "flex") {
			navBar.forEach( (element) => {
				if (element.button != this.button || this.page.css("display") != "flex") {
					element.page.fadeOut(400);				
				};
			});

				window.setTimeout( () => {
					//prevents loading of multiple pages on repeated fast clicks
					navBar.forEach( (element) => {
					element.page.css("display", "none");
					});
					//shows requested page
					this.page.css("display", "flex");
					this.page.fadeIn(400);	
				}, 400);
			};
		});

		navBar.push(this);
	};
};

// new navButton($("#contact-link"), $("#contact-page"));
new navButton($("#about-button"), $("#about"));
new navButton($(".b2-portfolio"), $("#jumbotron"));
