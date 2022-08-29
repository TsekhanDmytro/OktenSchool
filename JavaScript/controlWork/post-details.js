let postDiv = document.getElementsByClassName('post-div')[0];
let comentsDiv = document.getElementsByClassName('coments-div')[0];
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('id'));

postDiv.innerHTML = `
<p>UserID: ${post.userId}</p>
<p>ID: ${post.id}</p>
<p>Title: ${post.title}</p>
<p>Body: ${post.body}</p>`


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let comentContauner = document.createElement('div');
            comentContauner.classList = 'comentContauner';
            comentsDiv.append(comentContauner);
            comentContauner.innerHTML = `
            <p>Post ID: ${valueElement.postId}</p>
            <p>ID: ${valueElement.id}</p>
            <p>Name: ${valueElement.name}</p>
            <p>Email: ${valueElement.email}</p>
            <p>Body: ${valueElement.body}</p>`
        }
    });