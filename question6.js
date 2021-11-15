const btnStart = document.getElementById('start');
const text = document.getElementById('line');
btnStart.addEventListener('click', () => {
    let val = 1;
    let displayText = 'Text is Growing';
    let color = 'red';
    const interval = setInterval(() => {
        const currSize = getComputedStyle(text).fontSize;
        // 1 px = 0.75 pt
        if(parseInt(currSize) * 0.75 >= 50) 
        {
            val = -1;
            color = 'blue';
            displayText = 'Text is Shrinking';
        } 
        else if(parseInt(currSize) * 0.75 <= 5 && val === -1) 
        {
            color = 'red';
            displayText = 'Text is Growing'
            clearInterval(interval);
        }
        text.style.fontSize = `${parseInt(currSize) + val}px`;
        text.style.color = color;
        text.innerText = displayText;
    }, 100);
});