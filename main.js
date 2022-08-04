const styleSelectedPageNavLink = () => {
    const elements = document.getElementsByClassName("selected-link"); // returns array of elements w/ matching class
    // Style every item in array:
    for (const element of elements) {
        element.style.color = 'var(--secondary-color)';
        element.style.borderBottom = 'var(--size-4) solid var(--secondary-color)';
    }
}

// EVENTS PAGE
// Set up template w/ corresponding properties (ids/classes that correspond to object keys in events array) in html, then populate using js function for as many objects are in events array (use a for of or a for loop)
// NEXT: FIND A WAY TO CREATE HTML WITH JS FUNCTION (within loop, so new item is made for each object in events array)
// If not possible to populate html using js, make a separate function for each upcoming event & run upon pageload
// Array of objects containing info for each event:
const events = [
    { eventSocialLink: "#", eventHeader: "4th-Of-July Cookout", eventDate: "Mon July 4", eventTime: "4:00pm", eventPlace: "Liberty Park" },
    { eventSocialLink: "#", eventHeader: "3-on-3 Basketball Tournament", eventDate: "Sat July 23", eventTime: "10:00am", eventPlace: "Umlauf Middle School" },
    { eventSocialLink: "#", eventHeader: "Crochet-Off", eventDate: "Sat August 6", eventTime: "10:00am-3:00pm", eventPlace: "Church Basement" },
    { eventSocialLink: "#", eventHeader: "Food Truck", eventDate: "Sat August 20", eventTime: "8:00am-noon", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "2022 Kickoff!", eventDate: "Sat August 27", eventTime: "10:30-end of UT game", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "Labor Day Breakfast", eventDate: "Mon September 5", eventTime: "7:00am-noon", eventPlace: "Meeting Area 1" },
    { eventSocialLink: "#", eventHeader: "Feed God's Children Carwash", eventDate: "Sat September 10", eventTime: "8:00am-5:00pm", eventPlace: "Church Parking Lot" },
    { eventSocialLink: "#", eventHeader: "Group Singing", eventDate: "Sun September 20", eventTime: "5:30pm-start of evening service", eventPlace: "Sanctuary" }
]
// Function to populate events.html (run upon loading of page):
const populateEvents = () => {
    for (const event of events) {
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