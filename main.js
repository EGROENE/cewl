const styleSelectedPageNavLink = () => {
    const elements = document.getElementsByClassName("selected-link"); // returns array of elements w/ matching class
    // Style every item in array:
    for (const element of elements) {
        element.style.color = 'var(--secondary-color)';
        element.style.borderBottom = 'var(--size-4) solid var(--secondary-color)';
    }
}

// STAFF PAGE
const staffMembers = [
    { imgURL: "../assets/charles-parkley.jpg", imgAlt:"charles-parkley", name: "Rev. Charles Parkley", title: "Senior Pastor", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."},
    { imgURL: "../assets/bruce-twarze.jpg", imgAlt:"bruce-twarze", name: "Rev. Bruce Twarze", title: "Assistant Pastor, Secretary", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."},
    { imgURL: "../assets/giulia-rojas.jpg", imgAlt:"giulia-rojas", name: "Giulia Rojas", title: "Women's Ministry, Music Coordinator", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."},
    { imgURL: "../assets/jonnie-chevrapramutongh.jpg", imgAlt:"jonnie-chevrapramutongh", name: "Jonnie Chevrapramutongh", title: "Men's Ministry, Youth Pastor", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."},
    { imgURL: "../assets/franziska-schaefer.jpg", imgAlt:"franziska-schaefer", name: "Franziska Schaefer", title: "Youth Pastor, Event Coordinator", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."},
    { imgURL: "../assets/phil-pikkelsen.jpg", imgAlt:"phil-pikkelsen", name: "Phil Pikkelsen", title: "Tech Coordinator", about: "Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin."}
];

const populateStaff = () => {
    for (const member of staffMembers) {
        document.getElementById('staff-one').innerHTML += '<div class="staff-one-item">'
        + '<img src="' + member.imgURL + '"' + 'alt="' + member.imgAlt + '">'
        + '<div class="staff-one-text">'
        + '<header>' + member.name + '</header>'
        + '<header>' + member.title + '</header>'
        + '<p>' + member.about + '</p>'
        + '</div>'
    }
}

// EVENTS PAGE
// Regular Events:
const regularEvents = [
    { eventSocialLink: '#', eventHeader: "Men's Society", eventInfo: "Saturdays at 10:00am in Meeting Area 2" },
    { eventSocialLink: '#', eventHeader: "Women's Society", eventInfo: "Saturdays at 10:00am in Meeting Area 3" },
    { eventSocialLink: '#', eventHeader: "Couple's Society", eventInfo: "1st & 3rd Wednesday at 7:00pm in Meeting Area 1" },
    { eventSocialLink: '#', eventHeader: "Young Adults (ages 18-30)", eventInfo: "1st & 3rd Friday at 6:00pm in Meeting Area 1" },
    { eventSocialLink: '#', eventHeader: "Youth Group (ages 12-17)", eventInfo: "Sundays after the morning service in Meeting Area 3" }
];

const populateRegEvents = () => {
    for (event of regularEvents) {
        document.getElementById('events-one').innerHTML += '<a href="' + event.eventSocialLink + '">'
        + '<header>' + event.eventHeader + '</header>'
        + '<p>' + event.eventInfo + '</p>'
        + '</a>'
    }
}

// Upcoming Events:
const upcomingEvents = [
    { eventSocialLink: "#", eventHeader: "4th-Of-July Cookout", eventDate: "Mon July 4", eventTime: "4:00pm", eventPlace: "Liberty Park" },
    { eventSocialLink: "#", eventHeader: "3-on-3 Basketball Tournament", eventDate: "Sat July 23", eventTime: "10:00am", eventPlace: "Umlauf Middle School" },
    { eventSocialLink: "#", eventHeader: "Crochet-Off", eventDate: "Sat August 6", eventTime: "10:00am-3:00pm", eventPlace: "Church Basement" },
    { eventSocialLink: "#", eventHeader: "Food Truck", eventDate: "Sat August 20", eventTime: "8:00am-noon", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "2022 Kickoff!", eventDate: "Sat August 27", eventTime: "10:30-end of UT game", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "Labor Day Breakfast", eventDate: "Mon September 5", eventTime: "7:00am-noon", eventPlace: "Meeting Area 1" },
    { eventSocialLink: "#", eventHeader: "Feed God's Children Carwash", eventDate: "Sat September 10", eventTime: "8:00am-5:00pm", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "Group Singing", eventDate: "Sun September 20", eventTime: "5:30pm-start of evening service", eventPlace: "Sanctuary" }
]

const populateUpcomingEvents = () => {
    for (const event of upcomingEvents) {
        document.getElementById('events-two').innerHTML += '<a href="' + event.eventSocialLink + '"' + 'class="event">' 
        + '<header>' 
        + event.eventHeader 
        + '</header>' 
        + '<p>' 
        + event.eventDate
        + '</p>'
        + '<p>' 
        + event.eventTime
        + '</p>'
        + '<p>' 
        + event.eventPlace
        + '</p>'
        + '</a>';
    }
}