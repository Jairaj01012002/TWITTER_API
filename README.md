# TWITTER_API
So in this project, I have created a third party restful api that can perform different request from twitter api.
### Languages Used
---
1.  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

### Tech stack and database used
---
1.  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>

2.  <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
Let's see the high level design of the project.
# Overall Design
![HLD overall](https://user-images.githubusercontent.com/54246473/159264196-ce9f634c-b73f-42d8-a524-328e5a5c4e82.jpeg)
So user will make request to our third party api, which will make request to twitter's api and then twitter api will make request to different url.In the same way response will come from twitter api to third party api to our users. Admin will have the control of database.
# Database Design
![Hld databse](https://user-images.githubusercontent.com/54246473/159264686-0c8c7ff9-303d-43db-9757-d9ff31d8091f.jpeg)
We have used only one table in our database that will store the username, its twitter_username and password of its twitter account. The twitter_username would be unique as one no two or more user can have same twitter_username.
# API Design
In our api design we have created api for different functionalities, such as:-
* For signin
* For signup
* For top n_user
* For tweet details
* For user's tweets
* For top public tweet of a user
# Testing
I have tested different request on thunder client instead of postman, the screenshot are attached below. For top n user I have tested the functionalities by giving n to as a body of our response.
![WhatsApp Image 2022-03-20 at 23 20 36](https://user-images.githubusercontent.com/54246473/159265874-9a0386b0-44eb-4a2d-9a11-a672b0042d2d.jpeg)
![WhatsApp Image 2022-03-20 at 23 20 50](https://user-images.githubusercontent.com/54246473/159265887-9972804e-f515-4374-8d57-4c97f73f0152.jpeg)
![WhatsApp Image 2022-03-20 at 23 20 54](https://user-images.githubusercontent.com/54246473/159265890-0710f5e7-2128-4e71-85a9-0dc73d5fecde.jpeg)
![WhatsApp Image 2022-03-20 at 23 20 29](https://user-images.githubusercontent.com/54246473/159265895-bd44b7eb-dbf1-49d3-ba43-11d5e99adc56.jpeg)


