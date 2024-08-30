function addPost() {
    var postTitle = document.getElementById("post-title")
    var postDescription = document.getElementById("post-description")

    var posts = document.getElementById("posts")
    if (postTitle.value.trim() && postDescription.value.trim()) {
        posts.innerHTML += `
        <div class="card mb-3">
    <div class="card-header fontStyle">
        @Posts
    </div>
    <div class="card-body">
        <h5 class="card-title fontStyle">${postTitle.value}</h5>
        <p class="card-text fontStyle">${postDescription.value}</p> 
    </div>
    <div class="button p-4"> 
    <button type="button" class="btn btn-primary" onclick="edit(event)" >Edit</button>
    <button type="button" class="btn btn-danger" onclick="remove(event)" >Delete</button>
</div>
    </div>`
        post.className += '.border-green1';
        postTitle.value = "";
        postDescription.value = "";
    }
    else {
        Swal.fire({
            title: "No input",
            text: "insert Something",
            icon: "question"
        });
    }
}

function remove(event){
    event.target.parentNode.parentNode.remove()
    post.className += '.border-green1';

}



async function edit(event){

var postCard = event.target.parentNode.parentNode;

var currentTitle = postCard.children[1].children[0].innerText;
var currentDescription = postCard.children[1].children[1].innerText;

const { value: formValues } = await Swal.fire({
    title: "Update inputs",
    html: `
      <div>
     <label> Updata Title
          <input id="swal-input1" class="swal2-input" value="${currentTitle}">
        </label>
        <label> Updata Description
          <input id="swal-input2" class="swal2-input" value="${currentDescription}">
          </label>
             </div>`,

    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });

  if (formValues) {
    postCard.children[1].children[0].innerText = formValues[0];
    postCard.children[1].children[1].innerText = formValues[1];
}
}

