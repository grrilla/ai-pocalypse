export default {
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
      description: '<p>Not enough technology. Gain 1 charge of <span>Debt</span>.',
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
      description: '<p>Failure. AI Winter initiates.<br/>Gain 1 charge of <span class="debt">Debt</span>.</p>',
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
      description: '<p>Unsuccessful option.<br/>Gain 1 charge of <span class="debt">Debt</span>.</p>',
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
      description: '<p>The general public is unhappy with the replacement of jobs.<br/>Gain 1 charge of <span class="tension">Social Tension</span>.</p>',
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
      description: 'DeepMind is the world leader in artificial intelligence research and its application for positive impact. Google bought DeepMind for over $500 million.'
    },
    {
      image: 13,
      debt: 0,
      social: 0,
      kill: 1,
      nextStage: 14,
      debtTolerance: 2,
      description: 'Elon Musk invested in DeepMind before Google acquired it in order to make sure the company stayed on track with preventing dangerous Artificial Intelligence.'
    }
  ],
  13: [
    {
      description: '<p>Google buys Deep Mind for $500 million.<br/>Remove 1 charge of <span class="debt">Debt</span>.</p>',
      nextStage: 15
    }
  ],
  14: [
    {
      description: '<p>Start research for a <span class="kill">Kill Switch</span>.</p>',
      nextStage: 15
    }
  ],
  15: [
    {
      image: 14,
      debt: 0,
      social: 0,
      nextStage: 16,
      debtTolerance: 2,
      description: 'Start developing a way to keep AI safe for humanity.'
    },
    {
      image: 15,
      debt: 0,
      social: 0,
      nextStage: 26,
      debtTolerance: 2,
      description: 'Start making more helpful and convenient AI for everyone.'
    }
  ],
  16: [
    {
      image: 16,
      debt: 0,
      social: 0,
      nextStage: 17,
      debtTolerance: 2,
      description: 'Started by Elon Musk, Neuralink aims to create a third layer of the human brain, an electronic one, in order to give humans all the abilities of a smartphone, but without needing a phone. You would have to have the will to broadcast info to people whenever you want, therefore no one can read your mind, and you’d have unlimited internet access.'
    },
    {
      image: 17,
      debt: 0,
      social: 0,
      nextStage: 21,
      debtTolerance: 2,
      description: 'Elon Musk wants to advance space travel through SpaceX in order to allow colonization of Mars, with a huge reason being “a bolt-hole if A.I. goes rogue and turns on humanity.”'
    }
  ],
  17: [
    {
      image: 18,
      debt: 0,
      social: 0,
      nextStage: 17,
      debtTolerance: 2,
      description: 'The first goal of Neuralink is to create a product that helps with severe brain injuries like strokes, cancer lesions, and congenitals by 2021.'
    },
    {
      image: 19,
      debt: -1,
      social: 0,
      nextStage: 18,
      debtTolerance: 2,
      description: 'Begin allowing people to pay for and schedule surgeries to have the third layer implanted into their brains.'
    },
    {
      image: 20,
      debt: 0,
      social: 1,
      nextStage: 19,
      debtTolerance: 2,
      description: 'Allow people to sign up for a chance to win a free surgery for the new brain layer. This gives lower class citizens a chance to obtain it.'
    }
  ],
  18: [
    {
      description: '<p>Remove 1 charge of <span class="debt">Debt</span>.</p>',
      social: 1,
      nextStage: 19
    }
  ],
  19: [
    {
      description: '<p>Class difference between humans and cyborgs causes job loss, tension, and violence. Gain 1 charge of <span class="tension">Social Tension</span>.</p>',
      nextStage: 17
    }
  ],
  20: [
    {
      image: 21,
      debt: 0,
      social: 0,
      nextStage: 'end1', // if you have 2 debt, go to fail1; else, go to success1.
      debtTolerance: 2,
      description: ''
    }
  ],
  21: [
    {
      image: 22,
      debt: 1,
      social: 1,
      nextStage: 'end2a', // if you have 2 debt BEFORE applying this debt, go to fail2; else go to stage 22.
      debtTolerance: 2,
      description: 'Immediately start sending people and supplies to start the colonization of Mars.'
    },
    {
      image: 23,
      debt: 0,
      social: 0,
      nextStage: 23,
      debtTolerance: 2,
      description: 'Falcon Heavy was designed from the outset to carry humans into space and restores the possibility of flying missions with crew to the Moon or Mars.'
    }
  ],
  22: [
    {
      description: '<p>People die. Research blown. Gain 1 charge of <span class="debt">Debt</span> and 1 charge of <span class="tension">Social Tension</span>.</p>',
      nextStage: 16
    }
  ],
  23: [
    {
      image: 24,
      debt: 0,
      social: 0,
      nextStage: 24,
      debtTolerance: 2,
      description: 'Develop a “Stage 2” of FalconHeavy and have it make the trip to Mars and back successfully.'
    }
  ],
  24: [
    {
      image: 25,
      debt: 0,
      social: 0,
      nextStage: 'end2b', // if you have 2 debt, go to stage 16; else, go to success2.
      debtTolerance: 2,
      description: 'Start sending people and supplies to start the colonization of Mars.'
    }
  ],
  25: [
    {
      description: '<p>Action failed due to high <span class="debt">Debt</span>. Time to think your investments.</p>',
      nextStage: 16
    }
  ],
  26: [
    {
      image: 26,
      debt: 0,
      social: 0,
      nextStage: 27,
      debtTolerance: 2,
      description: 'Cut back costs by developing AI to allow machines to troubleshoot and repair themselves, removing the need for extra engineers and repairmen.'
    },
    {
      image: 27,
      debt: 0,
      social: 0,
      nextStage: 27,
      debtTolerance: 2,
      description: 'Give the United States the upper hand in military might by creating AI that can auto detect threats from other nations, defend against harm, and aim and fire without.'
    },
    {
      image: 28,
      debt: 0,
      social: 0,
      nextStage: 27,
      debtTolerance: 2,
      description: 'Develop new AI that can work, move, and learn on their own in order to make the consumers’ lives easier and more streamlined.'
    }
  ],
  27: [
    {
      description: '<p>The advancement of AI without limitations has led to hostile machines that threaten humanity.</p>',
      nextStage: 28
    }
  ],
  28: [
    {
      image: 29,
      debt: 0,
      social: 0,
      nextStage: 'failure3',
      debtTolerance: 2,
      description: 'This is your line of defense against the apocalypse now. Everyone is scared. Give them a fighting chance.'
    },
    {
      image: 30,
      debt: 0,
      social: 0,
      killSwitch: 1,
      nextStage: 'end3', // If killSwitch is at 1 BEFORE applying this killSwitch, go to success3; else, go to failure3.
      debtTolerance: 2,
      description: 'If you’ve invested in DeepMind in the past, the kill switch research should be done! Develop it and destroy all malicious AI!'
    }
  ]
};
