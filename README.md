# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

#### Frontend Mentor Challenge: users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

#### Personal Challenge:
- Test to confirm the form was validated as a whole and respond with with a confirmation
- Create a confirmation/welcom page informing the user that their form submission was successful; provide a link back to the home page
- Add an alternate error message for the email field in case it was left blank
- Ensure page resizing was as responsive as possible and not just at breakpoints


### Screenshot

![Screenshot](./screenshots/Screenshot.png)
![Screenshot @1440px with error](./screenshots/Screenshot-1440Error.png)
![Screenshot @375px](./screenshots/Screenshot-375px.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/jguleserian/FMC-IntroComponentWithSignupForm.git)
- Live Site URL: [GitHub Pages](https://https://jguleserian.github.io/FMC-IntroComponentWithSignupForm/)

## My process

Without too much detail, my workflow consists of:
- Setting up the project: folders, additional files, Figma, link HTML as necessary, put structure in my CSS stylesheet
- Determine structure and set containers in HTML
- Set tenative detailed structure for each element in HTML
- Set up styles as variables according to the brief and reset the CSS
- Style HTML elements from top to bottom
- Restyle for different breakpoints
- Add JavaScript
- Test/debug
- Clean up the code; leave notes as necessary
- Publish to GitHub and Frontend Mentor

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

My purpose in doing this particular challenge was to practice my JavaScript skills, especially as it has to do with form validation and manipulating the DOM. What I discovered was that my mastery over performing these skills has increased over my last attempt and I was able to accomplish the entire project with very little "looking things up." This was a confidence booster.

**CSS:** Since JavaScript cannot add pseudo classes, I had to find a way to add the error icon indirectly, by adding a class that held the icon as a piece of content. 

**JavaScript:** While I felt confident with writing the JS, I wondered about better, more efficient ways to accomplish the same thing with less code. For example, instead of testing each field separately, I thought about creating either and object where each key/value pair is converted into an array and placed in a larger array, or start with the array itself. Then, I could write one function that steps through the array one pair at a time to test it. of course, the email field would be slightly different since it is also checked against a regular expression.

My second issue with the JS was that I wanted to build a database that would retain the user information in a separate file (for permanent retention). I was not aware of a way to do this with vanilla JS. If I had used Node.js or perhaps AJAX (of which I am only a beginner at this point). If anyone reading this has a suggestion, I would love to hear it.

### Continued development

Every time I complete a Frontend Mentor Challenge, I feel more competent, taking less time to accomplish the same tasks, opening doors of new ways to accomplish something, and discovering things that I didn't know could, or could *not* be done.

Areas in which I am growing, but in which I also want more familiarity and expansion of basic skills are JavaScript, AJAX, using classes, making objects, and readily using JSON formats to transfer information to and from a server or to store in a database.

Beyond the basic three, HTML, CSS and JS, I soon want to incorporate Node.js (and other elements from NPM) and other backend technologies and skills such as APIs.

### Useful resources

- [Online Markdown Guide](https://www.markdownguide.org/) - As I look to get better with MD, this is the goto guide.
- [Dillinger: Online Markdown Editor](https://dillinger.io/) - Popular MD online editor.

## Author

- GitHub - [@jguleserian](https://github.com/jguleserian)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/jguleserian)
- LinkedIn - [@jeffguleserian](https://www.linkedin.com/jeffguleserian)
- Discord - [@JGuleserian#9255](https://discord.gg/q4gWbgBs)

