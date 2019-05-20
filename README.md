## Notes on the app :notes:

### The live state of this app can currently be accessed at: 

#### https://lbgraham.github.io/poetry-on-the-page/

**Note:** Live app is currently functional, but it pulls data from the Twiddler words rather than from the API. The API I am currently using for the Shakespeare sonnets doesn't use https. Github hosting does not dig that at all.

## App Status:

**Note: Currently only testing under Google Chrome for Mac (Version 74.0.3729.157 (Official Build) (64-bit))**

The app currently has basic functionality, but still needs to address some of the tasks listed in the *Outstanding Tasks* section

### The app formaly known as hrext09-my-cruddy-app, is now:

# Poetry on the Page :writing_hand:
> A writer's heart, a poet's heart, an artist's heart, a musician's heart is always breaking. It is through that broken window that we see the world... - Alice Walker

## Poetry on the Page Overview

	- Randomly generates a verse of poetry

	- Creates a pool of extra 'magnets' for you to play with and arrange your own line of poetry on the screen

	- Includes dragging functionality for arranging words

## The Story :scroll:

Jean [ʒɑ̃] :fr: :neckbeard:, after a rough day of killing dreams, has a magical idea! 

'Some poetry would sure cheer me up!', he quickly surmised only to be immediately entangled in the putrid bowels of writers block. You see, Jean is woefully encumbered with fathomless feelings of laziness and the mere idea of birthing this poem seems a pregnancy of untold weight.

'Finally an idea!', Jean thinks, at a decibel level clearly perceptible to the myriad of clown heads which adorn his shack. This shack, it turns out, is worthy of discussion. Consisting of little more than a bathroom curtain, some plywood, and two computers; one of which is cutting edge, the other, a Commodore 64 with a tape drive :vhs:, most recently used yesterday to play the 80's Infocom hit 'The Leather Goddesses of Phobos'. 

But what about this idea that awakened the clowns you ask? Well, perhaps he could wake up his wife and see if she could please his ears with verse, the likes of which would surely reanimate these scribe hacks of yesteryear. But alas! It's 3am and the poetry she would likely spout is far from the type of poetry he is looking to hear at such an early hour. 

His eyes are drawn to the newer computer, one historically utilized for serious stuff. So many years and endless git commits helping companies generate more and more revenue. Could it be? Could it actually be that perhaps this is the answer to his woe? The stoic screen stares back, a mirror to his own soul. The years of typing lines of antipathetic code has also constructed an unearthly castle of inner torment. A dark and dreary landscape of walled emotion. How is it possible for that this screen, who shares his very own identity, would be the answer to his calling? Could it in fact be true the fluid caress of analog be simply binary at a distance?

## So what does it do exactly?

When presented with the screen, Jean sees that he has some options. First, an obvious, and particularly friendly looking button catches his eye. 'Create Poetry' is all it says and Jean's correct suspicion is that this button will magically, some would say even god-like :godmode: power of being able to display a random verse on the screen. His hands slowly constrict to their default position of crooked fingers as they begin to address the keyboard.

A series of words... A line of poetry in fact! appear confidently on the page:

	`insert example funny line here`

'What is this?', he exclaims! A knot just behind his sternum that had been sinched many nights ago, begins to become unraveled. An audible 'Ahhhh', can be heard. Not only by the clown heads, but also the corgi, who was silently sleeping at his feet. The corgi, being a corgi, again gracefully pierces the veil of the slumber which he recently crossed.

'That was fantastic! But what if I could play with the words the way we did as children on the fridge?', he thinks. And so it happens.

Jean sighs, ever so slightly, as he feels his heart awaken. The walled structure holding a desparate watch over his soul flees.

# :love_hotel:

## Development and Design

:heavy_exclamation_mark: *RESERVATIONS*

I'm not currently sure if this type of project would be in-line with the objective ambition for the project. But it does allow the ability for me to work pretty heavy in front-end design, which I am very lacking. From the back-end programming side, it allows the ability to include more interesting technologies, such as using Tensor Flow to intelligently pick words based on machine learning, and potentially basic blockchain development exposure.


### What Problem Does this Solve :thinking:

This is an online art installation. It's intended for the enjoyment of anyone that has every played with magnetic poetry or anyone who wants to generate a poem. No major world problems are attempting to be solved through this art installation.

### Dreamer vs. Realist :man_artist:

I have a week to develop a working prototype. I am realitively new to front-end develpment, and only have played around with some Coursea courses for tensor flow and blockchain development. I am currently unsure what is realistic in this project. As I begin to develop the project.

### Minimal Viable Product :mountain:

#### MVP #1: The ability for a user to click a button and then return a unique poem based on parts of speech for each word and order it in a way that makes sense

#### MVP #2: Stylize the product so that it is aesthetically pleasing. This includes adding full drag and drop capabilities to the individual magnets and displaying a pool of other magnets

#### MVP #3: Incorporate machine learning in to the poetry generation using tensorflow.js.

#### MVP #4: Create a simple blockchain to record each randomly generated poem.

## Outstanding Tasks :calendar:

### **Note:** At this point I have 3 main (perhaps lofty) goals I would like to accomplish before Friday. However, I spent quite a bit of time working on this over the weekend and have quite a few things to take care of during the week that may limit the time I can put in to it.

#### Immediate goals

- [ ] Integrate a python tensorflow Shakespeare based text generator that uses RNN with eager execution. This algorithm produces Shakespeare-like poetry and produces some interesting pieces of text that I believe would be a funny addition to the application
- [ ] Build a simple blockchain in javascript from scratch to store the created poems on a blockchain (just for fun, absolutely no value to the application)
- [ ] Create the ability to collect all of the magnets that are located towards the top of the page and save their state to generate an email and post to social media with the lovely poem you created (probably won't make it to this one)

##### Other Tasks

- [√] General clean-up and refactoring of code (Mostly happy with the code currently, but need to work on app.js a bit)
- [√] Add randomization to the initial placement of the logo magnets in the header on page load
- [√] Add randomization to the magnets that form the inital poem once is is generated (Ok with this for now)
- [√] Add randomization to the extra magnets that are presented at the bottom when a poem is generated (Mostly complete, could be improved later)
- [√] Add ability to pull a line from a sonnet from Shakespeare via API as a interim step to machine learning (does not work on Github Pages - uses a insecure API)
- [√] Stylize the 'Create Poetry' button for aesthetics (Looks ok to me for now)
- [√] Improve overall page aesthetic (Overall happy with the current aesthetic once I get the random placement of the extra magnets implemented)
- [ ] Add an additional selection to display an entire generated poem or generated piece of prose
- [ ] Add API endpoint for obtaining randomly generated poem
- [√] Add support for mobile devices (But the formatting is blah. It does work though)

### Basic Reqs - NOTE: Core feature ideas (except AI text generation) is complete. Improvement tasks are listed above
- [√] Where to store data? (localstorage)
- [v] How to caputure data? (web form)
- [√] How to modify data? (update action, delete action)
- [√] How to view data? (style?)
- [√] UI/UX considerations (how are we going to use this)

#### AI/machine learning was included because I have a personal interest in these areas and wanted to see what I was capable of during this project. The basic implementation of the text generation was based on the Twiddler application. Positioning and moving elements around the page is one of my weak skill areas and I wanted to gain some experieince with this.


