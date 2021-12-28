Please follow the instructions below to practice your React skills.

In `/src/api.js` you'll find some mock data, think of that as a source without doing an API call. In `/src/App.jsx` you'll render what's required below.

## Instructions

1. The `currentUser` constant in `/src/api.js` emulates what would be the logged user in the system. Change it to have your name :)
2. In `/src/App.jsx` render a list on `events` found in `/src/api.js`.
3. Render the list of "attendees" for each event.
4. Make each item in the event list clickable, so that when clicked it shows or hides the list of attendees, therefore simulating the behavior of a collapsible list.
5. For each event in the list, add a button that depending on if you (`currentUser`) are attending the event let's you update your RSVP status (add/remove your user to that event's attendees).
6. Add a counter next to the button added in point 6 to show the time left to RSVP for that event

- If there are days remaining, show something like `Only ${days} day(s) ${hh}:${mm}:${ss} Left`).
- If there is no time remaining show a placeholder like `You can no longer register for this event` and hide the button

7. Sort the events list by name.
8. Add an input element that lets you filter the list by the event's name.

