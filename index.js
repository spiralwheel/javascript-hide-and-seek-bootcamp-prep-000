
function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}


function increaseRankBy(n) {
  var ulclass = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < ulclass.length; i++){
      ulclass[i].innerHTML = parseInt(ulclass[i].innerHTML) + n
  }
}

function deepestChild() {
  const deepdiv = document.getElementById('app').querySelectorAll('div#grand-node div')
  return deepdiv[deepdiv.length - 1]
}
