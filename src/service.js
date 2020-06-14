import config from "./Rest";

export function callDotNetEndpoint(stateInput) {
  // Call endpoint using config

  // return config.dotnetEndpoint(stateInput)
  // .then(res => {
  //   if (res.data) {
  //     return Promise.resolve(res.data);
  //   }
  // })
  // .catch(error => {
  //   return Promise.reject(error);
  // })
  return new Promise(function (resolve, reject) {
    // Setting 2000 ms time
    setTimeout(resolve, 2000);
  }).then(function () {
    return "success";
  });
}

export function callJavaEndpoint(stateInput) {
  // Call endpoint using config

  // return config.javaEndpoint(stateInput)
  // .then(res => {
  //   if (res.data) {
  //     return Promise.resolve(res.data);
  //   }
  // })
  // .catch(error => {
  //   return Promise.reject(error);
  // })

  return new Promise(function (resolve, reject) {
    // Setting 2000 ms time
    setTimeout(resolve, 1000);
  }).then(function () {
    return "success";
  });
}
