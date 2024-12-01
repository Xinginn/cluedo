# Cluedo-GPT
An investigation game powered by ChatGPT

## App description
This app is a small investigation game. It generates murder cases using ChaGPT; the goal is to find the culprit by interragating suspects in a given time.
The player can move across different scenes and chat with suspects. The questions asked by the player are sent to ChatGPT along with the investigation informations, the discussion history and the suspect personality, to build a unique and believable investigation each time.

## Project Structure
The project is separated into two folders: 
**cluedo_front** for the frontend (a React Progressive Web App), and **cluedo_back** for the backend (an ExpressJS serving a REST API and handling prompts to OpenAI API )

## Frontend setup

### Install and run the user Interface
```
cd cluedo_front
npm install
npm run start
```

### .env file
- **Server URL**: The server URL should be set in the **.env** file in **REACT_APP_API_URL** field

## Backend setup

### Database setup
Assuming using a **Postgres** database and Prisma as **ORM**, after creating the database and seting the **DATABASE_URL** environment variable, run
`npx prisma migrate dev`
to generate the tables according to the schema declared in **cluedo_back/prisma/schema.prisma**

### Install and run the server
```
cd cluedo_back
npm install
npm run start
```


### .env file
- **Database connexion**: The connexion to the database is handled by Prisma ORM by using a connexion URL, which is set in the **.env** file on **DATABASE_URL** field
- **OpenAI API key**: An openAI key is required to prompt ChatGPT for answers. It is set in the **.env** file on **OPENAI_KEY** field
- **Auth Token key**: A secret key is used to sign auth tokens. It is set in the **.env** file on **JWT_KEY** field

