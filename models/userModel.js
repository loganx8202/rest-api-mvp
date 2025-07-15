let users = [
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  },
  {
    "id": "2",
    "firstName": "Rohan",
    "lastName": "Mehra",
    "hobby": "Football"
  },
  {
    "id": "3",
    "firstName": "Neha",
    "lastName": "Singh",
    "hobby": "Reading"
  },
  {
    "id": "4",
    "firstName": "Aman",
    "lastName": "Verma",
    "hobby": "Cycling"
  },
  {
    "id": "5",
    "firstName": "Priya",
    "lastName": "Sharma",
    "hobby": "Drawing"
  },
  {
    "id": "6",
    "firstName": "Kabir",
    "lastName": "Khan",
    "hobby": "Swimming"
  },
  {
    "id": "7",
    "firstName": "Tanya",
    "lastName": "Das",
    "hobby": "Singing"
  },
  {
    "id": "8",
    "firstName": "Rahul",
    "lastName": "Roy",
    "hobby": "Gaming"
  },
  {
    "id": "9",
    "firstName": "Meena",
    "lastName": "Nair",
    "hobby": "Cooking"
  },
  {
    "id": "10",
    "firstName": "Arjun",
    "lastName": "Joshi",
    "hobby": "Photography"
  },
  {
    "id": "11",
    "firstName": "Sneha",
    "lastName": "Iyer",
    "hobby": "Yoga"
  },
  {
    "id": "12",
    "firstName": "Vikram",
    "lastName": "Patel",
    "hobby": "Blogging"
  }
];

export const getAll = () => users;

export const getById = (id) => users.find((u) => u.id === id);

export const add = (user) => {
  users.push(user);
  return user;
};

export const update = (id, newUser) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { id, ...newUser };
    return users[index];
  }
  return null;
};

export const remove = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) return users.splice(index, 1);
  return null;
};
