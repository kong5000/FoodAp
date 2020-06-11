class MenuItem {
    constructor(id, cuisineId, title, price, imageUrl, isGlutenFree, isVegan, isVegetarian) {
        this.id = id
        this.cuisineId = cuisineId
        this.title = title
        this.price = price
        this.imageUrl = imageUrl
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
    }
}

export default MenuItem