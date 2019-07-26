Internome (Client)
===============================
Introduction
------------
The best way to increase endurance in any given physical activity is via interval training: short bursts of intense exercise punctuated by perios of fairly low-intesity training. As a drummer, I have been frustrated by the lack of resources available to help me get better as a player.

It is hoped that this application will remedy at least some of the this frustration. The basic idea is to have the application play metronomic clicks at increasing and decreasing tempo, allowing the practitioner to practice ruduments or patterns (or scales) to intervals to increase endurance and dexterity.

For more information on interval training, please visit the Wikipedia site [here](https://en.wikipedia.org/wiki/Interval_training).

For more information about drumming please visit the [Percussive Arts Society](https://www.pas.org/). NOTE: ALthough a lot of their resources used to be free (to use), you now unfortunately have to be a member to utilize many of their resources.

For notes about the Back End, please see the README [here](https://github.com/gbbenson68/internome-api).

The client is deployed on GitHub Pages and can be found [here](https://gbbenson68.github.io/internome-client/).

Relevant Links
--------------
*   The **API repository** can be found [here](https://github.com/gbbenson68/internome-api).
*   The **deployed client** can be found [here](https://gbbenson68.github.io/internome-client/).
*   The **deployed API** can be found [here](https://tranquil-everglades-98645.herokuapp.com/). _(NOTE: Due to the way Heroku works, you will only get be able to get the following response:_ ```Cannot GET /```_.)_

Technologies Used
-----------------
The web application client was written with the help of and utilizing the following technologies:
*   HTML
*   JavaScript
*   React (with Hooks)
*   CSS/SASS/Bootstrap
*   Node.js
*   git/GitHub
*   Atom
*   All colors were derived with the help of <https://www.quackit.com/css/css_color_codes.cfm>.
*   Hosted by GitHub Pages.

_This application was developed on Ubuntu 18.04.2 LTS. No Microsoft developers were harmed during the making of this application._

Development and Planning
------------------------
In general, getting the front end to work with React was an extremely frustrating process. It would been have been easier (and quicker) to use the standard HTML/JavaScript/CSS solutions that were used in previous projects. However, I (stupidly) decided to challenge myself and choose to implement in React. In class, I found React to be easy to use. However, in practice, the quirks and idiosynchracies of React were a steep learning - a learning curve which I have yet to overcome.

The planning was rather difficult, as I was still (and still am) getting used to React as a replacement for the usual HTML and JavaScript/jQuery. The use of the React framework means that you have to forego direct control of the DOM for React's rendering of a virtual DOM: it's like learning to tell somebody else how to drive exactly the way YOU want to drive to get where you want - you don't have to immediately deal with the idiots on the road, but you have to deal with whatever feedback the driver gives you and adjust accordingly. To reiterate, it was frustrating.

The best thing about React is that the rendering is fantastic: you can nest and render any given component almost at will. The problem is the JSX, a sort of combination of JavaScript and XML which seemingly enables you to let JavaScript and HTML intermingle. However, as I've discovered, this intermingling is problematic: because of the combining of JavaScript and XML into a single "language", the line between HTML and JavaScript becomes blurred, and it's hard to know where one stops and the other begins.

I still believe that choosing React was a great learning experience, but given that we were only given four days, it was probably a little overambitious to believe that I could create a useful web application in React. There is still too much to learn and experience to make it useable (for me).

#### Web Audio API
When I started this project, I was really concerned about the reliability of the native JavaScript ```setTimeout()``` and ```setInterval()``` functions. As JavaScript is single-threaded, the timing of the these methods is hit or miss, at best. Luckily. the Web Audio API baked into most browsers offers a more reliable solution. However, I was unable to learn enough about it to make a viable solution.

#### Data Validation
Most of the data is validated by the HTML (via JSX), so that no crap data can be entered. All entered numbers must be integer values.

Wireframes
----------
The wireframe for this is kinda simple.

![Imgur](https://i.imgur.com/6StALHn.jpg)
[Imgur](https://i.imgur.com/SfLhFsc.png)
Screenshots
-----------
Here are a few screenshots of the application:

Home:
![Imgur](https://i.imgur.com/SfLhFsc.png)

Creating a profile:
![Imgur](https://i.imgur.com/TyBfnto.png)

User Stories
------------
Must haves:

1.  As a user I want to be able to specify a minimum starting tempo.
2.  As a user, I want to be able to specify a maximum peak tempo.
3.  As a user, I want to be able to specify the number of intervals.
4.  As a user, I want to be able to specify the duration of the session.
5.  As a sign-in user, I want to be able to save my settings in a named profile that can be used later.

Nice to haves/wish list:

1.  As a signed-in user, I want to be able to have my session visualized so that I can picture where I am (in the session) and what is left.
2.  As a signed-in user, I want to be able to choose from several types of simple interval training routines.

Basic Directory Structure
-------------------------
```
src
```
This is the highest-level directory.
*   ```index.js``` - the starting point - from where all other React elements are invoked
*   ```App.js``` - the starting point of the application
*   ```apiConfig.js``` - the main configuration
*   ```App.scss``` - the main Sass configuration file

```
src/auth
```
*   ```api.js``` - holds the API calls for the authentication processes
*   ```messages``` - holds the mesages for the authentication processes

```
src/auth/components
```
*   ```AuthenticatedRoute.js``` - the authenticated route component
*   ```ChangePassword.js``` - the change password component
*   ```SignIn.js``` - the sign-in component
*   ```SignOut.js``` - the sign-out component
*   ```SignUp.js``` - the sign-up component

```
src/css
```
Holds ```index.scss```, the main Sass styling component.

```
src/header
```
*   ```Header.js``` - the header component
*   ```Header.scss``` - the header styling component

```
src/metronome
```
Holds ```messages.js```, where messages are stored

```
src/metronome/components
```
*   ```CreateProfile.js``` - creates a user PROFILE
*   ```DeleteProfile.js``` - deletes a user PROFILE
*   ```DisplayInternome.js``` - displays the internome elements
*   ```DisplayProfile.js``` - displays a given user PROFILE
*   ```DisplayProfiles.js``` - displays all user PROFILEs
*   ```UpdateProfile.js``` - updates a user PROFILE

```
src/metronome/css
```
Holds ```metronome.scss```, the Metronome styling component.

Installation Instructions
-------------------------
Before you attempt to install and deploy this API, please ensure that you have the following software installed on your machine of choice (NOTE: These instructions apply mainly for Linux or macOS X systems. For Windows systems, you may want to think about [Cygwin](http://www.cygwin.com/) or [Git for Windows](https://gitforwindows.org/).):
*   git CLI - installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
*   [Node.js](https://nodejs.org/en/download/) - contains the Node Package Manager (npm).
*   C/C++ compiler - most modern computer languages are actually implemented in C or C++, so it would be wise to install a C/C++ compiler, the most popular being [gcc/g++](https://gcc.gnu.org/) on Linux and macOS X.

1.  From this GitHub repository, [fork](https://help.github.com/en/articles/fork-a-repo) and [clone](https://help.github.com/en/articles/cloning-a-repository) into your local environment.
2.  Change into (```cd```) the root directory of the cloned repository and execute ```npm install```. This will install any required Node.js modules. The npm is fairly verbose, so if there are any missing modules, you will be notified.
3.  You can then run the server in a local environment by running ```mpm start```.
4.  To deploy on GitHub Pages, issue ```npm run deploy``` from within your repository.

Known Bugs and To-dos
---------------------
_Feel free to contact me at guy dot b dot benson at gmail dot com if you've found a bug, or have a suggestion about functionality. Please include an appropriate subject so I don't think that it's spam!_

#### Known Bugs
*   I don't know of any bugs in this application, but that's mainly due to an overall lack of functionality.

#### To-Dos
As there isn't a lot of functionality in this appliation, there are many TO-DOs:
*   **Implment a metronome** - despite the fact that this project is called **Internome**, there is no metronome. I would like to remedy that.
*   **Create different internome types** - The original types of interval profile is sinusoidal, but other types shoud be made available: square wave, linear, etc.
*   **Visualization** - my original prototype (in JavaScript/HTML/CSS) was a sinusoidal wave without sound and no timing. Some sort of visualization shoud be made available to the user.

_Please check the experimental branch for the latest goings-on!_

About Me
--------
I am an aerospace engineer by education and a software engineer by experience. I’ve always been intrigued by using software to solve practical problems, whether it be something as simple as providing an HTML interface for viewing invoices or something as complex as modeling the fluid flow through a rocket thruster. I recently decided to upgrade my skill set with an immersive software engineering program at General Assembly, and I am now taking my ambitions to the next level. I am eager and excited to take on those sometimes seemingly unsurmountable challenges that affect us all.
