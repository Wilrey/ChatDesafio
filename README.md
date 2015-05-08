# ChatDesafio

After configuration, to use the chat, open your browser and type localhost
(its on default port 80, so no need to specify a port)

This chat room uses nodejs, with the following tools and requirements:

NodeJS
https://nodejs.org/download/

Sublime Text source code editor
http://www.sublimetext.com/2

Package Control - Sublime Text package manager
https://packagecontrol.io/installation#st2

PostgreSQL database
http://www.postgresql.org/download/windows/

Packages for this proyect (must be run in command line)

Web Framework Express package
npm install --save express@4.10.2

Package for sockets Socket.IO (Server & Client)
npm install --save socket.io

PostgreSQL package client for node.js
npm install pg pg-native

For this example we use database PostgreSQL dbName:postgres usr:postgres pwd:12345

Simple database table estructure to store the messages:

CREATE TABLE messages
(
  chat_user text,
  chat_message text
)
WITH (
  OIDS=FALSE
);
ALTER TABLE messages
  OWNER TO postgres;