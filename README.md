# Cluedo-GPT
An investigation game powered by ChatGPT

## Project Structure
The project is separated into two folders: 
**cluedo_front** for the frontend (a React Progressive Web App)
**cluedo_back** for the backend (an ExpressJS serving a REST API and handling prompts to OpenAI API )

## Frontend setup
`
cd cluedo_front
npm install
npm run start
`
### .env file
The server URL should be set in the **.env** file in **REACT_APP_API_URL** field

## Backend setup
`
cd cluedo_back
npm install
npm run start
`

### .env file
**Database connexion** The connexion to the database is handled by Prisma ORM by using a connexion URL, which is set in the **.env** file on **DATABASE_URL** field
**OpenAI API key** An openAI key is required to prompt ChatGPT for answers. It is set in the **.env** file on **OPENAI_KEY** field
**Auth Token key** A secret key is used to sign auth tokens. It is set in the **.env** file on **JWT_KEY** field