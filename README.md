# E-Commerce Server

## Description
This is a mock-up project for a back-end e-commerce server. Some functionality of this project includes manipulating categories, products, and tag tables. The purpose of this project is to learn how the fundamental architecture of a back-end e-commerce site works. This has taught me a lot about how databases relate to http route requests. This application works fine. However, I was unable to figure out how to remove duplicate productId and tagId keys. This does not impact the program but I would like to get rid of this issue in the future. 

## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)

## Installation

1. Navigate to your desired program installation directory and clone the repo using the following command:
```
git clone git@github.com:tyang896/e-commerce_server.git
```

2. To install program dependencies for this application, run the following command:
```
npm i
```
## Usage
1. In order to use this application, users will need to create a `.env` file and add their mysql credentials to it. Copy the following code and add your mysql password to `DB_PASSWORD`:

```
DB_NAME = "ecommerce_db"
DB_USER = "root"
DB_PASSWORD = "ENTER PASSWORD HERE"
```
2. Once you've added a `.env` file, you have to run `mysql -u root -p` and run `db/schema.sql` to use the `ecommerce_db` database. 
3. Exit mysql using the `exit;` command and run `npm run seed` to seed the files to your database. 
4. Start the server using `npm start`. The application should now be running on `http://localhost:3001` 
   
You can view a video demonstration of the application [here](https://drive.google.com/file/d/1Cr6R1P64jmuysnY8yalju-Nlf98fwR1B/view)

