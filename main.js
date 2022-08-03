const styleSelectedPageNavLink = () => {
    const elements = document.getElementsByClassName("selected-link"); // returns array of elements w/ matching class
    // Style every item in array:
    for (const element of elements) {
        element.style.color = 'var(--secondary-color)';
        element.style.borderBottom = 'var(--size-4) solid var(--secondary-color)';
    }
}

// EVENTS PAGE
// Array of objects containing info for each event:
const events = [
    { eventHeader: "4th-Of-July Cookout", eventTime: "4:00pm", eventPlace: "Liberty Park" },
    { eventHeader: "3-on-3 Basketball Tournament", eventTime: "10:00am", eventPlace: "Umlauf Middle School" }
]

// Function to populate events.html (run upon loading of page):
let html = ""
const populateEvents = () => {
    
}