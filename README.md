<p align="center">
  <img src='https://github.com/cgmbauer/assets/blob/master/logo/rocketseat.png' alt='GoStack logo' width="100%" height="170px" />   
</p> 

# GoFinances Web

Web application that allows the user to upload files (.csv, application/vnd.ms-excel and text/csv) with financial transactions and then list them on the main page.  

On the main page, the user can see their account balance and a list with their incomes and outcomes items.  

Your can check  out the preview below!


![gofinances-web demonstration gif](https://github.com/cgmbauer/assets/blob/master/gifs/gofinancesspeed.gif)   

## Built With

- [ReactJS v.16.13.1](https://reactjs.org/)

- [Axios v.0.19.2](https://github.com/axios/axios)

- [TypeScript v.3.7.2](https://www.typescriptlang.org/)

## Getting Started

### Requiremtents

- [yarn v.1.x.x](https://classic.yarnpkg.com/en/docs/install)

### Instalation

- **1º.** First, clone this repository, to get the front-end application:
```sh
git clone https://github.com/cgmbauer/github-explorer.git
```
- **2º.** Go inside the folder, using your terminal, and execute the command ``` yarn ```, to install all the dependencies. 

- Then you will need the back-end from this application. You can get it [here](https://github.com/cgmbauer/desafio-database-upload),
or you can just clone the repository following the code below:
```sh
git clone https://github.com/cgmbauer/desafio-database-upload.git
```
- **4º.** Repeat step **3º**, but this time, you'll go inside de back-end's folder.

- **5º.** To start the application, first go on your terminal (on the back-end directory) and run ```yarn dev:server```. This will start the back-end of the application.

- **6º.** Then, to start the front-end, go on your terminal (on the front-end directory) and run ```yarn start```. This will start the front-end of the application.

- **7º.** Remember, both front-end and back-end must be running. You can have two or more terminals open, running the steps **5º** and **6º**.

- Make sure you're also running docker with Postgres image. I'll be adding a step by step guide on this topic in the future.

### Note

- The import file must follow this [template](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).: 

## Acknowledgments

- [RocketSeat](https://rocketseat.com.br/)

