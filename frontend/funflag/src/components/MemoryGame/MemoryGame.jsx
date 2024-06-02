import { useState, useEffect } from "react";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.png";
import image8 from "../../assets/images/8.png";
import image9 from "../../assets/images/9.png";

import PropTypes from "prop-types";

import default_image from "../../assets/images/box.png";
import {
  Typography,
  // Card,
} from "@material-tailwind/react";
import { useFlags } from "flagsmith/react";
import { getMyVariable } from "../HomePage/Constant";

const Card = ({ card, index, onClick }) => {
  return (
    <div
      className="flex justify-center items-center bg-gray-200 w-32 h-32 cursor-pointer shadow-md"
      onClick={() => onClick(index)}
    >
      <div className="card-content p-3">
        {card.isFlipped ? (
          <img
            src={card.image}
            alt={card.value}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={default_image}
            alt="?"
            className="w-full h-full object-cover "
          />
        )}
      </div>
    </div>
  );
};

// const tour = new Shepherd.Tour({
//   useModalOverlay: true,
//   exitOnEsc: true,
//   keyboardNavigation: true,
//   confirmCancel: true,
//   confirmCancelMessage: "Are you sure you want to stop the tour?",
//   defaultStepOptions: {
//     classes: "shadow-md bg-purple-dark",
//     scrollTo: true,

//     when: {
//       show() {
//         const currentStepElement = tour.currentStep.el;
//         const header = currentStepElement.querySelector(".shepherd-footer");
//         const progress = document.createElement("div");
//         const innerBar = document.createElement("span");
//         const progressPercentage =
//           ((tour.steps.indexOf(tour.currentStep) + 1) / tour.steps.length) *
//             100 +
//           "%";

//         progress.className = "shepherd-progress-bar";
//         innerBar.style.width = progressPercentage;
//         // if only one button
//         if (document.getElementsByClassName("shepherd-button").length == 1) {
//           progress.style.minWidth = "260px";
//         }
//         progress.appendChild(innerBar);
//         header.insertBefore(
//           progress,
//           currentStepElement.querySelector(".shepherd-button")
//         );
//       },
//     },
//   },
// });

const MemoryGame = () => {
  const flags = useFlags(["work_in_progress"]); // only causes re-render if specified flag values / traits change
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const shouldTourContinue = urlParams.get("shtc");
  // // Start the tour if we get the correct
  // // GET param value
  // if (shouldTourContinue == "t") {
  //   tour.start();
  // }

  useEffect(() => {
    const generateCards = () => {
      const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
      ];

      const initialCards = images.concat(images).map((image, index) => ({
        value: `Image ${index + 1}`,
        image,
        isFlipped: false,
        isMatched: false,
        id: index,
      }));

      setCards(shuffleArray(initialCards));
    };

    console.log(getMyVariable());

    generateCards();
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;

    if (flippedIndices.length === 1) {
      const firstIndex = flippedIndices[0];
      if (newCards[firstIndex].image === newCards[index].image) {
        newCards[firstIndex].isMatched = true;
        newCards[index].isMatched = true;
        setFlippedIndices([]);
      } else {
        setFlippedIndices([firstIndex, index]);
        setTimeout(() => {
          newCards[firstIndex].isFlipped = false;
          newCards[index].isFlipped = false;
          setCards(newCards);
          setFlippedIndices([]);
        }, 500);
      }
    } else {
      setFlippedIndices([index]);
    }

    setCards(newCards);
  };

  const handleRestart = () => {
    const resetCards = cards.map((card) => ({
      ...card,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(shuffleArray(resetCards));
    setFlippedIndices([]);
  };

  return (
    <>
      {flags.work_in_progress.enabled ? (
        <Typography variant="h2" color="blue-gray" className="my-40">
          Magic Memory Game Section Under Construction
        </Typography>
      ) : (
        <div className="flex flex-col items-center space-y-4 font-sans mt-12 mb-20">
          <h1 className="text-3xl font-light mb-4">
            Welcome to Magic Memory Game
          </h1>
          <div
            className="lg:grid lg:grid-cols-6 grid grid-cols-2  gap-4"
            id="magic-memory-game"
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                onClick={handleCardClick}
              />
            ))}
          </div>
          <button
            id="restart-button"
            onClick={handleRestart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Restart Game
          </button>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    value: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MemoryGame;
