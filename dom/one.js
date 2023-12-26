document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class','test') //it will overwrite previous class i.e heading replaces by test

//****************************STYLING*************************** *
title.style.backgroundColor='green'
title.style.padding='15px'
title.style.borderRadius='5px'


document.querySelector('h2')

document.querySelector('#title')


document.querySelector('.heading')

const list=document.querySelectorAll('li')  // it gives nodelist not array .we use foreach not map.
list[0].style.color='green'


const templist=document.getElementsByClassName('list-item')
// covert something to array
Array.from(templist)