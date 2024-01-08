## Installation

1. Run `npm install` to download all dependencies.
2. Run `npm start` to start the application.
3. Runs the app in the development mode on (http://localhost:3000).

# A little bit about my application

This is my Employee Polls Application. The application was created using a "_DATA.js file which represents a fake database and lets you access the data as well as React/Redux.
You can login with your username and password. This will take you to the dashboard where there are answered and unanswered questions. You can view qustions as well as answer them. You can also create a new poll with your own questions of would you rather. There is also a leaderboard to see the amount of votes that has been cast by the users within the polls. You can logout as well when you are done. The project is bootstrapped using Create React App using a Redux template.

# I created 4 users with the following username and passwords.

1.  Username: chrisbrady
    Password: password123

2.  Username: angelalavene
    Password: abc321

3.  Username: stacyclark
    Password: xyz123

3.  Username: billythompson
    Password: pass246

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description         
|-----------------|------------------|-------------------     
| id | String | The user’s unique identifier 
| password | String | The user’s password in order to log in the application 
| name | String | The user’s first name  and last name    
| avatarURL | String | The path to the image file 
| questions | Array | A list of ids of the polling questions this user created
| answers | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The question’s unique identifier 
| author | String | The author’s unique identifier 
| timestamp | String | The time when the question was created
| optionOne | Object | The first voting option
| optionTwo | Object | The second voting option

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes | Array | A list that contains the id of each user who voted for that option
| text | String | The text of the option 

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question
| optionOneText| String | The text of the first option 
| optionTwoText | String | The text of the second option 

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted
| author | String | The id of the user who posted the question
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
|timestamp|String | The time when the question was created

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question
| qid | String | The id of the question that was answered
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`

### npm run test

Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Snapshots:   3 passed, 3 total
Time:        4.021 s
Ran all test suites.

1. _DATA.js test
2. NewPoll test
3. Nav test
4. Login test