const TextareaAutoAdjust = (textareaElement) => {
  textareaElement.style.height = 'fit-content';
  textareaElement.style.height = `${textareaElement.scrollHeight}px`;
};

export default TextareaAutoAdjust;
