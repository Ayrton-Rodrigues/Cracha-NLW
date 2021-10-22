       // function showmesomething() {
         //   alert(links.instagram)
       // }
// objeto \/
const linksSocialMedia = {
    github: "Ayrtonrodri",
    youtube: "cursoemvideo",
    facebook: "jessica amaral",
    instagram: "Ayrtonrodri",
    twitter: "ayrtonnot"
        }
    
    function changeSocialMediaLinks(){
        for(let li of socialLinks.children)
    {const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    
    }
    
    
    //ser humano conta a partir do 1 e o pc a partir de 0.
    
    //for(let i = 0; i <= 10; i++)
       
    } 
    
    changeSocialMediaLinks()
     //const github = "Ayrtonrodri"
    //const youtube = "cursoemvideo"
    //const facebook = "Jessica amaral"
    //const instagram = "Ayrtonrodri"
    //const twitter = "Ayrtonnot"
    
    //showmesomething()
    
    function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url)
        .then(Response => Response.json())
        .then(data => { userBio.textContent = data.bio 
            userName.textContent = data.name
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        }) 


    }
    getGitHubProfileInfos()