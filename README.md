# AgriConnect - Crop Sowing Guide

AgriConnect is a revolutionary digital platform designed to bridge the gap between farmers and agricultural experts, facilitating knowledge sharing and access to crucial agricultural resources. This project aims to empower farmers with timely access to critical information, resources, and support, thereby promoting sustainable farming practices.

## Table Contents
1. Introduction Features
2. System Architecture
3. Technologies Used
4. Setup Instructions
5. Usage
6. Contributing

## Introduction
AgriConnect represents a significant step forward in harnessing the power of digital technology to address the challenges of crop overproduction and foster sustainable agricultural practices. Through its innovative features and functionalities, AgriConnect has emerged as a valuable resource for farmers, agricultural experts, and other stakeholders within the agricultural community.

## Features
1. Submit Crop: Farmers can submit details about their crops, including crop name, geographical region, state, and area in hectares.
2. Sowing Guide: Provides plots of crop sown versus geographical region, helping farmers make informed decisions to avoid overproduction.
3. Expert Advice: Farmers can connect with agricultural experts for guidance on best practices.
4. Pesticide Guide: Enables farmers to select appropriate pesticides for their crops, enhancing decision-making and productivity.
5. Farmer-to-Farmer Communication: A discussion forum where farmers can post blogs, reply to others' blogs, and share knowledge.

## System Architecture

The system architecture of AgriConnect is designed to perform several tasks:

1. Submit Crop
2. Sowing Guide
3. Expert Advice
4. Pesticide Guide
5. Farmer to Farmer Communication

## Technologies Used

1. MongoDB: A NoSQL database for storing various types of data related to crop details, pesticide information, user profiles, etc.

2. React: A JavaScript library for building user interfaces, used for creating dynamic and engaging web pages.

3. Node.js: A server-side JavaScript runtime environment for handling HTTP requests and generating dynamic content.

4. Express.js: A web application framework for Node.js, used to define routes, handle HTTP requests, and manage middleware.

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/AgriConnect.git
cd AgriConnect
```
2. Initiate npm environment
```bash
cd backend
npm init
```
```bash
cd fronted
npm init
```
3. Setup Backend
```bash
npm install express, mongoose, cors, body-parser
```
4. Setup Fronted 
```bash
npm install react,react-scripts --save
```
```bash
npm install react-router-dom
```
```bash
npm install chart.js
```
5. Setup package.json<br>
in the paskage.json file edit scripts section paste this into that section
 ```bash
    "test": "react-scripts test",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
```
6. Start Server<br>
 if nodemon is installed then run
```bash 
nodemon server
```
else
```bash 
node server
```
7. Start Client-Side Application
```bash
npm start
```
## Contributor
1. Onkar Waghmode
2. Shripad Wattamwar
3. Aditya Zite
4. Atharva Wagh
