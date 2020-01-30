# CLASS DODO
**ClassDodo** is an open source class management system that helps teachers monitor their student performance
The application provides students with test questions for each subject. It is ideal for lesson teachers and form teachers. It
is developed to illustrate how to create an app using microservice archieture that scales.

## Architecture


## Features
![screenshot](https://github.com/Aliemeka/classdodo/blob/master/ClassDodo.png)

* Classroom dashbord displaying different subjects with test
* Teachers can sign up and, create new subjects and create multiple test for each project they've created
* Students can login and attempt tests in which they are graded and recorded
* The records of each students can be viewd to know their performance in certain subjects
* The main administrator can view all the records and add or remove users

## Requirements
To get started you need the following installed on your local machine<br>
**Python v>=3.5** <br>
**npm v>=6.4.1** <br>
**npm v>=6.4.1** <br>
**Python v>=3.6**

## Class Dodo Backend
Backend developed using Django and django-rest-framework. The backend is hosted on the Backend service on a Docker containers
in Kubernetes clusters.

### Dependencies
#### Main dependencies
* [Django v3](https://docs.djangoproject.com/en/3.0/ "Django") for developing the backend
* [django-rest-framework](https://www.django-rest-framework.org/ "django-rest-framework") for api configuration
* [django-rest-auth](https://django-rest-auth.readthedocs.io/en/latest/ "django-rest-auth") to enable token and session authentication
* [django-allauth](https://django-allauth.readthedocs.io/en/latest/installation.html "django-allauth") to allow custom user registration and authentication
* [django-corsheaders](https://github.com/adamchainz/django-cors-headers "django-corsheaders") to allow the frontend access to api

### In development
* In development mode, ensure to set <code>DEGUB=True</code> in <code>settings.py</code>

### Installation 
#### on local machine
* Fork this project [here](https://github.com/Aliemeka/classdodo "here")
* Clone this repository 
* Navigate into the root folder
* Open a terminal (bash preferably) from the folder
* Run <code>virtualenv env</code> to ensure that depencies are up to date
* Run <code>source env/Scripts/activate</code> for windows users or <code>source env/bin/activate</code> on Mac or Linux
* Run <code>pip install -r requirements.txt</code> *Ensure you set the environment on your IDE to use the virtual enviroment*
* Run <code>python3 manage.py runserver</code>


## Class Dodo Frontend
The client side for this application was

Enter these command on the command line
* <code>cd client</code>
* <code>yarn build</code> or <code>npm run build</code>

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
The client is ready to be deployed!

## Deployment on Google Kubernetes Engine
The app using consist of two services; a backend service will contain the django app and serve as the api provider for the application



### FRONTEND DEPLOYMENT
**Setting up the docker image for the React App**
* Make your image <code>DP=[YOUR_DOCKER_ID]/[NAME_YOUR_IMAGE:1.0]</code>
* <code>docker run build</code>
* Run the command
<code>docker run -d -p 80:80 $DP</code> run the docker image
* Login your docker account <code>docker login --username=[YOUR_DOCKER_ID]</code>
* Push to a remote container repo <code>docker push $DP</code><br>

**Connecting to Google Cloud Platform**
* Initialize the folder to be a gcloud repo <br> *You will need to have the **Google Cloud SDK** installed on your system*
* Run <code>gcloud init</code>
* Login using <code>gcloud login</code> Or <code>gcloud config auth login</code>
* Choose a project <code>gcloud config set project [PROJECT_ID]</code> <br>
* Pick a region<br>
 <code>gcloud config set compute/region [COMPUTE_REGION]</code><br>

**Deploying on Kubernetes Engine**
* Create a container cluster
<code>gcloud container clusters create [CLUSTER_NAME]</code>
* Create a Kubernetes deployment image
kubectl create deployment [DEPLOYMENT_NAME e.g test] --image $DP
* Expose your deployment
kubectl expose deployment [DEPLOYMENT_IMAGE_NAME] --type LoadBalancer --port 80 --target-port 80
To find the external IP address of your app
kubectl get services
Your Application should great
:thumbs-up:

## Contribution
When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Welcome Additions
1. Enabling teachers to create assignments
2. Linking it up with Firestore
3. Adding enrollments
4. Feel free to sniff out bugs too

### Pull Request Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Make all pull requests of new features to the **develop** branch so it can be project



### Licensing
This project uses MIT License
