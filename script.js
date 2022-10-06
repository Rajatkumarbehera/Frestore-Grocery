// handling the menu button

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}



// handling the countdown timer

let countDate = new Date('january 1, 2023 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    let m = Math.floor((gap % day) / hour);
    let h = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);
    
    document.getElementById('day').innerHTML = d.toString().padStart(2, '0');
    document.getElementById('hour').innerHTML = m.toString().padStart(2, '0');
    document.getElementById('minute').innerHTML = h.toString().padStart(2, '0');
    document.getElementById('second').innerHTML = s.toString().padStart(2, '0');
}

setInterval(function() {
    countDown();
}, 1000);



// handle the itemCatagory

let itemCatagory = [
    {
        itemTitle: 'vegetables',
        discountTitle: 'upto 50% off',
        imagePath: 'images/category-1.png',
    },
    {
        itemTitle: 'juices',
        discountTitle: 'upto 45% off',
        imagePath: 'images/category-2.png',
    },
    {
        itemTitle: 'meat',
        discountTitle: 'upto 65% off',
        imagePath: 'images/category-3.png',
    },
    {
        itemTitle: 'fruits',
        discountTitle: 'upto 30% off',
        imagePath: 'images/category-4.png',
    }
];

let categoryCard = document.querySelector('.box-container');

for(let i=0; i<itemCatagory.length; i++) {
    categoryCard.innerHTML +=
        `<div class="box">
            <h3>${itemCatagory[i].itemTitle}</h3>
            <p>${itemCatagory[i].discountTitle}</p>
            <img src="${itemCatagory[i].imagePath}" alt="">
            <a href="" class="btn">shop now</a>
        </div>`
}


// handling the itemdetails

let itemDetails = [
    {
        imagePath: 'images/product-1.png',
        itemName: 'banana',
        oldPrice: 20,
        newPrice: 10,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-2.png',
        itemName: 'tomato',
        oldPrice: 50,
        newPrice: 40,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-3.png',
        itemName: 'orange',
        oldPrice: 150,
        newPrice: 120,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-4.png',
        itemName: 'milk',
        oldPrice: 40,
        newPrice: 30,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-5.png',
        itemName: 'grapes',
        oldPrice: 80,
        newPrice: 65,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-6.png',
        itemName: 'almonds',
        oldPrice: 200,
        newPrice: 195,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-7.png',
        itemName: 'apple',
        oldPrice: 65,
        newPrice: 55,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-8.png',
        itemName: 'butter',
        oldPrice: 145,
        newPrice: 140,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-9.png',
        itemName: 'carrot',
        oldPrice: 50,
        newPrice: 45,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-10.png',
        itemName: 'egg',
        oldPrice: 150,
        newPrice: 140,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-11.png',
        itemName: 'potato',
        oldPrice: 30,
        newPrice: 25,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-12.png',
        itemName: 'cabbage',
        oldPrice: 35,
        newPrice: 20,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-13.png',
        itemName: 'meat',
        oldPrice: 120,
        newPrice: 100,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-14.png',
        itemName: 'coriander leaves',
        oldPrice: 25,
        newPrice: 15,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    },
    {
        imagePath: 'images/product-15.png',
        itemName: 'cardbury',
        oldPrice: 50,
        newPrice: 35,
        discount: function() {
            return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
        }
    }
];

let itemCard = document.querySelector('.box-container-one');

for(let i=0; i<itemDetails.length; i++) {
    itemCard.innerHTML += 
        `<div class="box">
            <span class="discount">GET ${itemDetails[i].discount()} % off</span>
            <div class="icons">
                <a href="" class="fa-solid fa-heart"></a>
                <a href="" class="fa-solid fa-share"></a>
                <a href="" class="fa-solid fa-eye"></a>
            </div>
            <img src=${itemDetails[i].imagePath}  alt="">
            <h3>${itemDetails[i].itemName}</h3>
            <div class="starprice">
                <div class="stars">
                    <input id="rating-1" type="radio" name="rating1"/><label for="rating-1"><i class="fa-solid fa-star"></i></label>
                    <input id="rating-2" type="radio" name="rating1"/><label for="rating-2"><i class="fa-solid fa-star"></i></label>
                    <input id="rating-3" type="radio" name="rating1"/><label for="rating-3"><i class="fa-solid fa-star"></i></label>
                    <input id="rating-4" type="radio" name="rating1"/><label for="rating-4"><i class="fa-solid fa-star"></i></label>
                    <input id="rating-5" type="radio" name="rating1"/><label for="rating-5"><i class="fa-solid fa-star"></i></label>
                </div>
                <div class="price"> &#8377;${itemDetails[i].newPrice} <span> &#8377;${itemDetails[i].oldPrice} </span></div>
            </div>
            <div class="quantity">
                <span>quantity : </span>
                <input type="number" min="1" max="1000" value="1">
                <span> /kg </span>
            </div>
            <div class="buttons">
                <a href="" class="btn buy">buy now</a>
                <a href="" class="btn cart">add to cart</a>
            </div>
        </div>`;
}