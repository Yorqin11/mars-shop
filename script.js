const cards = [
    {
        img: './img/image 10 (1).png',
        itemName: 'Mars rug',
        price: '100 Coins',
        count: '24 dona mavjud'
    },
    {
        img: './img/image 22.png',
        itemName: 'Keyboard sticker',
        price: '49 Coins',
        count: '11 dona mavjud'
    },
    {
        img: './img/image 23.png',
        itemName: 'Smart watch',
        price: '899 Coins',
        count: '4 dona mavjud'
    },
    {
        img: './img/image 24.png',
        itemName: 'Wireless keyboard',
        price: '350 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 25.png',
        itemName: 'Mouse',
        price: '359 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 26.png',
        itemName: 'AirPods',
        price: '499 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 27.png',
        itemName: 'Powerbank',
        price: '899 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 28.png',
        itemName: 'USB flash drive',
        price: '299 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 29.png',
        itemName: 'Smartphone',
        price: '3699 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 30.png',
        itemName: 'Playstation 5',
        price: '7449 Coins',
        count: '1 dona mavjud'
    },
    {
        img: './img/image 31.png',
        itemName: 'Yandex Station',
        price: '1999 Coins',
        count: '1 dona mavjud'
    },  
    {
        img: './img/image 32.png',
        itemName: 'Planshet Samsung',
        price: '4999 Coins',
        count: '1 dona mavjud'
    }
]

const wrap = document.querySelector('.wrapper');

cards.forEach(item => {
    const div = document.createElement('div');
    
    div.classList.add('card', 'w-[290px]', 'h-[290px]', 'flex', 'justify-center', 'items-center', 'flex-col', 'rounded-[20px]', 'shadow-2xl', 'text-center')

    div.innerHTML = `
        <img src="${item.img}">
        <h2 class="text-[15px] mb-[17px]">${item.itemName}<h2>
        <p class="mb-[34px]">${item.price}<p>
        <span>${item.count}<span>
    `

    wrap.append(div)
})

const searchBtn = document.getElementById('btn');
const inp = document.getElementById('inp');

searchBtn.addEventListener('click', () => {
    wrap.innerHTML = ''
    
    
    if(inp.value == '') {
        alert('напишите что-то в инпут')
    } else {
        const searchCard = cards.filter(card => card.itemName.toLocaleLowerCase() == inp.value.toLocaleLowerCase());
        
        searchCard.forEach(item => {
            const div = document.createElement('div');
            
            div.classList.add('card', 'w-[290px]', 'h-[290px]', 'flex', 'justify-center', 'items-center', 'flex-col', 'rounded-[20px]', 'shadow-2xl', 'text-center')
        
            div.innerHTML = `
                <img src="${item.img}">
                <h2 class="text-[15px] mb-[17px]">${item.itemName}<h2>
                <p class="mb-[34px]">${item.price}<p>
                <span>${item.count}<span>
            `
        
            wrap.append(div)
        })
    }

    console.log(inp.value);
    inp.value = '';
})