
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
            postContainer.innerHTML = `<h3>Post ${post.id}</h3>
                                       <h4>Title: ${post.title}</h4>
                                       <p><b>Body</b>: ${post.body}</p>`;

            const commentsBox = document.createElement('div');
            const showComments = document.createElement('button');
            showComments.innerText = 'Show Comments';
            postContainer.append(showComments);
            commentsBox.classList.add('commentsBox');

            showComments.onclick = () => {
                if (showComments.innerText === 'Show Comments') {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                .then(response => response.json())
                .then(comments => {
                    comments.forEach(comment => {
                            const commentBox = document.createElement('div');
                            commentBox.classList.add('commentBox');
                            commentBox.innerHTML = `<h3>Comment ${comment.id}</h3>
                                                    <h4>email: ${comment.email}</h4>
                                                    <h4>Name: ${comment.name}</h4>
                                                    <p><b>Body:</b> ${comment.body}</p>`;
                            commentsBox.append(commentBox);
                        }
                    );
                })
                    postContainer.append(commentsBox);
                    showComments.innerText = 'Hide Comments';

                } else {
                    commentsBox.innerHTML = '';
                    commentsBox.remove();
                    showComments.innerText = 'Show Comments';
            }};
            document.body.append(postContainer);
        })
    });