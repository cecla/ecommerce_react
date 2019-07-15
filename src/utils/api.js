/*
  Mocking api call for some data to be displayed in the application
*/

import mockdata from "../mockdata";

const handleErrors = response => {
  if (!response.ok) {
    throw response;
  }
  return response;
};

const apiCall = request =>
  new Promise((resolve, reject) =>
    resolve({ ok: true, json: () => mockdata[request] })
  );

const getProducts = _ =>
  apiCall("products")
    .then(response => handleErrors(response))
    .then(response => response.json())
    .catch(error => console.log("error", error));

const getImageTexts = _ =>
  apiCall("imageText")
    .then(response => handleErrors(response))
    .then(response => response.json())
    .catch(error => console.log("error", error));

const getImageTextLinks = _ =>
  apiCall("imageTextLinks")
    .then(response => handleErrors(response))
    .then(response => response.json())
    .catch(error => console.log("error", error));

const getLinks = _ =>
  apiCall("links")
    .then(response => handleErrors(response))
    .then(response => response.json())
    .catch(error => console.log("error", error));

export default {
  getProducts,
  getImageTexts,
  getImageTextLinks,
  getLinks
};
