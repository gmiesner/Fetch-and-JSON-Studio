//  add code here


// one
// Add code that runs on the window load event.
    // This is done because we can't interact with the HTML elements until the page has loaded.

// two
// Make a GET request using fetch to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json
    // Do this part inside the load event handler.

// three
// Add each astronaut returned to the web page.
    // Use the HTML template shown below.
    // Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)


// bonus

// Display the astronauts sorted from most to least time in space.
// Make the "Active: true" text green, for astronauts that are still active (active is true).
// Add a count of astronauts to the page.
















// one

// window.addEventListener('load', function() {
//
//   })
// });

// two

// window.addEventListener('load', function() {
//   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//     return response.json();
//   })
// });


// three

// window.addEventListener('load', function() {
//
//   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     console.log(json);
//     const container = document.querySelector('#container');
//     let astronauts = '';
//     for (astronaut of json) {
//       astronauts += `
//       <div class="astronaut">
//         <div class="bio">
//           <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//           <ul>
//             <li>Hours in space: ${astronaut.hoursInSpace}</li>
//             <li>Active: ${astronaut.active}</li>
//             <li>Skills: ${astronaut.skills.join(", ")}</li>
//           </ul>
//         </div>
//         <img class="avatar" src="${astronaut.picture}"/>
//       </div>
//       `;
//     }
//     container.innerHTML = astronauts;
//   });
//
// });
