export const STAGES = {
  0: [
    {
      image: 1,
      debt: 0,
      social: 0,
      nextStage: 1,
      debtTolerance: 2,
      description: 'A Turing machine is a hypothetical machine thought of by the mathematician Alan Turing in 1936. Despite its simplicity, the machine can simulate any computer algorithm, no matter how complicated it is!'
    }
  ],
  1: [
    {
      image: 2,
      debt: 0,
      social: 0,
      nextStage: 2,
      debtTolerance: 2,
      description: 'The term “Artificial Intelligence” was first coined by John McCarthy, a young computer scientist, in 1956 for a conference at Dartmouth University. It was discussed here how AI should be approached.'
    }
  ],
  2: [
    {
      image: 3,
      debt: 0,
      social: 0,
      nextStage: 4,
      debtTolerance: 2,
      description: 'Top-down programming tends to generate modules that are based on functionality, usually in the form of functions or procedures. Typically, the high-level specification of the system states functionality. This high-level description is then refined to be a sequence or a loop of simpler functions or procedures, that are then themselves refined, etc.'
    },
    {
      image: 4,
      debt: 1,
      social: 0,
      nextStage: 3,
      debtTolerance: 0,
      description: 'An approach to development which attempts to simulate networks of artificial neurons that are similar to the neurons in the human brain. They then investigate what aspects of cognition can be recreated in these artificial networks.'
    }
  ],
  3: [
    {
      paragraph: '<p>Not enough technology. Gain 1 charge of <span>Debt</span>.',
      nextStage: 2
    }
  ],
  4: [
    {
      image: 5,
      debt: 1,
      social: 0,
      nextStage: 5,
      debtTolerance: 2,
      description: 'Shakey could make a map of the area around it and navigate through it. Although it seems advanced, it was painfully slow, and had to update its map every time it moved a little bit forward for up to an hour.'
    }
  ],
  5: [
    {
      paragraph: '<p>Failure. AI Winter initiates.<br/>Gain 1 charge of <span class="debt">Debt</span>.</p>',
      nextStage: 6
    }
  ],
  6: [
    {
      image: 6,
      debt: 0,
      social: 0,
      nextStage: 7,
      debtTolerance: 2,
      description: 'RI was the first successful commercial expert system. It configured orders for new computer systems. After 5 years, it was saving the company about 40 million dollars per year.',
      bonus: {
        description: '<p>Invent the Roomba.<br/>Remove 1 charge of <span class="debt">Debt</span>.</p>',
        debt: -1
      }
    }
  ],
  7: [
    {
      image: 7,
      debt: 1,
      social: 0,
      nextStage: 8,
      debtTolerance: 2,
      description: 'Created in 1990, it was one of the first voice recognition software ever made, although it was the company’s second one. It sold at a cost of $645 and required the consumer to train the program for 45 minutes before it could recognize your speech.'
    },
    {
      image: 8,
      debt: 0,
      social: 0,
      nextStage: 9,
      debtTolerance: 2,
      description: 'In 2008, Google had broke the voice recognition stagnation with the release of its Voice Recognition search app for the iPhone. Speech recognition hit a ceiling of 80% accuracy, but Google was able to improve it and currently says it’s 92% accurate.'
    }
  ],
  8: [
    {
      paragraph: '<p>Unsuccessful option.<br/>Gain 1 charge of <span class="debt">Debt</span>.</p>',
      nextStage: 9
    }
  ],
  9: [
    {
      image: 9,
      debt: 0,
      social: 0,
      nextStage: 10,
      debtTolerance: 2,
      description: 'Biometrics is a technological and scientific method of using biological information like DNA, fingerprints, retinas, face, etc. in order to use as authentication for something.'
    }
  ],
  10: [
    {
      image: 10,
      debt: 0,
      social: 1,
      nextStage: 11,
      debtTolerance: 2,
      description: 'Advancements in technology allowed for machines to start being bought and used to do labor for companies to keep them from paying wages.'
    },
    {
      image: 11,
      debt: 0,
      social: 1,
      nextStage: 11,
      debtTolerance: 2,
      description: 'Recently, artificial intelligence has been being used in places never thought before. It’s being used to assist and cut back costs on care giving and other humanitarian jobs, and can even start producing it’s own art using a database as reference. '
    }
  ],
  11: [
    {
      paragraph: '<p>The general public is unhappy with the replacement of jobs.<br/>Gain 1 charge of <span class="tension">Social Tension</span>.</p>',
      nextStage: 12
    }
  ],
  12: [
    {
      image: 12,
      debt: -1,
      social: 0,
      nextStage: 13,
      debtTolerance: 2,
      description: ''
    },
    {
      image: 13,
      debt: 0,
      social: 0,
      kill: 1,
      nextStage: 13,
      debtTolerance: 2,
      description: ''
    }
  ],
  13: [
    {
      paragraph: '<p>Google buys Deep Mind for $500 million.<br/>Remove 1 charge of <span class="debt">Debt</span>.</p>',
      nextStage: 15
    }
  ],
  14: [
    {
      paragraph: '<p>Start research for a <span class="kill">Kill Switch</span>.</p>',
      nextStage: 15
    }
  ],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: []
};