/**
 * @param {Object|string} items What you want to send to the server.
 * @param {string} route The route to the server (URL)
 * @param {string} callback The HTTP response from the server,
 * @description Function to handle POST requests
 */
function xhr (items, route, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', route);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(items));

  if (xhr.readyState === 1) {
    document.body.style.pointerEvents = 'none';
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.responseText) {
        callback(xhr.responseText);
        document.body.style.pointerEvents = '';
        /* To add a loading gif uncomment the following, add a div that has a gif and obscures the screen */
        // document.querySelector('.loadingGif').style.display = 'none';
      }
    }
  };
}

/**
 * @param {Object|string} items What you want to send to the server.
 * @param {string} route The route to the server (URL)
 * @param {string} callback The HTTP response from the server,
 * @description Function to handle GET requests.
 */
function xhrget (items, route, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', route);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.timeout = 1000;
  xhr.send(encodeURI(items));
  xhr.ontimeout = (e) => {
    callback('404');
  };
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
    if (xhr.status >= 500 && xhr.status < 600) {
      callback('An error occurred, please wait a bit and try again.');
    }
    if (xhr.status === 404) {
      callback('404');
    }
  };
}

/**
 * @param {Object|string} items What you want to send to the server.
 * @param {string} route The route to the server (URL)
 * @param {string} callback The HTTP response from the server,
 * @description Function to handle GET requests returning the result in a promise
 * @returns A promise with the response to the request or an error.
 */
function xhrGetInPromise (items, route) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', route);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.timeout = 5000;
    xhr.send(encodeURI(items));
    xhr.ontimeout = (e) => {
      const err = new Error('The request timed out, either the server is down, or there is an issue with the connection.');
      reject(err);
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      }
      if (xhr.status >= 500 && xhr.status < 600) {
        const err = new Error('The server returned an error, please wait a bit and try again.');
        reject(err);
      }
      if (xhr.status === 404) {
        const err = new Error(`No resource at this end point: ${route}`);
        reject(err);
      }
    };
  });
  return promise;
}

/**
 * @param {Object|string} items What you want to send to the server.
 * @param {string} route The route to the server (URL)
 * @param {string} callback The HTTP response from the server,
 * @description Function to handle POST requests
 */
function xhrPostInPromise (items, route) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', route);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(items));
    xhr.ontimeout = (e) => {
      const err = new Error('The request timed out, either the server is down, or there is an issue with the connection.');
      reject(err);
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 1) {
        document.body.style.pointerEvents = 'none';
      }
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.body.style.pointerEvents = '';
        resolve(xhr.responseText);
      }
      if (xhr.status >= 500 && xhr.status < 600) {
        const err = new Error('The server returned an error, please wait a bit and try again.');
        reject(err);
      }
      if (xhr.status === 404) {
        const err = new Error('The server reports 404: No resource at this end point.');
        reject(err);
      }
    };
  });
  return promise;
}
