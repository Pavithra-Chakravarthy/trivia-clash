import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Expanded questions array (20 questions)
const LOCAL_QUESTIONS = [
  { question: "What is the name of the main character from Dead Space?", options: "Ellen Ripley, Commander Shepard, Captain Kirk, Isaac Clarke", answer: "Isaac Clarke" },
  { question: "Who painted the Mona Lisa?", options: "Van Gogh, Da Vinci, Picasso, Michelangelo", answer: "Da Vinci" },
  { question: "What is the capital of France?", options: "London, Berlin, Paris, Rome", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: "Earth, Mars, Jupiter, Venus", answer: "Mars" },
  { question: "Which language runs in a web browser?", options: "Python, Java, C, JavaScript", answer: "JavaScript" },
  { question: "What is 5 + 7?", options: "10, 12, 11, 13", answer: "12" },
  { question: "Who wrote Hamlet?", options: "Shakespeare, Dickens, Tolkien, Rowling", answer: "Shakespeare" },
  { question: "Which gas do plants absorb?", options: "Oxygen, Nitrogen, Carbon Dioxide, Hydrogen", answer: "Carbon Dioxide" },
  { question: "Which ocean is the largest?", options: "Atlantic, Indian, Pacific, Arctic", answer: "Pacific" },
  { question: "What is the speed of light?", options: "3×10^8 m/s, 3×10^6 m/s, 3×10^5 km/s, 3×10^7 m/s", answer: "3×10^8 m/s" },
  { question: "What is the powerhouse of the cell?", options: "Nucleus, Mitochondria, Ribosome, Endoplasmic Reticulum", answer: "Mitochondria" },
  { question: "Who developed the theory of relativity?", options: "Newton, Einstein, Galileo, Bohr", answer: "Einstein" },
  { question: "Which element has the chemical symbol 'O'?", options: "Oxygen, Osmium, Gold, Iron", answer: "Oxygen" },
  { question: "What is the tallest mountain in the world?", options: "K2, Everest, Kilimanjaro, Denali", answer: "Everest" },
  { question: "Which planet has the most moons?", options: "Mars, Jupiter, Saturn, Venus", answer: "Saturn" },
  { question: "What is H2O commonly known as?", options: "Hydrogen, Water, Oxygen, Salt", answer: "Water" },
  { question: "Who is known as the Father of Computers?", options: "Charles Babbage, Alan Turing, John von Neumann, Bill Gates", answer: "Charles Babbage" },
  { question: "Which organ purifies our blood?", options: "Heart, Lungs, Kidneys, Liver", answer: "Kidneys" },
  { question: "Which is the smallest prime number?", options: "0, 1, 2, 3", answer: "2" },
  { question: "Which gas do humans exhale?", options: "Oxygen, Nitrogen, Carbon Dioxide, Hydrogen", answer: "Carbon Dioxide" },
];

export default function Game() {
  const { roomId } = useParams();
  const TOTAL_QUESTIONS = 10;
  const TIMER_SECONDS = 15;

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);

  // Shuffle and select 10 questions on mount
  useEffect(() => {
    const shuffled = LOCAL_QUESTIONS
      .map((q) => {
        const opts = q.options
          .split(",")
          .map((o) => o.trim())
          .filter((o, idx, arr) => o && arr.indexOf(o) === idx);
        return { ...q, options: opts };
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, TOTAL_QUESTIONS);

    setQuestions(shuffled);
  }, []);

  // Timer logic
  useEffect(() => {
    if (finished || selected) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext(); // auto move to next question
          return TIMER_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, finished, selected]);

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);

    const correct = opt === questions[currentIndex].answer;
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= TOTAL_QUESTIONS) {
      setFinished(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setIsCorrect(null);
    setTimeLeft(TIMER_SECONDS);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
        <p>Loading questions…</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/5 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">🏆 Quiz Finished!</h1>
          <p className="text-lg">
            Final Score: <strong>{score}</strong> / {TOTAL_QUESTIONS}
          </p>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl p-6 rounded-2xl bg-white/5 shadow-xl"
      >
        {/* Progress Bar */}
        <div className="h-2 w-full bg-gray-700 rounded mb-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
          />
        </div>

        {/* Timer */}
        <p className="text-sm opacity-80 mb-4 text-right">
          ⏱ Time Left: <strong>{timeLeft}s</strong>
        </p>

        <h1 className="text-xl font-bold mb-2">Trivia Clash</h1>
        <p className="text-sm opacity-80 mb-4">
          Room ID: <strong>{roomId ?? "—"}</strong> | Score: {score}
        </p>

        <p className="font-semibold text-lg mb-4">{question.question}</p>

        <div className="grid gap-3">
          {question.options.map((opt, i) => {
            const isChosen = selected === opt;
            const correct = question.answer === opt;

            return (
              <motion.button
                key={i}
                whileHover={{ scale: !selected ? 1.03 : 1 }}
                whileTap={{ scale: !selected ? 0.97 : 1 }}
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
                className={`p-3 rounded-lg text-left transition ${
                  isChosen ? (correct ? "bg-green-600" : "bg-red-600") : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            <p className={`font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}>
              {isCorrect ? "✅ Correct!" : `❌ Wrong! Answer: ${question.answer}`}
            </p>
            <button
              onClick={handleNext}
              className="mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold"
            >
              Next →
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
