## African Marketplace api endpoints

**API URL** 
https://african-marketplace-44.herokuapp.com/


## API endpoints

### Register as a user
#### POST /auth/register 

To create a new user the following data is required
{
  username: "string up to 50 characters longs, 
  password: "string min 10 characters up to 50 characters long"
}

It will return the following data to you

{
  username: "testUsername", 
  user_id: "5" 
}

### Login as a user
#### POST /auth/login 

{
  username: "testUsername", 
  password: "1234"
}

On a successful login it will return the following
{ 
  message: "welcome, testUsername",
  token: "eyJhbGciOiJ..."
}

Unsuccessful login with a unknown username will return 
{
  message: "This username is unknown please try again"
}


Unsuccessful login with the wrong password will return 
{
  message: "Please enter the correct password"
}


### Create a product
#### POST /auth/products/create

To submit a new product the following data is required 

{
  "itemDescription": "string up to 50 characters long",
  "itemName": "string up to 30 characters long",
  "itemPrice": "float",
  "itemCountry": "string exactly 3 in length",
  "itemSeller": "username"
}

### Products 
#### GET /products

This will return the data in the following format

{
  "itemDescription": "string up to 50 characters long",
  "itemName": "string up to 30 characters long",
  "itemPrice": "float",
  "itemCountry": "string exactly 3 in length",
  "itemSeller": "username"
}


