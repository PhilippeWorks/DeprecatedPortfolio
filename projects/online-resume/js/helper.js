/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%Contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Phone</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">Email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">Github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Location</span><span class="white-text">%data%</span></li>';

var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span><hr>';

var HTMLskillsStart = '<h4 id="skills-h3">Skills:</h4><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h3>%data%';
var HTMLworkTitle = ' - %data%</h3>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<p href="#">%data%';
var HTMLschoolDegree = ' -- %data%</p>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div><br>';
