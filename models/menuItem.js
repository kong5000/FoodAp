class MenuItem {
    constructor(id, cuisineId, title, price, imageUrl, isGlutenFree, isVegan, isVegetarian, description) {
        this.id = id
        this.cuisineId = cuisineId
        this.title = title
        this.price = price
        this.imageUrl = {uri: imageUrl}
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.description = description
    }
}

export default MenuItem