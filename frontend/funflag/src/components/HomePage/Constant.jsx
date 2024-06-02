import Shepherd from "shepherd.js";

// Declare the variable
let myVariable = 1;

// Function to get the variable
export function getMyVariable() {
    return myVariable;
}

// Function to set the variable
export function setMyVariable(value) {
    myVariable = value;
}


export const tour = new Shepherd.Tour({
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardNavigation: true,
    confirmCancel: true,
    confirmCancelMessage: "Are you sure you want to stop the tour?",
    defaultStepOptions: {
      classes: "shadow-md bg-purple-dark",
      scrollTo: true,

      when: {
        show() {
          const currentStepElement = tour.currentStep.el;
          const header = currentStepElement.querySelector(".shepherd-footer");
          const progress = document.createElement("div");
          const innerBar = document.createElement("span");
          const progressPercentage =
            ((tour.steps.indexOf(tour.currentStep) + 1) / tour.steps.length) *
              100 +
            "%";

          progress.className = "shepherd-progress-bar";
          innerBar.style.width = progressPercentage;
          // if only one button
          if (document.getElementsByClassName("shepherd-button").length == 1) {
            progress.style.minWidth = "260px";
          }
          progress.appendChild(innerBar);
          header.insertBefore(
            progress,
            currentStepElement.querySelector(".shepherd-button")
          );
        },
      },
    },
  });

