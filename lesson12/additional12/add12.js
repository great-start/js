
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersWrapBox = document.createElement('div');
        usersWrapBox.classList.add('usersWrapBox');
        users.forEach(user => {
            const userBox = document.createElement('div');
            userBox.classList.add('userBox');
            const userDescribeBox = document.createElement('div');
            userDescribeBox.classList.add('userDescribeBox');

            function describeUser(user) {
                let point, divAdditionInfo;

                function generateUser(user) {
                    for (const userKey in user) {
                        if (typeof user[userKey] === 'object') {
                            point = true;
                            divAdditionInfo = document.createElement('div');
                            divAdditionInfo.classList.add('divAdditionInfo');
                            divAdditionInfo.innerHTML = `<span>${userKey}</span>`;
                            userDescribeBox.append(divAdditionInfo);
                            generateUser(user[userKey]);
                            point = false;
                        } else {
                            if (point === true) {
                                const p = document.createElement('p');
                                p.classList.add('info');
                                p.innerHTML = `<span>${userKey}:</span> ${user[userKey]}`;
                                divAdditionInfo.append(p);
                            } else {
                                const p = document.createElement('p');
                                p.innerHTML = `<span>${userKey}:</span> ${user[userKey]}`;
                                userDescribeBox.append(p);
                            }
                        }
                    }
                }

                generateUser(user);

                const showUserPosts = document.createElement('button');
                showUserPosts.classList.add('showPosts');
                showUserPosts.innerText = 'Show User Posts';
                let postsWrapBox = document.createElement('div');

                showUserPosts.onclick = () => {
                    if (showUserPosts.innerText === 'Show User Posts') {
                            postsWrapBox.classList.add('postsWrapBox');
                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                            .then(response => response.json())
                            .then(posts => {
                                posts.forEach(post => {
                                    const divPost = document.createElement('div');
                                    divPost.classList.add('post');
                                    for (const postKey in post) {
                                        if (postKey === 'title' || postKey === 'body') {
                                            const p = document.createElement('p');
                                            p.innerHTML = `${postKey} - ${post[postKey]}`;
                                            divPost.append(p);
                                        }
                                    }
                                    postsWrapBox.append(divPost);
                                    userBox.append(postsWrapBox);
                                })
                            });
                        showUserPosts.innerText = 'Hide User Posts';
                    } else {
                        postsWrapBox.remove();
                        showUserPosts.innerText = 'Show User Posts';
                    }
                };
                userDescribeBox.append(showUserPosts);
                userBox.append(userDescribeBox);
            }

            describeUser(user);
            usersWrapBox.append(userBox);
        });
        document.body.append(usersWrapBox);
    });


