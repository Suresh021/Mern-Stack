const cart = {
    items: [],
    addItems: function (item) {
        this.items.push(item);
    },
    showItems: function () {
        console.log(this.items);
    }
}
cart.addItems("Laptop")
cart.addItems("Desktop")
cart.showItems()