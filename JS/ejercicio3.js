const calcularArea = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
  };
  
  const radio = 7.5;
  const area = calcularArea(radio);
  
  console.log(`El área del círculo con radio ${radio} es: ${area.toFixed(2)}`);