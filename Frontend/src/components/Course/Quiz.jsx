// eslint-disable-next-line
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { markSectionComplete } from '../../utils/utils.js';

const Quiz = ({ completedSections, setCompletedSections }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showQuizStart, setShowQuizStart] = useState(true); // to manage initial quiz screen
    const [quizTaken, setQuizTaken] = useState(false); // Track if the quiz has been taken

    const MarkAsComplete = () => {
        markSectionComplete(completedSections, setCompletedSections, 'm1_s1_quiz'); // Correctly call the function
    };

    const questions = [
        {
            questionText: 'What is the primary goal of the empathize stage in design thinking?',
            answerOptions: [
                {answerText: 'Defining the problem', isCorrect: false},
                {answerText: 'Generating creative ideas', isCorrect: false},
                {answerText: 'Understanding the users’ needs and experiences', isCorrect: true},
                {answerText: 'Build prototypes', isCorrect: false},
            ],
        },
        {
            questionText: 'In which stage of design thinking do you create tangible representations of ideas?',
            answerOptions: [
                {answerText: 'Empathize', isCorrect: false},
                {answerText: 'Ideate', isCorrect: false},
                {answerText: 'Prototype', isCorrect: true},
                {answerText: 'Test', isCorrect: false},
            ],
        },
    ];

    const handleAnswerOptionClick = (questionId, answerText) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answerText,
        });
    };

    const nextQuestion = () => {
        const nextQuestionIndex = currentQuestion + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestion(nextQuestionIndex);
        } else {
            setShowResults(true);
        }
    };

    const previousQuestion = () => {
        const previousQuestionIndex = currentQuestion - 1;
        if (previousQuestionIndex >= 0) {
            setCurrentQuestion(previousQuestionIndex);
        }
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.answerOptions.length > 0 && selectedAnswers[index] && questions[index].answerOptions.find((option) => option.answerText === selectedAnswers[index] && option.isCorrect)) {
                score += 1;
            }
        });
        return score;
    };

    const getProgressPercentage = () => {
        return ((currentQuestion + 1) / questions.length) * 100;
    };

    const handleDoneClick = () => {
        setShowResults(false);
        setShowQuizStart(true);
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setQuizTaken(true); // Mark the quiz as taken
    };

    const handleTakeQuizAgain = () => {
        setShowQuizStart(false);
        setShowResults(false);
        setCurrentQuestion(0);
        setSelectedAnswers({});
    };


    return (
        <div className="container mx-auto p-4">
            {showQuizStart ? ( // Render the initial quiz screen
                <>
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Design Thinking and Strategy Quiz
                    </h1>
                    <p className="text-gray-700 mb-4 text-lg">
                        After completing the reading, take this quiz to test your understanding of the key concepts. The
                        quiz
                        includes multiple-choice and short-answer questions to reinforce your learning.
                    </p>
                    <div className="flex justify-left mt-8">
                        <div className="flex flex-col items-left">
                            {quizTaken ? ( // If quiz has been taken, show "Completed" and "Take Quiz Again"
                                <>
                                    <button
                                        className="bg-purple-50 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-3 px-4 text-indigo-800 font-bold mt-4 ml-0"
                                        onClick={MarkAsComplete}
                                    >
                                        Mark as Complete
                                    </button>


                                    <button
                                        className="bg-white border border-gray-400 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                                        onClick={handleTakeQuizAgain}
                                    >
                                        Take Quiz Again
                                    </button>
                                </>
                            ) : (
                                // If quiz hasn't been taken, show "Start Quiz"
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-2 px-4 text-white font-bold mt-4"
                                    onClick={() => setShowQuizStart(false)}
                                >
                                    Start Quiz
                                </button>
                            )}
                        </div>


                    </div>
                </>
            ) : (
                !showResults ? (
                    <>
                        <h1 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Design Thinking and Strategy Quiz
                        </h1>
                        {/* Progress Bar with Fixed Width */}
                        <div className="flex items-center mb-4">
                            <div className="bg-gray-200 rounded-full h-2 mb-2 w-3/5">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
                                    style={{width: `${getProgressPercentage()}%`}}
                                />
                            </div>
                            {/* Display Percentage After Progress Bar */}
                            <p className="text-gray-700 text-right ml-4 mb-2 text-lg">{getProgressPercentage()}%</p>
                        </div>

                        {currentQuestion < questions.length && (
                            <div>
                                <h2 className="text-lg font-bold mb-4 text-gray-800">
                                    Question {currentQuestion + 1}: {questions[currentQuestion].questionText}
                                </h2>
                                <ul className="list-none pl-0 mb-4">
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <div
                                                className="border border-purple-500 rounded-lg px-4 py-2 flex items-center w-full justify-between">
                                                <label htmlFor={index}>{answerOption.answerText}</label>
                                                <input
                                                    type="radio"
                                                    name="answer"
                                                    id={index}
                                                    className="mr-2"
                                                    checked={selectedAnswers[currentQuestion] === answerOption.answerText}
                                                    onChange={() => handleAnswerOptionClick(currentQuestion, answerOption.answerText)}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button Group at the Bottom */}
                                <div className="flex justify-center mt-8">
                                    {currentQuestion > 0 && (
                                        <button
                                            className="bg-white border border-gray-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
                                            onClick={previousQuestion}
                                        >
                                            Back
                                        </button>
                                    )}
                                    <button
                                        className="bg-violet-700 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-2 px-4 text-white font-bold"
                                        onClick={nextQuestion}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Design Thinking and Strategy Quiz
                        </h1>
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
                             style={{width: `${getProgressPercentage()}%`}}/>

                        <div className="flex justify-center items-center mt-8">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-24 w-24 text-green-500 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div className=" text-center items-center ">
                            <h2 className="text-2xl font-bold mt-4 text-gray-800">You completed the quiz!</h2>
                            <p className="text-gray-700 mt-2">Your score: {calculateScore()} out
                                of {questions.length}</p>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg py-2 px-4 text-white font-bold mt-4"
                                onClick={handleDoneClick} // Handle Done click
                            >
                                Done
                            </button>
                        </div>

                    </div>

                ))}
        </div>
    );
};

Quiz.propTypes = {
    completedSections: PropTypes.array.isRequired,
    setCompletedSections: PropTypes.func.isRequired,
};

export default Quiz;
