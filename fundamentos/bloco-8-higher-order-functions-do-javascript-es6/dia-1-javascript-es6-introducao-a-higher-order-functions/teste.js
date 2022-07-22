const criar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const partiu = () => 'Partiu dormir!!';

const doingThings = (venha) => {
    const result  = venha ();
    console.log (result);
}

doingThings (criar);
doingThings (cafe);
doingThings (partiu);



///////////////// exemplo

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

  ////

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });


  ///

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;


  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator);