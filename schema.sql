create table users(
    id varchar(100) primary key,
    userid varchar(30) unique,
    email varchar(30) unique not null,
    passwordd varchar(30) not null
);