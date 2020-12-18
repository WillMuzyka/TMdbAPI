<h3  align="center">
Project TMdbAPI
</h3>

<p  align="center">
<a  href="https://github.com/WillMuzyka">
<img  alt="Made with Love"  src="https://img.shields.io/badge/made%20with-love-%2304D361">
</a>
<a  href="LICENSE">
<img  alt="License"  src="https://img.shields.io/badge/license-MIT-%2304D361">
</a>
</p>

<p  align="center">
<a  href="#joystick-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#hourglass_flowing_sand-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#joystick-docker">Docker</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#cop-remarks">Remarks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#memo-license">License</a>
</p>

This is an application that gathers a movie information and its translations.

- Project developed during a technical test.

## :joystick: Technologies

This project used a lot of technologies and concepts. A few of them are listed below.
(Also some languages, libraries and frameworks):

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)

## :hourglass_flowing_sand: Installation:

To install and use this application, first be sure that you have node version 12, npm and/or yarn installed (you can run everything with npm, if you prefer, but I recommend yarn). They are essential for running the application.

The whole project was made based on Node.js and docker. If you want to use this library, please clone this repository and check the following steps.

**Steps**

1. Open your computer's terminal and change for the directory that you want to keep this application. Run the code `git clone https://github.com/WillMuzyka/TMdbAPI.git`.

2. Run the command `yarn` or `npm install` to install all the required packages listed on the file *`package.json`*.

3. Set the environmental variables that suits your setup. An example can be found at the root directory of this project.

4. The backend consumes a Postgres Database, so you will need have them running. I used docker, but feel free to use any other service. The configurations for the databases can be found at `ormconfig.json`.

5. You'll now run all the migrations for the database with the command `yarn typeorm migrations:run`. Be sure to have the database already created with the proper name.

6. After installing the packages, run the command `yarn dev:server` to start the backend. This will keep running until you end the application (Ctrl + C) or close the window that is running. It will not run in the background, so you need to keep the window open. This application uses the port `:3333`, so be careful to not have another application trying to run on the same port.

7. Enjoy the application!

## :joystick: Docker

This project can be setup all within a container using docker. For this, first be sure to have installed both docker and docker-compose on your machine.
To start the application, run `docker-compose up -d`, it will build (if needed) and start the application in detached mode.
To stop, run `docker-compose stop`.

## :cop: Remarks

Please notice that this project was made during a technical test to evaluate my knowledge on the concepts of the node.js, typescript, postgres and docker.

This is not a deploy version of the application and may not be optimized. The whole purpose of this code is for evaluation and I do not have any guaranty if you want to deploy or use it commercially.

## :memo: LICENSE

This project is under the MIT License. For more information, please refer to [LICENSE](LICENSE).