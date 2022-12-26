// export function login({ email, password }) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (email === "elon@mercdev.com" && password === "twitter") {
//         resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
//       } else {
//         resolve({ error: "Incorrect email or password" });
//       }
//     }, 1000);
//   });
// }

interface User{
  email:string; 
  password:string;
}
export function login({ email, password }:User) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        reject({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}

//I made a promise that can be resolved or reject
//if it is solved it shows me the corresponding data
//or show incorrect mail or password