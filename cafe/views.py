from django.shortcuts import render

def home(request):
    # data structure for menu items
    coffee_items = [
        {"name": "Espresso", "price": 90, "image_url": "static/images/menu/espresso.jpg", "description": "Rich and full-bodied espresso shot."},
        {"name": "Cappuccino", "price": 120, "image_url": "static/images/menu/cappuccino.png", "description": "Espresso with steamed milk and foam."},
        {"name": "Iced Spanish Latte", "price": 120, "image_url": "static/images/menu/Iced-Spanish-Latte.png", "description": "Iced coffee with condensed milk."},
        {"name": "Americano", "price": 60, "image_url": "static/images/menu/americano.jpeg", "description": "Espresso with hot water."},
    ]
    pastries_items = [
        {"name": "Croissant", "price": 80, "image_url": "static/cafe/images/menu/croissant.jpg", "description": "Buttery, flaky pastry."},
        {"name": "Bagel", "price": 90, "image_url": "static/cafe/images/menu/bagel.png", "description": "Chewy and delicious bagel."},
        {"name": "Muffin", "price": 75, "image_url": "static/cafe/images/menu/muffins.png", "description": "Freshly baked muffin."},
        {"name": "Scones", "price": 85, "image_url": "static/cafe/images/menu/chocolate-cake.jpg", "description": "Delicious scones with clotted cream."},
    ]
    desserts_items = [
        {"name": "Cheesecake", "price": 150, "image_url": "static/cafe/images/menu/cheesecake.png", "description": "Creamy New York style cheesecake."},
        {"name": "Tiramisu", "price": 160, "image_url": "static/cafe/images/menu/tiramisu.jpg", "description": "Classic Italian coffee-flavored dessert."},
        {"name": "Chocolate Cake", "price": 140, "image_url": "static/cafe/images/menu/chocolate-cake.jpg", "description": "Rich and moist chocolate cake."},
        {"name": "Brownie", "price": 120, "image_url": "static/cafe/images/menu/brownie.png", "description": "Fudgy brownie with a crispy top."},
    ]
    specials_items = [
        {"name": "Seasonal Latte", "price": 140, "image_url": "static/cafe/images/menu/seasonal-latte.jpg", "description": "Our special seasonal latte with unique flavors."},
        {"name": "Breakfast Set", "price": 220, "image_url": "static/cafe/images/menu/breakfast-combo.png", "description": "Coffee of your choice with any pastry."},
        {"name": "Dessert Combo", "price": 300, "image_url": "static/cafe/images/menu/dessert-combo.jpg", "description": "Choose any two desserts and a coffee."},
        {"name": "Happy Hour", "price": 180, "image_url": "static/cafe/images/menu/happy-hour.jpeg", "description": "Buy one get one free on selected drinks."},
    ]

    context = {
        "title": "Home",
        "coffee_items": coffee_items,
        "pastries_items": pastries_items,
        "desserts_items": desserts_items,
        "specials_items": specials_items,
    }
    return render(request, 'cafe/home.html', context)

def menu(request):
    return render(request, 'cafe/menu.html', {'title': 'Menu'})

def about(request):
    return render(request, 'cafe/about.html', {'title': 'About'})

def contact(request):
    return render(request, 'cafe/contact.html', {'title': 'Contact'})