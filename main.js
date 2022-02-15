const linksSocialMedia = {
    github: "Ayrton-Rodrigues",
    youtube: "cursoemvideo",
    facebook: "jessica amaral",
    instagram: "Ayrtonrodri",
    twitter: "ayrtonnot"
        }
    
    function changeSocialMediaLinks(){
        for(let li of socialLinks.children)
    {
        const social = li.getAttribute('class')
    
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
       

    } 
}
    changeSocialMediaLinks()



    
    function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url)
        .then(Response => Response.json())
        .then(data => 
            {                       
            userName.textContent = data.name           
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        }) 


    }
    getGitHubProfileInfos()