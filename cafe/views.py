from django.shortcuts import render

def home(request):
    # Example menu items
    coffee_items = [
        {"name": "Espresso", "price": 90, "image_url": "static/images/menu/espresso.jpg", "description": "Rich and full-bodied espresso shot."},
        {"name": "Cappuccino", "price": 120, "image_url": "static/images/menu/cappuccino.png", "description": "Espresso with steamed milk and foam."},
        {"name": "Iced Spanish Latte", "price": 120, "image_url": "static/images/menu/Iced-Spanish-Latte.png", "description": "Espresso with steamed milk and foam."},
        {"name": "Americano", "price": 60, "image_url": "static/images/menu/americano.jpeg", "description": "Espresso with steamed milk and foam."},
    ]
    pastries_items = [
        {"name": "Croissant", "price": 80, "image_url": "static/images/croissant.jpg", "description": "Buttery, flaky pastry."},
        {"name": "Chocolate Muffin", "price": 75, "image_url": "static/images/chocolate-muffin.jpg", "description": "Rich chocolate muffin with chocolate chips."},
    ]
    desserts_items = [
        {"name": "Cheesecake", "price": 150, "image_url": "static/images/cheesecake.jpg", "description": "Creamy New York style cheesecake."},
        {"name": "Tiramisu", "price": 160, "image_url": "static/images/tiramisu.jpg", "description": "Classic Italian coffee-flavored dessert."},
    ]
    specials_items = [
        {"name": "Seasonal Latte", "price": 140, "image_url": "static/images/special-latte.jpg", "description": "Our special seasonal latte with unique flavors."},
        {"name": "Breakfast Set", "price": 220, "image_url": "static/images/breakfast-set.jpg", "description": "Coffee of your choice with any pastry."},
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