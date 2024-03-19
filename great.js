const shapes = ['redNotfillArc', 'blueNotfillArc', 'redFillArc', 'blueFillArc', 'redLine', 'blueLine'];

// function generateAndSortShapes() {

//   const group1 = [];
//   const group2 = [];
  
//   while (shapes.length > 0) {
//     const index = Math.floor(Math.random() * shapes.length);
//     const shape = shapes[index];
    
//     if (shape.includes('red')) {
//       group1.push(shape);
//     } else {
//       group2.push(shape);
//     }
    
//     shapes.splice(index, 1);
    
//     if (group1.length === 3) {
//       group1.push(...shapes.filter(s => s.includes('blue')));
//       shapes = shapes.filter(s => s.includes('red'));
//     }
    
//     if (group2.length === 3) {
//       group2.push(...shapes.filter(s => s.includes('red')));
//       shapes = shapes.filter(s => s.includes('blue'));
//     }
//   }
  
//   return [group1, group2];
// }


function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
  }
  
  function sortRandomColorElements() {
    const elements = [
      '<span style={stylesColor.redNotfillArc}></span>',
      '<span style={stylesColor.blueNotfillArc}></span>',
      '<span style={stylesColor.redFillArc}></span>',
      '<span style={stylesColor.blueFillArc}></span>',
      '<span style={stylesColor.redLine}></span>',
      '<span style={stylesColor.blueLine}></span>',
    ];
  
    const group1 = [];
    const group2 = [];
  
    const colorOrder = ['redNotfillArc', 'blueNotfillArc', 'redFillArc', 'blueFillArc', 'redLine', 'blueLine'];
  
    while (group1.length < 3 || group2.length < 3) {
      const randomElement = getRandomElement(elements);
  
      if (randomElement.includes(colorOrder[0]) && group1.length < 3) {
        group1.push(randomElement);
      } else if (randomElement.includes(colorOrder[1]) && group1.length < 3) {
        group1.push(randomElement);
      } else if (randomElement.includes(colorOrder[2]) && group1.length < 3) {
        group1.push(randomElement);
      } else {
        group2.push(randomElement);
      }
    }
  
    return [group1, group2];
  }
  
//   const [firstHalf, secondHalf] = sortRandomColorElements();
//   console.log(firstHalf);
//   console.log(secondHalf);
  
  


//   function divideArray(arr) {
//     const middleIndex = Math.floor(arr.length / 2);
//     const firstHalf = arr.slice(0, middleIndex);
//     const secondHalf = arr.slice(middleIndex);
    
//     return [firstHalf, secondHalf];
//   }
  const [firstHalf, secondHalf] = sortRandomColorElements();
  console.log('Group 1:', firstHalf);
  console.log('Group 2:', secondHalf);
  





  