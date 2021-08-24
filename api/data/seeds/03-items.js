exports.seed = function(knex, Promise) {
    return knex('items').insert([
        {
            user_id: '1',
            item_name: 'Eggs',
            item_description: 'Animal Products',
            item_price: 0.50,
            item_country: 'KEN',
            item_seller: 'Adam'
        },
        {
            user_id: '2',
            item_name: 'Agwedde Beans',
            item_description: 'Beans',
            item_price: 1.00,
            item_country: 'KEN',
            item_seller: 'Ben'
        },
        {
            user_id: '3',
            item_name: 'Dry Maize',
            item_description: 'Cereals - Maize',
            item_price: 1.50,
            item_country: 'SSD',
            item_seller: 'Christine'
        },
        {
            user_id: '4',
            item_name: 'Avocado',
            item_description: 'Fruits',
            item_price: 2.00,
            item_country: 'UGA',
            item_seller: 'Juliane'
        },
        {
            user_id: '5',
            item_name: 'Cassava Chips',
            item_description: 'Roots & Tubers',
            item_price: 2.50,
            item_country: 'DRC',
            item_seller: 'Kennedy'
        },
        {
            user_id: '6',
            item_name: 'Brinjal/Eggplant',
            item_description: 'Vegetables',
            item_price: 3.00,
            item_country: 'KEN',
            item_seller: 'Kristian'
        },
        {
            user_id: '1',
            item_name: 'Finger Millet',
            item_description: 'Cereals - Other',
            item_price: 0.49,
            item_country: 'SSD',
            item_seller: 'Adam'
        },
        {
            user_id: '2',
            item_name: 'Coffee (Arabica)',
            item_description: 'Other',
            item_price: 0.99,
            item_country: 'KEN',
            item_seller: 'Ben'
        },
        {
            user_id: '3',
            item_name: '',
            item_description: '',
            item_price: 1.49,
            item_country: '',
            item_seller: 'Christine'
        },
        {
            user_id: '4',
            item_name: 'Chic Pea',
            item_description: 'Peas',
            item_price: 1.99,
            item_country: 'DRC',
            item_seller: 'Juliane'
        },
        {
            user_id: '5',
            item_name: 'Ground Nuts',
            item_description: 'Seeds & Nuts',
            item_price: 2.49,
            item_country: 'TZA',
            item_seller: 'Kennedy'
        },
        {
            user_id: '6',
            item_name: 'Imported Rice',
            item_description: 'Cereals - Rice',
            item_price: 2.99,
            item_country: 'RWA',
            item_seller: 'Kristian'
        },
        {
            user_id: '1',
            item_name: 'Turkey',
            item_description: 'Animal Products',
            item_price: 0.25,
            item_country: 'DRC',
            item_seller: 'Adam'
        },
        {
            user_id: '2',
            item_name: 'Yellow Beans',
            item_description: 'Beans',
            item_price: 0.75,
            item_country: 'RWA',
            item_seller: 'Ben'
        },
        {
            user_id: '3',
            item_name: 'Wheat Flour',
            item_description: 'Cereals - Other',
            item_price: 1.25,
            item_country: 'TZA',
            item_seller: 'Christine'
        },
        {
            user_id: '4',
            item_name: 'Pineapples',
            item_description: 'Fruits',
            item_price: 1.75,
            item_country: 'DRC',
            item_seller: 'Juliane'
        },
        {
            user_id: '5',
            item_name: 'Sunflower Seed Cake',
            item_description: 'Seeds & Nuts',
            item_price: 2.25,
            item_country: 'DRC',
            item_seller: 'Kennedy'
        },
        {
            user_id: '6',
            item_name: 'Tomatoes',
            item_description: 'Vegetables',
            item_price: 2.75,
            item_country: 'BDI',
            item_seller: 'Kristian'
        }
        
    ])
}