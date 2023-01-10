import { useState } from 'react';

const useStateWithHistory = (initialState) => {
const [history, setHistory] = useState([initialState]);
const [currentIndex, setCurrentIndex] = useState(0);
const [value, setValue] = useState(initialState);

const goBack = () => {
if (currentIndex > 0) {
setCurrentIndex(currentIndex - 1);
setValue(history[currentIndex - 1]);
}
};

const goForward = () => {
if (currentIndex < history.length - 1) {
setCurrentIndex(currentIndex + 1);
setValue(history[currentIndex + 1]);
}
};

const updateValue = (newValue) => {
setHistory(history.slice(0, currentIndex + 1).concat([newValue]));
setCurrentIndex(currentIndex + 1);
setValue(newValue);
};

return [value, updateValue, goBack, goForward, history];
};

export default useStateWithHistory;