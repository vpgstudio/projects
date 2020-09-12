import React from "react";

export const ProjectsMainApp = () => {
  function requestUserRepos() {
    const xhr = new XMLHttpRequest();
    const url = "http://pyapivpgstudio.herokuapp.com/pr/all";
    xhr.open("GET", url, true);
    xhr.onload = function () {
      const data = JSON.parse(this.response);
      console.log(data);
      for (var i in data) {
        let ul = document.getElementById("userRepos");
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
              <p><strong>Name:</strong> ${data[i].Name}</p>
              <p><strong>Description:</strong> ${data[i].QuicDesc}</p>
          `;
        ul.appendChild(li);
      }
    };
    xhr.send();
  }

  return (
    <>
      <title>Projects</title>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          height: "100%",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      <ul id="userRepos"></ul>

      {requestUserRepos()}
    </>
  );
};

export default ProjectsMainApp;
