const paragraph = document.querySelectorAll('p')

console.log(paragraph.length)

for(let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i])
}

paragraph.forEach(p => console.log(p))