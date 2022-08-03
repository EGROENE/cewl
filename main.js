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
    { eventHeader: "4th-Of-July Cookout", eventTime: "4:00pm", eventPlace: "Liberty Park" },
    { eventHeader: "3-on-3 Basketball Tournament", eventTime: "10:00am", eventPlace: "Umlauf Middle School" }
]

// Function to populate events.html (run upon loading of page):
const populateEvents = () => {
    for (const event of events) {
        document.getElementById('event-header').innerHTML = event.eventHeader;
        document.getElementById('event-time').innerHTML = event.eventTime;
        document.getElementById('event-place').innerHTML = event.eventPlace;
    }
}