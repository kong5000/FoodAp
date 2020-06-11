import Cuisine from '../models/cuisine'
import MenuItem from '../models/menuItem'
export const CUISINES = [
    new Cuisine('id1', 'Pizza', 'red', 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id2', 'Burgers', 'blue', 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id3', 'Chinese', 'green', 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id4', 'French', 'blue', 'https://images.pexels.com/photos/3791089/pexels-photo-3791089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id5', 'Italian', 'red', 'https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id6', 'Thai', 'purple', 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id7', 'Greek', 'blue', 'https://images.pexels.com/photos/709823/pexels-photo-709823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Cuisine('id8', 'Indian', 'green', 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
]

export const MENU_ITEMS = [
    new MenuItem(
        'm1',
        'id1',
        'Pepperoni Pizza',
        12,
        'https://images.pexels.com/photos/4109128/pexels-photo-4109128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        false
    ),
    new MenuItem(
        'm2',
        'id1',
        'Veggie Pizza',
        10,
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        true
    ),
    new MenuItem(
        'm3',
        'id2',
        'Cheeseburger',
        10,
        'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        false
    ),
    new MenuItem(
        'm4',
        'id2',
        'Veggieburger',
        8,
        'https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        true,
        true,
        true
    ),
    new MenuItem(
        'm5',
        'id3',
        'Chow Mein',
        10,
        'https://images.pexels.com/photos/3926135/pexels-photo-3926135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        true,
        false
    ),
    new MenuItem(
        'm6',
        'id3',
        'Fried Rice',
        9,
        'https://images.pexels.com/photos/1630495/pexels-photo-1630495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        false
    ),
    new MenuItem(
        'm7',
        'id4',
        'Quiche Lorraine',
        12,
        'https://images.pexels.com/photos/288264/pexels-photo-288264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        false
    ),
    new MenuItem(
        'm8',
        'id4',
        'Croissant',
        2,
        'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        true
    ),
    new MenuItem(
        'm9',
        'id5',
        'Tortellini',
        15,
        'https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        true
    ),
    new MenuItem(
        'm10',
        'id6',
        'Tom Yum',
        15,
        'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        true,
        false,
        true
    ),
    new MenuItem(
        'm11',
        'id7',
        'Rack of Lamb',
        25,
        'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        true,
        false,
        false
    ),
    new MenuItem(
        'm12',
        'id7',
        'Greek Salad',
        7,
        'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        true,
        false,
        true
    ),
    new MenuItem(
        'm13',
        'id8',
        'Samosas',
        7,
        'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        true,
        true
    ),
    new MenuItem(
        'm14',
        'id8',
        'Pakoras',
        5,
        'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        false,
        false,
        true
    ),

]