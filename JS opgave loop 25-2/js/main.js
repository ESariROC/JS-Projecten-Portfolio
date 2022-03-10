console.log('main js loaded');

const paragraph = document.querySelector('.paragraph');

for(let i = 1; i <= 10; i++ ) {
        const result = i * 10;
        console.log(`${10} * ${i} = ${result}`);
        document.body.innerHTML += `${i} * 10 = ${result} <br>`;
}