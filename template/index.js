const getRandomInteger = (max) => {
    return (Math.floor(Math.random() * Math.floor(max)));
}
const getGrid = (column, row) => ({
    column: column,
    row: row,
    sum: column * row
})
const updateGridTemplates = (grid, container) => {
    const { column, row } = grid;
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
}

const getContainer = (containerId) => document.getElementById(containerId);

const createSquare = (id, className, innerText) => {
    const square = document.createElement('div');
    square.id = id;
    square.className = className;
    square.innerText = innerText;
    return square;
}


const playRippleAnimation = () => {
    anime({
        targets: '.ripple',
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
        }
    });
}

const updateSquaresNumber = () => {
    const squares = document.getElementsByClassName('square');
    for (let square of squares) {
        square.innerText = getRandomInteger(2);
    }
}

const initialAnimation = (grid, className) => {
    const { column, row } = grid;
    anime({
        targets: '.' + className,
        scale: [
            { value: .1, easing: 'easeOutSine', duration: 100 },
            { value: 1, easing: 'easeInOutQuad', duration: 500 },
        ],
        delay: anime.stagger(100, { grid: [column, row], from: 'center' }),
        loop: true,
    })
}



const play = (grid, container, squareClassName) => {
    const { sum } = grid;
    updateGridTemplates(grid, container);

    for (let i = 0; i < sum; i++) {
        const square = createSquare(`square-${i + 1}`, squareClassName, getRandomInteger(2));
        container.appendChild(square);
    }
    
    playRippleAnimation();
    initialAnimation(grid, squareClassName);
    setInterval(updateSquaresNumber, 1000);
    
}


const grid = getGrid(40, 20);
const containerId = 'animation-container';
const container = getContainer(containerId);


window.onload = (event) => {
    console.log('a page has been loaded successfully!');
    play(grid, container, 'square');
}