const router = require("express").Router();
//const db = require('../models')

router.get("/", (req, res) => {
  res.json([
    {
      question: "I was in New York, is the past simple true or false?",
      correctAnswer: true,
    },
    {
      question: "I have been to New York, is the past perfect true or false",
      correctAnswer: false,
    },
    {
      question: "She eats apples, is the present simple true or false?",
      correctAnswer: true,
    },
  ]);
});

module.exports = router;
