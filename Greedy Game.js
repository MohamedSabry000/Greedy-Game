const numberText = prompt("Enter The Number Please: ");

const greedyGame = (num) => {
    const numbersAroundPoint = (num + "").split(".");
    let text = `You have ${parseInt(numbersAroundPoint[0])} dollar, ` ;
    const quarter = Math.floor(numbersAroundPoint[1] / 25);
    text += `${quarter || 0} quarter, `;
    const dime = Math.floor(numbersAroundPoint[1] % 25 / 10);
    text += `${dime || 0} dime, `;
    const nickel = Math.floor(numbersAroundPoint[1] % 25 % 10 / 5);
    text += `${nickel || 0} nickel`;
    const cent = Math.floor(numbersAroundPoint[1] % 25 % 10 % 5);
    text += ` and ${cent || 0} cent`;

    console.log(text);
}

greedyGame(numberText);