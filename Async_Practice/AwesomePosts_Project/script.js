//making sure the API is Loaded

document.addEventListener("DOMContentLoaded",()=>{
    const postContainer=document.querySelector(".posts-container");
    const APIUrl="https://jsonplaceholder.typicode.com/posts";
    async function fetchPosts() {
        try {
            const response= await fetch(APIUrl);
            const posts=await response.json();          
            postContainer.innerHTML="";
            posts.forEach((post)=>{
                const postEle=createPostElements(post);
                postContainer.appendChild(postEle);                
            });
        } catch (error) {
            postContainer.innerHTML='<p style="color:red;text-align:center">Error loading posts. Please try again later</p>';
        }
    }

    //creating html elements

    function createPostElements(post){
        const article=document.createElement("article");
        article.className="post-card";

        const title=document.createElement("h2");
        title.className="post-title";
        title.textContent=post.title;

        const body=document.createElement("p");
        body.className="post-body";
        body.textContent=post.body;

        article.appendChild(title);
        article.appendChild(body);

        return article;

    }




    fetchPosts();
});