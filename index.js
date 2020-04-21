const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const win = record.find(function(yearResult){
    return yearResult.result === 'W';
  });
  if (win){return win.year};
}