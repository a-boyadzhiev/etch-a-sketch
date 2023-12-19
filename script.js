const container = document.querySelector('.container');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createGrid(size) {
    removeGrid();
    const boxSize = 100 / size; // Adjust this value based on your container size
  
    for (let i = 0; i < size * size; i++) {
      let smallBox = document.createElement('div');
      smallBox.className = 'small-box';
      smallBox.style.width = `${boxSize}%`;
      smallBox.style.height = `${boxSize}%`;
      container.appendChild(smallBox);
  
      const reset = document.querySelector('#reset');
      reset.addEventListener('click', () => {
        smallBox.style.backgroundColor = 'white';
      });
  
      smallBox.addEventListener('mouseover', () => {
        smallBox.style.backgroundColor = getRandomColor();
      });
    }
  }
  
  createGrid(16);