/*
This is empty on purpose! Your code to build the resume will go here.
 */


var name = "Aleš Pevec";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedrole = HTMLheaderRole.replace("%data%", role);
var mobile = "041 976 202";
var email = "alespesko@gmail.com";
var twitter = "HizorX";
var github = "xpesko";
var employer1 = "Aktiva";
var employ1title = "Varnostnik";
var employ1dates = "2019-2020";
var employ1location = "Ljubljana";
var employ1desc = "Varovanje ljudi in premoženja";
var employ1 = [employer1, employ1title, employ1dates, employ1location, employ1desc];
var employer2 = "Galekom";
var employ2title = "Varnostnik";
var employ2dates = "2020-?";
var employ2location = "Ljubljana";
var employ2desc = "Varovanje ljudi in premoženja";
var schoolname = "Tehnični Šolski Center Kraj";
var schooldegree = "Tehnik Računalništva";
var schooldates = "2012-2016";
var schoollocation = "Kranj";
var employ2 = [employer2, employ2title, employ2dates, employ2location, employ2desc];
$("#header").prepend(formattedrole);
$("#header").prepend(formattedName);

var skills = ["Programming", "HTML", "Javascript", "CSS", "PHP"];
var Fmobile = HTMLmobile.replace("%data%", mobile);
$("#footerContacts").append(Fmobile);
var Femail = HTMLemail.replace("%data%", email);
$("#footerContacts").append(Femail);
var Ftwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(Ftwitter);
var Fgithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(Fgithub);

var Femploy1 = [HTMLworkEmployer.replace("%data%", employer1),
HTMLworkTitle.replace("%data%", employ1title),
HTMLworkDates.replace("%data%", employ1dates),
HTMLworkLocation.replace("%data%", employ1location),
HTMLworkDescription.replace("%data%", employ1desc)];
var Femploy2 = [HTMLworkEmployer.replace("%data%", employer2),
HTMLworkTitle.replace("%data%", employ2title),
HTMLworkDates.replace("%data%", employ2dates),
HTMLworkLocation.replace("%data%", employ2location),
HTMLworkDescription.replace("%data%", employ2desc)];
$("#workExperience").append(HTMLworkStart);
var Femployer1 = HTMLworkEmployer.replace("%data%", employer1 | "#", "www.aktiva.si");
$("#workExperience").append(Femploy1);
var Femployer2 = HTMLworkEmployer.replace("%data%", employer2);
$("#workExperience").append(Femploy2);

var FSchool = [HTMLschoolName.replace("%data%", schoolname),
HTMLschoolDegree.replace("%data%", schooldegree),
HTMLschoolDates.replace("%data%", schooldates),
HTMLschoolLocation.replace("%data%", schoollocation)]
$("#education").append(HTMLschoolStart);
$("#education").append(FSchool);