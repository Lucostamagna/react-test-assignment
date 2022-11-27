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
export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        reject({ error: "Incorrect email or password" });
      }
    }, 1000);
  })
}

