// let wholeKeys = []
// const p = document.createElement('p')
// document.addEventListener('keypress', (event) => {
//     wholeKeys += event.key;
//     p.innerHTML = wholeKeys
// })
// let newChild = document.querySelector('#insert')
// newChild.appendChild(p)

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    
    `
})