# Lunja Academy

**Lunja** is an E-learning plateform that aims to help students share knowledge between each other about specific university subjects. the Idea is providing students with the tools to create their own **Assets** that contains *Quizzes* and *documents* wich helps them study, these **Assets** could be Private, shared with everyone in the plateform OR specific for a **class**. 

**class** is another concept that lunja supports, it gathers ambisious Students sharing their usefull **Assets** with their friends along with creating **posts** to ask questions, make announcements or for other purposes that serves the learning process. 

Lunja's slogan is:

## "Students For Students"


|                | Asset                                      | Post                                       |
|----------------|--------------------------------------------|--------------------------------------------|
|Private         |`"can be seen by creator only"`             |                                            |
|Class           |`"can be seen by class members"`            |`"can be seen by class members"`            |
|Public          |`"can be seen by everyone on the plateform"`|`"can be seen by everyone on the plateform"`|

## User Contributions Structure:

```mermaid
graph LR
A[Student] --> B((Asset)) --> E(Quiz) --> F(Question Card)
F --> G(Answers Cards)
A  --> C(Post)
B --> D(Document)
```

## Lunja's Logo:
![alt text](https://github.com/LAMNAZZAH/Lunja/blob/main/client/public/lunjaLandscapeLight-01.jpg)


## Api Endpoints
### Authentification:


|     SN           |Method     |Route    |   Request Data | Response Data | description
|----------------|-------------------------------|-----------------------------|--|---|---
|1|POST|/api/account/auth/login           |{"usernameOrEmail":"<$username>"} | {"ok": Boolean, token} |login
|2|POST|/api/account/auth/register |{"first_name", "last_name", "username", "level", "password", "account_type", "email"}| {"ok":Boolean, "errors":[]}| register 
|3|GET|/api/account/auth |    | {"isLoggedIn: Boolean, "data":{}} | checks if the user is LoggedIn

### University:


|     SN           |Method     |Route    |   Request Data | Response Data | description
|----------------|-------------------------------|-----------------------------|--|---|---
|1|GET|/api/university          | | {"ok": Boolean, universities: [{value: [id], label: [name] }] } |select all universities names and ids


### univuser:


|     SN           |Method     |Route    |   Request Data | Response Data | description
|----------------|-------------------------------|-----------------------------|--|---|---
|1|GET|/api/univuser?userId=${user_id}| | {ok: Boolean, univuser:{ joined_at: [], degree_optained: [], speciality_id: [], university: [name], speciality: [name] } | select a users' university including speciality name


### Speciality:


|     SN           |Method     |Route    |   Request Data | Response Data | description
|----------------|-------------------------------|-----------------------------|--|---|---
|1|GET|/api/speciality?university=${university_id}| | {ok: Boolean, specialities:{ value: [id], label: [name] } | select specialities that belong to a university


### Interest:


|     SN           |Method     |Route    |   Request Data | Response Data | description
|----------------|-------------------------------|-----------------------------|--|---|---
|1|GET|/api/interest?userId=${user_id}| | {ok: Boolean, interests:[] | select interests for a specific user
