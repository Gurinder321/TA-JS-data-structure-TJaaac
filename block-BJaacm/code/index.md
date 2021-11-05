```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<img scr="hello.png" />

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true. They point to the same reference
- `user === newUser;` // true. They point to the same reference
- `user.name === newUser.name;` // true. pointing to the same reference number
- `user.name == newUser.name;` // true. pointing to the same reference number
- `user.sibling == newUser.sibling;` // true. pointing to the same reference number
- `user.sibling === newUser.sibling;` // true. pointing to the same reference number
- `user.sibling == allBrothers;` // false. Even though the sames are the same, they are pointing to different reference numbers
- `user.sibling === allBrothers;` // false. Even though the sames are the same, they are pointing to different reference numbers
- `brothersCopy === allBrothers;` // false. Even though the sames are the same, they are pointing to different reference numbers
- `brothersCopy == allBrothers;` // false. Even though the sames are the same, they are pointing to different reference numbers
- `brothersCopy == user.sibling;` // true. pointing to the same reference number true. pointing to the same reference number
- `brothersCopy === user.sibling;` // true. pointing to the same reference number
- `brothersCopy[0] === user.sibling[0];` // true. pointing to the same reference number
- `brothersCopy[1] === user.sibling[1];` // true. pointing to the same reference number
- `user.sibling[1] === newUser.sibling[1];` // true. pointing to the same reference number
