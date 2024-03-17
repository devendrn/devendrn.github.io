function includeNewbVariants() {
  const url = 'https://api.npoint.io/dc5c09e24b8f4db55708/variants';
  const variantList = document.getElementById('variants-list');
  const spinner = document.getElementById('spinner');

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((variant) => {

        let links = ""
        variant.downloads.forEach((item) => {
          links = links + `
            <a class="btn btn-wide" href="${item.url}">
              <i class="fa-solid fa-download"></i>${item.name}
            </a><br>
          `;
        });

        let screenshots = ""
        variant.screenshots.forEach((item) => {
          screenshots = screenshots + `
            <img src="${item}" loading="lazy">
          `
        });

        let div = document.createElement('div');
        div.className = "shadercard";
        div.innerHTML = `
          <img src="${variant.screenshots[0]}" loading="lazy">
          <div class="shadercard-gallery">
            ${screenshots}
          </div>
          <div class="shadercard-content">
            <h2>${variant.name}</h2>
            <p>Made by <b><a href="${variant.author.url}">${variant.author.name}</a></b></p>
          </div>
          <div class="shadercard-items">
            ${links}
            <p>${variant.version}</p>
          </div>
        `;
        variantList.append(div);
      });
      spinner.remove();
    })
    .catch(function(error) {
      console.log(error);
    });
}

function includeDevelopmentRelease() {
  const devRelease = document.getElementById('development-release');
  const url = 'https://api.npoint.io/dc5c09e24b8f4db55708/main';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((release) => {
      let links = "";
      release.downloads.forEach((item) => {
        links = links + `
          <a class="btn btn-wide" href="${item.url}">
            <i class="fa-solid fa-download"></i>${item.name}
          </a><br>
        `;
      });
      let changelog = "";
      release.changelog.forEach((item) => {
        changelog = changelog + `- ${item}<br>`
      });

      let shaderDiv = document.createElement('div');
      shaderDiv.className = "shadercard";
      shaderDiv.style = "flex: 3;";
      shaderDiv.innerHTML = `
        <img src="${release.screenshot1}">
        <div class="shadercard-content">
          <h2>${release.name}</h2>
          <p>${release.description}<p>
          <p><b>
            <a href='https://ko-fi.com/U7U1R8GP9' target='_blank'>♥ Support creator on Ko-fi</a>
          </b></p>
        </div>
        <div class="shadercard-items">
          ${links}
          <p>${release.version}</p>
        </div>
      `;
      let changelogDiv = document.createElement('div');
      changelogDiv.className = "shadercard";
      changelogDiv.style = "flex: 1;";
      changelogDiv.innerHTML = `
        <img src="${release.screenshot2}">
        <div class="shadercard-items" style="width: 100%;">
          <h4>Changelog:</h4>
          <p class="code-block" style="overscroll-y: scroll; margin: 0; padding: 10px; height: 100%; text-align: left; max-height: 200px; background-color: #00000080; color: #fefefe">
            ${changelog}
          </p>
        </div>
      `;
      devRelease.append(shaderDiv);
      devRelease.append(changelogDiv);
    })
    .catch(function(error) {
      console.log(error);
    }
  );
}
