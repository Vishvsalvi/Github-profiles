let search_btn = document.getElementById("searchBtn");
search_btn.addEventListener("click", getData);


function getData(e){
    e.preventDefault()
    let user_input = document.getElementById("input");
    let profile_card = document.querySelector(".profile-card");
    let api = `https://api.github.com/users/${user_input.value}`;
    fetch(api).then((f_data)=>{
        return f_data.json();
    }).then((data)=>{
        console.log(data);
        if (data.message) {
            profile_card.innerHTML = 
            ` 
            <div class="info">
            
            <p>User doesn't exists</p>
            
            </div>`
        }else{
            user_input.value = " "
            profile_card.innerHTML = 
            ` <div class="avatar">
            <img src=${data.avatar_url} alt="">
        </div>
        <div class="info">
            <h3>${data.name}</h3>
            <h5>${data.login}</h5>
            <p>${data.bio}</p>
            <ul>
                <li>Followers: ${data.followers}</li>
                <li>Followings: ${data.following}</li>
                <li>Github_Repos: ${data.public_repos}</li>
            </ul>
        </div>`
            
        }
    })
}
