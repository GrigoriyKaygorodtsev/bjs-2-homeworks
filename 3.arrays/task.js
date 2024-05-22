function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((value, index) => {
        console.log(value, arr2[index]);
        return value === arr2[index]
    });
}

console.log(compareArrays([8, 9], [6, 7]))
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
console.log(compareArrays([1, 2, 3], [2, 3, 1]))
console.log(compareArrays([8, 1, 2], [8, 1, 2]))


function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    if (filteredUsers.length === 0) {
        return 0;
    }
    const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
    const averageAge = totalAge / filteredUsers.length;
    return averageAge;
}

const people = [
    { firstname: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
    { firstname: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
    { firstname: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
    { firstname: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
    { firstname: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
    { firstname: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
    { firstname: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
    { firstname: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
    { firstname: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
    { firstname: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
    { firstname: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
    { firstname: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
    { firstname: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
    { firstname: "Евгкний", secondName: "Кузьмин", age: 19, gender: "мужской" },
]
console.log(getUsersNamesInAgeRange(people, "мужской")); //32
console.log(getUsersNamesInAgeRange(people, "женский")); //27.4
console.log(getUsersNamesInAgeRange([], "женский")); //0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); //0