import launchGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const condition = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, length) => {
  const progression = [firstNumber];
  while (progression.length < length) {
    const nextNumber = progression.at(-1) + step;
    progression.push(nextNumber);
  }
  return progression;
};

const generateRoundData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 12);
  const length = getRandomNumber(6, 10);
  const progression = generateProgression(firstNumber, step, length);
  const result = [];
  const indexOfHiddenItem = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[indexOfHiddenItem];
  progression[indexOfHiddenItem] = '..';
  result.push(progression.join(' '));
  result.push(rightAnswer.toString());
  return result;
};

const launchBrainProgressionGame = () => launchGame(condition, generateRoundData);

export default launchBrainProgressionGame;
