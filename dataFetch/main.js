const container = document.querySelector(".container");

function displayData(data) {
  container.innerHTML = data
    .map((item, id) => {
      return `<div>
        <h2>${item.title}</h2>
        <p>${item.body}</p>       
        </div>`;
    })
    .join("");
}

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        return resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });

  return promise;
}

async function fetchUsingXHRAndAsyncAwait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  displayData(response);
}

fetchUsingXHRAndAsyncAwait();
