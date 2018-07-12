



for (let i = 1; i < 100; i++) {
    const currentNumber = [i]
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log("chickenmonkey")
    }

    else if (currentNumber % 5 === 0) {
        console.log("chicken")
    }
    else if (currentNumber % 7 === 0) {
        console.log("monkey")
    }


    else {
        console.log(currentNumber)
    }
} 