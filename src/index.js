import './index.css'
import jpg from './images/flower.jpg'

const button = document.querySelector('.generate');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
    const number = Math.floor(Math.random()*1000) +1 ;
    result.textContent = number;

})

new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon: './src/images/favicon.svg'
})
