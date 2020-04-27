# Assignment-Mooc
Creating apis and displaying in the front end

Courses Lisiting Application

Create a MERN stack application showing the courses list and has functionalities filter and sort to access required courses.

Getting Started
To install backend dependencies

cd mooc-courses
npm install
To install front end dependencies

cd client
npm install
Update the default.json file with your MongoDB connection string

vim mooc-courses/config/default.json
{
    "mongoURI": "mongodb+srv://<username>:<password>@courses-zqmq8.mongodb.net/<databaseName>?retryWrites=true&w=majority"
}
Go back to mooc-courses folder and run below command to start the application

npm run dev
