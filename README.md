

# <p align="center">FunFlag: Fun and Learn</p>

<p align="center">
    <img src="frontend/funflag/src/assets/images/sasa-game-logo.png" width=200 height=200 />
</p>


 Embark on a whimsical journey of memory mastery with our 'Magic Memory Game,' a thrilling challenge that tests recall abilities through enchanting imagery and addictive gameplay, while also enjoying engaging learning adventures in various fields with our 'AI Fun Q/A' feature!"

## Table of Contents

- [Features](#features)
- [Shepherd JS](#shepherd)
- [Demo](#demo)
- [Installation](#installation)
- [Runnig Application](#running-application)
- [Acknowledgement](#)
- [Contributing](#contributing)
- [License](#license)

## Features

**Magic Memory Game: A Whimsical Journey into Memory Mastery**

Our interactive learning platform brings magic and mathematics together! Dive into the enchanting world of the "Magic Memory Card" game, a thrilling memory challenge that tests your recall abilities as you match pairs of magical images. Immerse yourself in the whimsical graphics and addictive gameplay, perfect for all ages.

---

**AI Fun Q/A: Engaging Learning Adventures in Every Field**
A dynamic quiz feature where users can input a specific field or topic, such as "Web Development" or "Artificial Intelligence," and receive a set of 10 multiple-choice questions based on that field. Users can answer all 10 questions, and upon completion, they receive their score indicating the number of correct answers. This interactive quiz functionality allows users to test their knowledge in various domains and provides an engaging way to learn and assess their understanding of different subjects.


## Shepherd

Shepherd makes it simple to create custom user on-boarding tours, trainings and announcements to drive user adoption.

Shepherd enables you to guide users through a custom tour or journey within your app or website. Highly customizable with minimal styles, Shepherd allows for powerful customization while being easy to use. Various frameworks supported including React, Ember, Angular, Vue.js, ES Modules, or plain JavaScript.

Shepherd is available in many frameworks as below:

- [angular-shepherd](https://github.com/shepherd-pro/angular-shepherd)
- [ember-shepherd](https://github.com/shepherd-pro/ember-shepherd)
- [react-shepherd](https://github.com/shepherd-pro/react-shepherd)
- [vue-shepherd](https://github.com/shepherd-pro/vue-shepherd)


### Shepherd Usuages in this project 

- **Multipage Navigation using Shepherd JS**
    - Tour continuation after page navigation
- **Progress Bar**
    - showing progress in Shepherd Tour
- **Custom classes** 
    - overriding default classes

- **Various Other Usages**
  - Scrolling down to an element and continuing guide
  - Using `beforeShowPromise` property for asynchronous tasks before showing a step
  - Show/hide tour based on user visits (e.g., first-time visitor vs returning users)



### ShepherdJS Tour Options

Below are the configuration options available for customizing your ShepherdJS tour:

| Option                  | Description |
|-------------------------|-------------|
| **classPrefix**         | Prefix added to the class names of the ShepherdJS created elements. This helps with CSS element selectors for custom styling. |
| **confirmCancel**       | If true, will trigger a `window.confirm` before cancelling. This prevents the user from accidentally exiting the tour. |
| **confirmCancelMessage**| The message to display in the confirm dialog created with the above option. |
| **defaultStepOptions**  | Default options for Steps created through `addStep`. Saves you from repeating step-related options each time. |
| **exitOnEsc**           | Exiting the tour with the escape key will be enabled unless this is explicitly set to false. |
| **keyboardNavigation**  | Navigating the tour via left and right arrow keys will be enabled unless this is explicitly set to false. |
| **stepsContainer**      | An optional container element for the steps. If not set, the steps will be appended to `document.body`. |
| **modalContainer**      | An optional container element for the modal. If not set, the modal will be appended to `document.body`. |
| **steps**               | An array of step options objects or Step instances to initialize the tour with. (We will be adding the steps later and not using this.) |
| **tourName**            | An optional “name” for the tour. This will be appended to the tour’s dynamically generated id property, which is also set on the body element as the `data-shepherd-active-tour` attribute whenever the tour becomes active. Also can be used for theming. |
| **useModalOverlay**     | Whether or not steps should be placed above a darkened modal overlay. If true, the overlay will create an opening around the target element so that it can remain bright. |



Refer to Shepherd [Documentation](https://docs.shepherdpro.com/guides/install/) for more details knowledge.

## Demo
<!-- demo link -->
- Demo video using shepherd

https://github.com/SauravKumarMahato/Shepherd-FunFlag/assets/83631265/e18b0db2-a1f5-486e-b8ad-188a74afa80a


- Demo video without shepherd

https://github.com/SauravKumarMahato/FunFlag/assets/83631265/032b587e-80c5-4ece-8205-d1fa76b8e8ae




## Installation

### Requirements 
- Gemini [API_KEY](https://ai.google.dev/)  


### Setup

1. Clone the repository:

```bash
git clone https://github.com/SauravKumarMahato/Shepherd-FunFlag.git
```

2. Navigate to the cloned directory:

```bash
cd Shepherd-FunFlag/frontend/funflag
```

3. Install the required dependencies:

```bash
yarn install 
```

4. Add your GEMINI api key at the top [frontend/funflag/src/components/AIFun/AIFun.jsx](frontend/funflag/src/components/AIFun/AIFun.jsx) files having section something like below: 

```python
const API_KEY = 'YOUR_GEMINI_API_KEY'
```

## Running Application

For running the Projet write below code in your terminal.

```bash
yarn run dev
```

## Acknowledgement 

All the icons for the game and logo has been used from [FLATICON](https://www.flaticon.com/)

## Contributing

We encourage contributions to enhance and elevate [FunFlag](https://github.com/SauravKumarMahato/FunFlag.git). Don't hesistate to submit issues, suggest new features, or initiate pull requests. Kindly follow our Code of Conduct for a respectful and collaborative environment.

## License

This project is licensed under the [MIT License](/LICENSE).
