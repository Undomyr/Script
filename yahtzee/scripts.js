// |Yahtzee Simulation Script| //
/////////////////////////////////

// Throw Dice //


document.getElementById("btn").addEventListener("click", gooien)

function gooien() {
 let eyesThrown = [1, 1, 1, 1, 1]
 // let eyesThrown = [...Array(5)].map(() => Math.floor(Math.random() * 6) + 1).sort()
  // Call die score functions //

  console.log(eyesThrown)

  clearTable()
  enen(eyesThrown)
  tween(eyesThrown)
  drieen(eyesThrown)
  vieren(eyesThrown)
  vijven(eyesThrown)
  zessen(eyesThrown)
  threeOfAKind(eyesThrown)
  threeSum(eyesThrown)
  fourOfAKind(eyesThrown)
  fourSum(eyesThrown)
  fullHouse(eyesThrown)
  kans(eyesThrown)
  yahtzee(eyesThrown)
  fullHouse(eyesThrown)
  getSmStraightScore(eyesThrown)
  groteStraat(eyesThrown)

}

function threeSum(eyesThrown) {
  let sum = eyesThrown.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  })
  console.log(sum)
  return sum
}

function fourSum(eyesThrown) {
  let sum2 = eyesThrown.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  })
  console.log(sum2)
  return sum2
}


function chanceSum(eyesThrown) {
  let sum3 = eyesThrown.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  })
  console.log(sum3)
  return sum3
}

// Clear previous table values //

function clearTable() {
  document.getElementById("aces1").innerHTML   = ""
  document.getElementById("twos1").innerHTML   = ""
  document.getElementById("threes1").innerHTML = ""
  document.getElementById("fours1").innerHTML  = ""
  document.getElementById("fives1").innerHTML  = ""
  document.getElementById("sixes1").innerHTML  = ""
  document.getElementById("threeOfKind1").innerHTML = ""
  document.getElementById("fourOfKind1").innerHTML = ""
  document.getElementById("fullHouse1").innerHTML = ""
  document.getElementById("smStraight1").innerHTML = ""
  document.getElementById("lgStraight1").innerHTML = ""
  document.getElementById("chance1").innerHTML = ""
  document.getElementById("yahtzee1").innerHTML = ""

}

// Eye Summation //

function enen(eyesThrown) {
  let enenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 1) {
      enenTotaal += 1
      document.getElementById("aces1").innerHTML = enenTotaal
    }
  }

}

function tween(eyesThrown) {

  let tweenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 2) {
      tweenTotaal += 2
      document.getElementById("twos1").innerHTML = tweenTotaal
    }
  }

}

function drieen(eyesThrown) {

  let drieenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 3) {
      drieenTotaal += 3
      document.getElementById("threes1").innerHTML = drieenTotaal
    }
  }

}

function vieren(eyesThrown) {
  let vierenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 4) {
      vierenTotaal += 4
      document.getElementById("fours1").innerHTML = vierenTotaal
    }
  }
}

function vijven(eyesThrown) {
  let vijvenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 5) {
      vijvenTotaal += 5
      document.getElementById("fives1").innerHTML = vijvenTotaal
    }
  }
}

function zessen(eyesThrown) {
  let zessenTotaal = 0
  for (i = 0; i < eyesThrown.length; i++) {
    if (eyesThrown[i] == 6) {
      zessenTotaal += 6
      document.getElementById("sixes1").innerHTML = zessenTotaal
    }
  }
}

// Combinations Calculations //

// Three dice with the same eyes //

function threeOfAKind(eyesThrown) {

  const threeCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (i = 0; i < eyesThrown.length; i++) {
    let value = eyesThrown[i]
    threeCount[value]++
    }
    for (j = 1; j < 7; j++) {
      if (threeCount[j] > 2) {
        document.getElementById("threeOfKind1").innerHTML = threeSum(eyesThrown)

        console.log("3 Of A Kind!")
    }
  }
}

// Four dice with the same eyes //

function fourOfAKind(eyesThrown) {

  const fourCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  for (i = 0; i < eyesThrown.length; i++) {
    let value = eyesThrown[i]
    fourCount[value]++
  }
  for (j = 1; j < 7; j++) {
    if (fourCount[j] > 3) {
      document.getElementById("fourOfKind1").innerHTML = fourSum(eyesThrown)

      console.log("4 Of A Kind!")
    }
  }
}

// Three dice with the same eyes and one pair with the same eyes //
 function fullHouse(eyesThrown) {

   	const fullHouseCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    };

    for (i = 0; i < eyesThrown.length; i++) {
      let value = eyesThrown[i]
      fullHouseCount[value]++
    }

    let hasFullHouse = Object.values(fullHouseCount).includes(2) && Object.values(fullHouseCount).includes(3)

    console.log(hasFullHouse)

   if (hasFullHouse == true) {
     document.getElementById("fullHouse1").innerHTML = 25
   }
 }

// Four dice with consecutive eyes (order is irrelevant) //

function getSmStraightScore(eyesThrown) {
  let x = (/1234|2345|3456/.test(eyesThrown.join('').replace(/(.)\1/,'$1')));

  document.getElementById("smStraight1").innerHTML =  x ? 30 : "";
}

// Five dice with consecutive eyes (order is irrelevant) //
function groteStraat(eyesThrown) {
  let x = (/12345|23456/.test(eyesThrown.join('').replace(/(.)\1/,'$1')));

  document.getElementById("lgStraight1").innerHTML = x ? 40 : "";
}

// Sum total of five dice //

function kans(eyesThrown) {
  document.getElementById("chance1").innerHTML = chanceSum(eyesThrown)
}

// All dice with the same eyes //

function yahtzee(eyesThrown) {

  const yahtzeeCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  for (i = 0; i < eyesThrown.length; i++) {
    let value = eyesThrown[i]
    yahtzeeCount[value]++
  }
  for (j = 1; j < 7; j++) {
    if (yahtzeeCount[j] > 4) {
      document.getElementById("yahtzee1").innerHTML = 50

      console.log("YAHTZEE MOTHERFUCKERS!")
    }
  }
}
// Score Calculation //

function totalScore() {

}

function bonusScore() {

}
