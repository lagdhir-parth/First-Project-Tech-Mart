searchbar= document.querySelector('.searchBar');

searchbar.addEventListener('mouseover', function() {
    searchbar.style.border = '2px solid #000';
});

searchbar.addEventListener('mouseout', function() {
    searchbar.style.border = '2px solid transparent';
});

navM_a = document.querySelectorAll('.navM-a');

navM_a.forEach(ele => {
    ele.addEventListener('mouseover', function() {
    ele.style.borderBottom = '3px solid black';
    });
    ele.addEventListener('mouseout', function() {
    ele.style.borderBottom = '3px solid transparent';
    });
});

logoContainer = document.querySelector('.logo-container');

logoContainer.addEventListener('mouseover', function() {
    logoContainer.style.border = '2px solid black';
});

logoContainer.addEventListener('mouseout', function() {
    logoContainer.style.border = '2px solid transparent';
}); 

homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('mouseover', function() {
    homeBtn.style.border = '2px solid black';
});

homeBtn.addEventListener('mouseout', function() {
    homeBtn.style.border = '2px solid transparent';
});

cartBtn = document.querySelector('.cart-btn');

cartBtn.addEventListener('mouseover', function() {
    cartBtn.style.backgroundColor = 'rgb(0,0,0,0.75)';
});

cartBtn.addEventListener('mouseout', function() {
    cartBtn.style.backgroundColor = 'black';
});

cartBtn.addEventListener("click", function() {
    let cartCount = document.querySelector('.cart-count');
    cartCount.textContent = 0 ;
});

addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

addToCartBtn.forEach(btn => {
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = 'rgb(0,0,0,0.75)';
    });
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = 'black';
    });
    btn.addEventListener("click", function() {
        let cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
    });
});

buyBtn = document.querySelectorAll('.buy-btn');

buyBtn.forEach(btn => {
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = 'rgb(0,0,0,0.75)';
    });
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = 'black';
    });
});

product= document.querySelectorAll('.pro');

product.forEach(pro => {
    pro.addEventListener('mouseover', function() {
        pro.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.2)';
        pro.style.transform = 'scale(1.05)';
    });
    pro.addEventListener('mouseout', function() {
        pro.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
        pro.style.transform = 'scale(1)';
    });
});

sIcon= document.querySelectorAll('.s-icon');

sIcon.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', function() {
        icon.style.transform = 'scale(1)';
    }); 
});

searchVal = document.querySelector('.searchVal');
heading= document.querySelector('.heading');

searchVal.addEventListener("change", function() {
    let searchText = searchVal.value.trim().toLowerCase();
    let count = 0;
    if(searchText === 'All' || searchText === '' || searchText === 'all'){
        product.forEach(pro => {
            pro.style.display = 'flex';
        });
        heading.textContent = "Our Products...";
        return;
    }
    product.forEach(pro => {
        let productName = pro.querySelector('h2').textContent.trim().toLowerCase();
        if (productName.includes(searchText)) {
            pro.style.display = 'flex';
            count++;
        }
        else {
            pro.style.display = 'none';
        }
    });

    if(count === 0) {
        heading.textContent = "No products found...";
    }
    else {
        heading.textContent = "Products found: " + count;
    }
});