let fusion = []// add solution here
function theBeatlesPlay(musicians,instruments) {
  for (let i = 0; i < 4; i++) {
    fusion.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return fusion;
}
let facts = ["He was the last Beatle to learn to drive",
            "He was never a vegetarian",
            "He was a choir boy and boy scout",
            "He hated the sound of his own voice"]

function johnLennonFacts (facts) {
  let i = 0
  while (i<facts.length) {
  facts.push("${facts[i]}!!!")
  }
  return facts;
}
