 
var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
 
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else {
    var nowserving=katzDeliLine.shift()
    return `Currently serving ${nowserving}.`
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
  return `The line is currently empty.` 
  }
  else {
    var whosOnLine='The line is currently: ';
    let counter=1;
    for(let i=0;i<katzDeliLine.length;i++){
      counter=counter +i;
      whosOnLine+counter+"."+katzDeliLine[i]
    }
  }
}