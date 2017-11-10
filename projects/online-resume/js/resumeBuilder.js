let work = {
	"jobs": [{
			"employer": "Rev",
			"title": "Transcriptionist",
			"location": "Online",
			"dates": "Currently",
			"description": 
				"● Transcribe video and audio recordings according to the customers specifications in conjunction with professional standards."
		},
		{
			"employer": "Cascades Containerboard Packaging",
			"title": "Order Entry",
			"location": "Toronto, ON",
			"dates": "June 2016 to December 2016",
			"description": 
				"● Amalgamating new and repeat orders into dockets, and digitally into an order processing system named GoTicket by isolating the relevant letiables from emails, past orders and, specification layouts from a program called AS400. <br>● Scheduling orders strategically along management directives, available personnel and shipping schedules. <br>● Filed away invoiced dockets into the archives for future reference."
		},
		{
			"employer": "Unoapp",
			"title": "Technical Support and Hardware Technician",
			"location": "Toronto, ON",
			"dates": "April 2015 to January 2016",
			"description": 
				"● Received calls and emails in either French or English from clients requiring technical support. Issues were typically resolved by walking them through basic troubleshooting steps, remote accessing the computers product or sending them a replacement part.<br>● Gave step by step instructions over the phone and/or email to an onsite technician guiding the install or repair of our product. <br>● Updated the applications and modified the settings of our products computers according to the needs of the clients solution and our company standards. Changes were made to the client's software by remote accessing their unit with a program called Teamviewer. <br>● Built digital signage solutions which required wiring, drilling and screwing different components together. The build varied depending on the type of solution that was sold to the client. <br>● Setup and configured a variety of operating systems, including Linux, Windows and Android. <br>● Modified computers by replacing the RAM and, flashing or replacing the hard drive, to meet the requirements of the build at hand. <br>● Performed repairs on local digital signage solutions. <br>● Received, unpacked and stored materials using the warehouse loading dock, dolly and pump truck. <br>● Packaged products to be shipped using foam, bubble wrap and cardboard. Once packaged, I helped create shipping labels and loaded the product onto the truck. It was at times necessary to create a skid for our product depending on the size of the shipment."
		},
		{
			"employer": "CB Richard Ellis",
			"title": "Property Management Coordinator",
			"location": "Toronto, ON",
			"dates": "October 2014 to March 2015",
			"description": 
				"● Answered calls and emails from occupants and service technicians in French or English regarding facility maintenance issues that needed to be resolved. I initiated the resolution process <br>● Responded to, and managed incoming emails from government clients. <br>● Created and dispatched work orders using Service Insight, Courrigo and similar computer software."
		},
		{
			"employer": "Scholars at Your Service",
			"title": "Marketer and Painter",
			"location": "Toronto, ON",
			"dates": "May 2013 to August 2014",
			"description": 
				"● Door to door canvassing for leads in local neighborhoods. <br>● Painted the interior and exterior of homes according to the clients request."
		},
		{
			"employer": "University of Toronto Robarts Library",
			"title": "Library Assistant",
			"location": "Toronto, ON",
			"dates": "October 2011 to August 2014",
			"description": 
				"● Retrieved items requested by library patrons from stacks and carrels. <br>● Shelved items according to standard library policy. <br>● Ensured a quiet, clean and organized studying atmosphere by discouraging loud and disruptive behaviour. <br>● Helped patrons who were seeking help navigating the library. <br>● Unpacked and processed incoming library content from shipping and receiving."
		}
	],
	"display": () => {
		for (job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);
			let formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			let formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			let formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			let formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			let formattedEmployerTitle = formattedJobEmployer + formattedJobTitle + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedEmployerTitle);
		}
	}
};

let projects = {
	"projects": [{
			"title": "Random Quote Generator",
			"description": "Random quote on click.",
			"images": "images/randomquotesnapshot.png"
		},
		{
			"title": "Website Optimization",
			"description": "Coming soon.",
			"images": "images/optimization-screenshot.png"
		},
		{
			"title": "Arcade Game",
			"description": "Simple frogger like game.",
			"images": "images/arcadegamesnapshot.png"
		},
		{
			"title": "Neighborhood Directory",
			"description": "Welcome to Everett.",
			"images": "images/neighborhoodmapsnapshot.png"
		},
		{
			"title": "Portfolio",
			"description": "Portfolio site.",
			"images": "images/portfoliosnapshot.png"
		},
		{
			"title": "Online Resume",
			"description": "Online version of my resume.",
			"images": "images/onlineresumesnapshot.png"
		}
	],
	"display": () => {
		for (i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			let formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			let formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			let formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
			let completeProjects = formattedProjectTitle + formattedProjectDescription + formattedProjectImage;
			$(".project-entry:last").append(completeProjects);
		}
	}
};

let bio = {
	"name": "Philippe Talbot",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "",
		"email": "philippe_t@live.ca",
		"github": "https://github.com/PhilippeWorks",
		"twitter": "",
		"location": "Toronto, ON"
	},
	"welcomeMsg": "Welcome to the online version of my resume. This has been put together to provide you a brief snapshot of my skills and work experiences. I am open to a variety of work situations and partners. Along with my technical web development skills, I am a strong communicator and fluent in french. I can fit in a multitude of roles, should you have any inqueries feel open to contacting me. Thank you for taking the time to consider my resume.",
	"skills": ["HTML", "CSS", "Javascript", "JSON", "JQuery", "Excel", "T-SQL", "Bootstrap", "Flexbox", "Git", "Github", "Grunt", "NPM"],
	"display": () => {
		let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		let formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		let formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		let formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		let formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		let formattedBio = formattedEmail + formattedGithub + formattedLocation;
		$("#topContacts").append(formattedBio);
		$('#footerContacts').append(formattedBio); 

		let formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").append(formattedWelcomeMsg);

		$("#header").append(HTMLskillsStart);

		if (bio.skills.length > 0) {
			bio.skills.forEach(function(element) {
				let formattedSkills = HTMLskills.replace("%data%", element);
				$("#skills").append(formattedSkills + " ");
			});
		}
	}
};

let education = {
	"schools": [
		{
			"name": "École Secondaire Sainte-Famille",
			"location": "Mississauga, ON",
			"dates": "September 2005 to June 2009",
			"url": "n/a",
			"degree": "Bilingual High School Diploma",
		}
	],
	"onlineCourses": [{
			"title": "DS101X: Statistical Thinking for Data Science and Analytics",
			"school": "ColumbiaX",
			"dates": "March 7th,",
			"url": "https://courses.edx.orgcertificates/3a704ef4b5fb446c91ea4328d8e18a0c"
		},
		{
			"title": "DAT208x: Introduction to Python for Data Science",
			"school": "Microsoft",
			"dates": "March 31st, 2017",
			"url": "https://courses.edx.org/certificates/dd287650c6f74a2e884123e7352e7f63"
		},
		{
			"title": "DAT206x: Analyzing and Visualizing Data with Excel",
			"school": "Microsoft",
			"dates": "March 31st, 2017",
			"url": "https://courses.edx.org/certificates/a2208670d9864a7fb9bfe24abd62d408"
		},
		{
			"title": "DAT201x: Querying with Transact-SQL",
			"school": "Microsoft",
			"dates": "March 31st, 2017",
			"url": "https://courses.edx.org/certificates/b077ea4f72bf4c9eb63bf660d4c90266"
		},
		{
			"title": "DAT101x: Data Science Orientation",
			"school": "Microsoft",
			"dates": "March 31st, 2017",
			"url": "https://courses.edx.org/certificates/ef07302a555b4247965a729dc5677799"
		}
	],
	"display": () => {
		for (i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			let formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			let formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			let formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			let formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			let completeSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates +
				formattedSchoolLocation;
			$(".education-entry:last").append(completeSchool);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();