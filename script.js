const url = 'https://api.github.com/users/'

let userTyped = document.querySelector(".enter");
let searchBtn = document.querySelector(".btn");
let finalResult = document.querySelector(".finalOutputBox");
let mainBox = document.querySelector(".mainBox");



  searchBtn.addEventListener('click', ()=>{
    ans();
  });


  let ans = async()=>{
    let username = userTyped.value;
        if(username === ""){
            alert("Enter Valid Username");
            return;
        }
        else{
            const response = await fetch(`${url}${username}`);
            const data = await response.json();
            console.log(data);
            showResult(data);
        }
  }

function showResult(data){

    finalResult.innerHTML = "";

    let userProfile = document.createElement("div");

    userProfile = `<div class= "allPart">
    
                <div class = "upbox">
                    <img src= "${data.avatar_url}" alt= "${data.name}" class= "photo">
                    <a href="${data.html_url}">@${data.login}</a>
                    <p class="joined">Joined ${new Date(data.created_at).toLocaleDateString('en-US')}</p>
                </div>
    

                <div class= "mbox">

                    <div><h6>Repos</h6>
                    <p>${data.public_repos}</p>
                    </div>

                    <div><h6 class="mb-5">Followers</h6>
                    <p>${data.followers}</p>
                    </div>

                    <div> <h6 class="mb-5">Following</h6>
                    <p>${data.following}</p>
                    </div>

                </div>


                <div class="lbox">

                    <div><p>${(data.location) ? data.location : '-'}</p>
                    <p>${(data.blog) ? data.blog : '-'}</p>
                    </div>
                     
                    <div><p>${(data.twitter_username) ? data.twitter_username : '-'}</p>
                    <p>${(data.company) ? data.company : '-'}</p>
                    </div>

                </div>

    </div>` ;


    finalResult.innerHTML = userProfile;
}