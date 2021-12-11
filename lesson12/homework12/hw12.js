
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const wrapPosts = document.createElement('div');
        wrapPosts.classList.add('wrapPosts');
        posts.forEach(post => {
            const divPost = document.createElement('div');
            divPost.classList.add('post');
            for (const postKey in post) {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${postKey}</strong>: ${post[postKey]}`;
                divPost.append(p);
            }
            wrapPosts.append(divPost);
        })
        document.body.append(wrapPosts);
    });




// 2. ------------------------------------------------------------------------------------------------------------------------------------------------
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        const wrapComments = document.createElement('div');
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.classList.add('comment');
            for (const commentKey in comment) {
                const p = document.createElement('p');
                p.innerHTML = `<span>${commentKey}</span>: ${comment[commentKey]}`;
                div.append(p);
            }
            wrapComments.append(div);
        })
        document.body.append(wrapComments);
    });