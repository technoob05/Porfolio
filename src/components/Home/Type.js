import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
          <Typewriter
        options={{
          strings: [
            "AI Engineer Intern",
            "Machine Learning Engineer",
            "Kaggle Expert",
            "NLP Researcher",
            "Data Scientist",
            "Content Creator",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
  );
}

export default Type;
