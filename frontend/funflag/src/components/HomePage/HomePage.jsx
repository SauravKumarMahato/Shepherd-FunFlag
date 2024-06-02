import {
  Typography,
  // Card,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import "./progress.css";
import Shepherd from "shepherd.js";
import { useFlags } from "flagsmith/react";

const HomePage = () => {
  const flags = useFlags(["work_in_progress"]); // only causes re-render if specified flag values / traits change
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardNavigation: true,
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

  tour.addStep({
    id: "1",
    title: "Tour Guide : Step One",
    text: "Please read the following to learn about the features included in this project.",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#welcome-section-first",
      on: "right",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border m-4",
    buttons: [
      {
        text: "Exit",
        action: tour.cancel,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "2",
    title: "Tour Guide : Step Two",
    text: "Footer section for additional links",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#footer-section",
      on: "top",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mb-10",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "3",
    title: "Tour Guide : Step Three",
    text: "Connect with Developer",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#connect-with-developer",
      on: "top",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mb-20",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "4",
    title: "Tour Guide : Step four",
    text: "Navigate to Magic Memory Game Section",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#magic-memory-game-section",
      on: "bottom",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mb-20",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "5",
    title: "Tour Guide : Step Five",
    text: "Magic Memory Game involves laying all the cards face down in a grid. The player flips over two cards at a time, trying to find matching pairs. If a match is found, the player moves on to find other matching cards. If no match is found, the cards are turned back over, and the player tries again. The game continues until all pairs are matched.",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#magic-memory-game",
      on: "right",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mb-20",
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        // Using JS To click on an element
        document
          .querySelector(
            "div.mr-4 > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
          )
          .click();
        resolve();
      });
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "6",
    title: "Tour Guide : Step Six",
    text: "Restart Game clicking this button",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#restart-button",
      on: "right",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mr-10",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "7",
    title: "Tour Guide : Step Seven",
    text: "Navigate to AI Fun Q/A Section",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#ai-fun-qa-navigation",
      on: "bottom",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mr-10",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "8",
    title: "Tour Guide : Step Eight",
    text: "Give input any field to get questions from and then answer the questions to finally get the score.",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#ai-fun-qa-section",
      on: "bottom",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mr-10",
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        // Using JS To click on an element
        document
          .querySelector(
            "div.mr-4 > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)"
          )
          .click();
        resolve();
      });
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "9",
    title: "Tour Guide : Step Nine",
    text: "Answer this questions to get the final score ",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: "#box-quiz-questions",
      on: "bottom",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mr-10",
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        // Using JS To click on an element
        document.querySelector("#button-get-quiz").click();
        resolve();
      });
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "10",
    title: "Tour Guide : Step Ten",
    text: "Now you are all ready to do it your way....",
    scrollTo: {
      behavior: "smooth",
      block: "center",
    },
    attachTo: {
      element: null,
      on: "center",
    },
    cancelIcon: {
      enabled: true,
    },
    classes: "border mr-10",
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Exit",
        action: tour.cancel,
      },
    ],
  });

  const handleTourButton = () => {
    tour.start();
  };

  return (
    <>
      {flags.work_in_progress.enabled ? (
        <Typography variant="h2" color="blue-gray" className="my-40">
          Work in Progress
        </Typography>
      ) : (
        <div className="mx-auto max-w-screen-md py-12">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Welcome to the Game world.
          </Typography>
          <Button className="mt-4" onClick={handleTourButton}>
            Start Tour{" "}
          </Button>

          <Typography
            color="gray"
            className="font-normal mb-16 mt-8"
            id="welcome-section-first"
          >
            Welcome to our interactive learning platform, where magic meets
            mathematics! Dive into the enchanting world of the &quot;Magic
            Memory Card&quot; game, a thrilling memory challenge that tests your
            recall abilities as you match pairs of magical images. Immerse
            yourself in the whimsical graphics and addictive gameplay, perfect
            for all ages.
            <br />
            <br />
            But that&apos;s not all— We also have dynamic quiz feature where
            users can input a specific field or topic, such as &quot;Web
            Development&quot; or &quot;Artificial Intelligence,&quot; and
            receive a set of 10 multiple-choice questions based on that field.
            Users can answer all 10 questions, and upon completion, they receive
            their score indicating the number of correct answers. This
            interactive quiz functionality allows users to test their knowledge
            in various domains and provides an engaging way to learn and assess
            their understanding of different subjects.{" "}
          </Typography>
          {/* <Card className="overflow-hidden">
                                <img
                                        alt="nature"
                                        className="h-[32rem] w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                                />
                        </Card> */}

          {/* <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="inline-block p-2 bg-gray-200">
                <img
                  src="/boy1.png"
                  alt="Character not displayed"
                  className="h-500 w-500"
                />
              </span>
              <input type="text" className="flex-1 p-2 border-0 focus:ring-0" />
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default HomePage;
