let lotteryItems = [
    { name: '一等奖', winCount: 1 },
    { name: '二等奖', winCount: 3 },
    { name: '三等奖', winCount: 5 },
    { name: '谢谢参与', winCount: 100 }
];


function adjustLotteryItems(newItems) {
    lotteryItems = newItems;
}

// 抽奖--function
function startLottery() {
  if (confirm("请确认你已经支付")) {  
    let totalWinCount = lotteryItems.reduce((acc, item) => acc + item.winCount, 0);
    let randomIndex = Math.floor(Math.random() * totalWinCount);

    let accumulatedCount = 0;
    for (let i = 0; i < lotteryItems.length; i++) {
        accumulatedCount += lotteryItems[i].winCount;
        if (randomIndex < accumulatedCount) {
            document.getElementById('result').textContent = `您抽中的内容是：${lotteryItems[i].name}`;
            lotteryItems[i].winCount--;
            if (lotteryItems[i].winCount <= 0) {
                lotteryItems.splice(i, 1);
            }
            return;
        }
    }

    document.getElementById('result').textContent = '很遗憾，没有中奖。';
  }  
  else {  
        alert("请先支付");  
  }  
    
}


adjustLotteryItems([
    { name: '一等奖', winCount: 1 },
    { name: '二等奖', winCount: 3 },
    { name: '三等奖', winCount: 5 },
    { name: '免费再来一局', winCount: 5 },
    { name: '谢谢惠顾', winCount: 25 }
]);