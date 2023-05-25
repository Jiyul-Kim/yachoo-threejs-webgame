const dice = (diceArr) => {
  const D1 = Math.floor(Math.random() * 6 + 1);
  const D2 = Math.floor(Math.random() * 6 + 1);
  const D3 = Math.floor(Math.random() * 6 + 1);
  const D4 = Math.floor(Math.random() * 6 + 1);
  const D5 = Math.floor(Math.random() * 6 + 1);
  diceArr = [D1, D2, D3, D4, D5];
  console.log("#".repeat(10));
  // console.log(`인덱스값: ${i}`);
  let acesCount = 0;
  let twosCount = 0;
  let threesCount = 0;
  let foursCount = 0;
  let fivesCount = 0;
  let sixesCount = 0;

  for (let i = 0; i < diceArr.length; i++) {
    // 상단 기능
    if (diceArr[i] === 1) {
      acesCount++;
    } else if (diceArr[i] === 2) {
      twosCount++;
    } else if (diceArr[i] === 3) {
      threesCount++;
    } else if (diceArr[i] === 4) {
      foursCount++;
    } else if (diceArr[i] === 5) {
      fivesCount++;
    } else if (diceArr[i] === 6) {
      sixesCount++;
    }
  }
  console.log(`다이스값: ${diceArr}`);
  console.log(`aces: ${acesCount * 1}`);
  console.log(`twos: ${twosCount * 2}`);
  console.log(`threes: ${threesCount * 3}`);
  console.log(`fours: ${foursCount * 4}`);
  console.log(`fives: ${fivesCount * 5}`);
  console.log(`sixes: ${sixesCount * 6}`);

  // 초이스
  const choice = diceArr.reduce((ac, cr) => ac + cr);
  console.log(`초이스값: ${choice}`);

  // 풀오브카인드

  // 풀하우스

  const matchDice = {};
  diceArr.forEach((x) => {
    matchDice[x] = (matchDice[x] || 0) + 1;
  });
  const objFull = Object.values(matchDice);
  if (objFull.includes(3) && objFull.includes(2)) {
    console.log("풀하우스 +25점");
  }
  const kind = objFull.filter((v) => v >= 3);
  if (kind >= 3) {
    console.log(`쓰리오브카인드! +${choice}`);
  }
  if (kind >= 4) {
    console.log(`포오브카인드! +${choice}`);
  }
  // 스트레이트
  const largeStright = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ];
  const smallStright = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  for (let j in largeStright) {
    const laStResult = largeStright[j].filter((x) => diceArr.includes(x));
    if (laStResult.length === 5) {
      console.log("라지스트레이트!");
    }
  }
  for (let k in smallStright) {
    const smStResult = smallStright[k].filter((x) => diceArr.includes(x));
    if (smStResult.length === 4) {
      console.log("스몰스트레이트!");
    }
  }

  // 야추

  if (
    acesCount === 5 ||
    twosCount === 5 ||
    threesCount === 5 ||
    foursCount === 5 ||
    fivesCount === 5 ||
    sixesCount === 5
  ) {
    console.log("야추!");
  }
};

let diceArr = [0, 0, 0, 0, 0];

dice(diceArr);
