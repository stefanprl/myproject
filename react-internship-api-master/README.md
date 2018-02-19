# react-internship-api

### Prerequirements
1. Make sure you have [Node](https://nodejs.org/en/) installed;
2. Make sure you have [MySQL](https://dev.mysql.com/downloads/installer/) installed on your machine;
3. After installing MySQL, create a new database called `react_internship` ;


### Project requirements

####The application will have 3 types of users: 
  - System admin (id: 1);
  - Company user (id: 2);
  - User (id: 3);
  
####The main pages of our application:

  - **Login page**
  - **Register page** 
    - Only simple users can be created from this page
  - **Admin CRUD**
    - Accessible only for system admin's (user role id = 1);
    - Here the user has the possibility to CRUD , companies, etc
  - **Jobs CRUD and job details** 
    - Accessible only for company users (user role id = 2);
    - Here the user has the possibility to CRUD jobs, associated to their company
    - As a company user I can view who applied for any jobs created by me;
  - **My profile** page. 
    - Accessible only for simple users (user role id = 3);
    - Here the user has the possibility to CRUD CV related information (general info, list of educations, work experiences, skills, etc)
  - **Jobs list and job detail pages**
    - A list of opened jobs;
    - As a simple user I can apply for this job
    
                             

### Setup
Open terminal in the project folder and:
1. Run command `npm install` to download dependencies;
2. Run command `node_modules/.bin/sequelize db:migrate` to create DB tables;
3. Run command `node_modules/.bin/sequelize db:seed:all` to populate DB with initial values;
4. To reset DB run `node_modules/.bin/sequelize db:migrate:undo:all`  and run steps 2, 3 again;`

For more information regarding migrations and seeds visit [Sequelize](http://docs.sequelizejs.com/manual/tutorial/migrations.html)


### Starting server locally
Run command `npm start`;

### API 
For a list of available endpoint in our API visit [localhost:4000/api-docs/#/](http://localhost:4000/api-docs/#/)

### DB setup
![DB diagra](https://github.com/vt90/react-internship-api/blob/master/diagram.jpg)

