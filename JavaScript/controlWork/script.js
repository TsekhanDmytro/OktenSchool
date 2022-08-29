let usersBox = document.getElementsByClassName('usersBox')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div');
            let button = document.createElement('button');


            usersBox.append(userDiv);
            userDiv.classList.add('userBox');
            userDiv.innerHTML = `<p>User ID- ${user.id}</p> <p>User name: ${user.name}</p>`;
            userDiv.append(button);
            button.innerText='asdas';
            button.onclick= function () {
                location.href = `./user-details.html?id=${JSON.stringify(user) }`;
            }

        }
    })