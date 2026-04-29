const nameHeader = document.getElementById("username");
const messageP = document.getElementById("message");

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const username = urlParams.get("name") || 'Your name here, use the "name" param';
const message = urlParams.get("message") || 'Your message here, user the "message" param';