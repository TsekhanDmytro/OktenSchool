let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('id'));
let userDetails = document.getElementsByClassName('user-details')[0];

let info = document.createElement('div');

info.innerHTML = `<h3>Information about users ID - ${user.id}</h3>
<p>Nane:${user.name}. Username: ${user.username}. Emai:${user.email}</p>
<p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
<p>Geolocation lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</p>
<p>Phone: ${user.phone}</p>
<p>Website: ${user.website}</p>
<h3>About company:  </h3>
<p>Name '${user.company.name}'</p>
<p>CatchPhrase: ${user.company.catchPhrase}</p>
<p>BS: ${user.company.catchPhrase}</p>`

userDetails.append(info);

let button = document.getElementsByClassName('post-of-current-user')[0];
let userPosts = document.getElementsByClassName('user-posts')[0];
button.onclick = function (e) {
    e.preventDefault();
    button.href =
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`, {})
            .then(response => response.json())
            .then(posts => {

                for (const post of posts) {
                    let divPost = document.createElement('div');
                    userPosts.append(divPost);
                    divPost.classList = 'div-post';
                    divPost.innerHTML = `<p>Post Title: ${post.title}</p>`;
                    let button = document.createElement('button');
                    button.innerText='detals';
                    divPost.append(button);
                    button.onclick =function () {
                        location.href=`./post-details.html?id=${JSON.stringify(post)}`;

                    }

                }
            })
}
