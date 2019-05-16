### The app formaly known as hrext09-my-cruddy-app, is now:

# Poetry on the Page :writing_hand:
> A writer's heart, a poet's heart, an artist's heart, a musician's heart is always breaking. It is through that broken window that we see the world... - Alice Walker

## Poetry on the Page Overview

	- Randomly generates a verse of poetry

	- Allows you to add your own words to the database

	- Allows you to drag and drop the words to rearrange the sentence on the page

	- Also provides alternative words that would fit the poetic model

## The Story :scroll:

Jean [ʒɑ̃] :neckbeard:, after a rough day of killing dreams has a magical idea! 

'Some poetry would sure cheer me up!', he quickly surmises only to be immediately entangled in the putrid bowels of writers block.
You see, Jean is woefully encumbered with fathomless feelings of laziness and the mere idea of birthing this poem seems a pregnancy of untold weight.

'Finally an idea!', Jean thinks, at a decibel level clearly perceptible to the myriad of clown heads which adorn his shack. This shack, it turns out, is worthy of discussion. Consisting of little more than a bathroom curtain, some plywood, and two computers; one of which is cutting edge, the other, a Commodore 64 with a tape drive, most recently used yesterday to play the 80's Infocom hit 'The Leather Goddesses of Phobos'. 

But what about this idea that awakened the clowns you ask? We musn't forget that. Perhaps he could wake up his wife and see if she could churn out some verse. The likes of which would surely reanimate these scribe hacks of yesteryear. But alas! it's 3am and the poetry she would likely spout is far from the type of poetry he is looking to hear at such an early hour. 

His eyes are drawn to the newer computer, one that is used for serious stuff. So many years and endless git commits helping companies generate more and more revenue. Could it be? Could it actually be that perhaps this is the answer to his woe? The stoic screen stares back, a mirror to his own soul. The years of typing lines of antipathetic code has also constructed an unearthly castle of inner torment. A dark and dreary landscape of walled emotion. How is it possible for this screen, who shares his own identity, could be the answer to his calling? Is it true that analog is only binary at a distance?

And so we enter a world where the computer now writes these musical words...

## So what does it do exactly?

When presented with the screen, Jean sees that he has some options. First, an obvious, and particularly friendly looking button catches his eye. It is clear that this button is powerful. 'Generate Poem' is all it says and Jean's correct suspicion is that this button will magically, some would say even god-like :godmode: power of being able to display a random verse on the screen. His hands slowly constrict to their default position as they begin to address the keyboard.

A series of words... A line of poetry in fact! appear confidently on the page:

	`insert example funny line here`

'What is this?', he exclaims! A knot just behind his sternum that had been sinched many nights ago, begins to become unraveled. An audible 'Ahhhh', can be heard. Not only by the clown heads, but also the corgi, who was silently sleeping at his feet. The corgi, being a corgi, again gracefully pierces the veil of the slumber which he recently crossed.

'That was fantastic! But what if I could move the words around even select new words?', he thinks. As if the thought accelerated through the present, he sees more options and other words to drag as he pleases:

   `example of changing the original poem with other suggested words`

Jean sighs, ever so slightly, as he feels his heart awaken. The walled structure holding a desparate watch over his soul flees.

# :love_hotel:

## Development and Design

:heavy_exclamation_mark: *RESERVATIONS*

I'm not currently sure if this type of project would be in-line with the objective ambition for the project. But it does allow the ability for me to work pretty heavy in front-end design, which I am very lacking. From the back-end programming side, it allows the ability to include more interesting technologies, such as using Tensor Flow to intelligently pick words based on machine learning. I've also thought about creating a blockchain for every poem that is created in order to gain some basic experience in blockchain and to be able to create an immutable chain of poetry.


### What Problem Does this Solve :thinking:

This is an online art installation. It's intended for the enjoyment of anyone that has every played with magnetic poetry or anyone who wants to generate a poem. No major world problems are attempting to be solved through this art installation.

### Dreamer vs. Realist :man_artist:

I have a week to develop a working prototype. I am realitively new to front-end develpment, and only have played around with some Coursea courses for tensor flow and blockchain development. I am currently unsure what is realistic in this project. As I begin to develop the project.

### Minimal Viable Product :mountain:

#### MVP #1: The ability for a user to click a button and then return a unique poem based on parts of speech for each word and order it in a way that makes sense

#### MVP #2: Stylize the product so that it is aesthetically pleasing. This includes adding full drag and drop capabilities to the individual magnets and displaying a pool of other magnets

#### MVP #3: Incorporate machine learning in to the poetry generation using tensorflow.js. The idea is that this could potentially increase the quality of the generated poems

#### MVP #4: Create a simple blockchain to record each randomly generated poem allowing the app to become a dapp that stores each poem created in the blockchain for others to view

## Tasks :calendar:

### Basic Reqs
- [ ] Where to store data? (localstorage)
	This data store could range from a simple array with words to a more complex object structure which includes keys for rhyming, type of word, etc. This will start with basic arrays based on the type of word similar to the way the Twiddler application generated tweets
- [ ] How to caputure data? (web form)
	The first product will allow to generate a verse of poetry to view. More complex features, such as having various types of selections for tuning the specific generation to a desired genre or emotion
- [ ] How to modify data? (update action, delete action)
	Multiple items will need to be updated at various times on screen. The bulk of the page will consist of virtual magnets. These magnets can be moved and rearranged similar to the way one would use the fridge for magnetic poetry
- [ ] How to view data? (style?)
	This will be styles as a menu header with basic information and a footer with contact information and app information. The body of the page will be mostly draggable.
- [ ] UI/UX considerations (how are we going to use this)
	UI/UX will play a large part in this development. For aesthetic and functional purposes, the page will consist of a header and a footer. The body of the page will be completely draggable with the magnets it generates.

### Advanced Reqs
- [ ] Integrate the word selection with TensorFlow.js. Using pre-trained datasets if possible.
- [ ] Create a blockchain to save each poem created so that you build a natural immutable flow of each created verse

#### The above advanced requirements were included because I have a personal interest in AI/blockchain development and was looking for a way to integrate these interests. The basic requirements will extend from the way dataGenerator.js creaeted tweets in the Twiddler application. A large amount of effort will be put in to stylizing the front-end since I feel that really understanding layouts, CSSGrid, flexbox, etc. is something that I could use work on. 

## Notes on the app

### The live state of this app can currently be accessed at: 
#### https://lbgraham.github.io/poetry-on-the-page/

### It is currently non-functional and does not include any working features, so not much to see... 
### yet...


