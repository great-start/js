
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
            posts.forEach(post => {
                const postContainer = document.createElement('div');
                postContainer.classList.add('post');
                for (const postKey in post) {
                    const p = document.createElement('p');
                    if (postKey === 'userId' || postKey === 'id' || postKey === 'title') {
                        p.innerHTML = `<strong>${postKey}</strong>: ${post[postKey]}`;
                        postContainer.append(p);
                    } else {
                        const wrapComment = document.createElement('div');
                        wrapComment.classList.add('comment');
                        const butShowComment = document.createElement('button');
                        butShowComment.innerText = 'Show comments';
                        butShowComment.setAttribute('id', 'comment');
                        p.innerText = `${post[postKey]}`;
                        p.classList.add('hidden');

                        butShowComment.onclick = () => {
                            if (p.style.visibility === 'visible') {
                                p.style.visibility = 'hidden';
                                butShowComment.innerText = 'Show comments';
                            } else {
                                p.style.visibility = 'visible';
                                butShowComment.innerText = 'Hide comments';
                            }
                        }

                        wrapComment.append(butShowComment, p);
                        postContainer.append(wrapComment);
                    }
                }
                document.body.append(postContainer);
            });
        });