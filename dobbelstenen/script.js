// Create button element 

document.getElementById("btn").addEventListener("click", gooi) 

const num = document.getElementsByClassName("num")

const count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

function gooi() {
    let randomNumbers = Array.from({length: 8}, () => Math.floor(Math.random() * 6) + 1);

    for (const die in count) {
        count[die] = randomNumbers.filter(dice => dice == die).length
        num[die-1].innerHTML = count[die];
    }
    
    console.log(count)
}

