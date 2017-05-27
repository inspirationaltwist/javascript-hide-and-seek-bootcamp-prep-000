// returns the first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

 // pulls a .target out of #nested
 function nestedTarget() {
   return document.getElementById('nested').querySelector('.target');
 }

 // increases the ranks in all of the .ranked-lists by n
 function increaseRankBy(n) {
   const lis = document.querySelectorAll('ul.ranked-list li');
   for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
   }
 }

// returns the most deeply nested child in #grand-node
function deepestChild() {
  const grand = document.querySelector('#grand-node');
  return grand.querySelectorAll('div')[3];

}
