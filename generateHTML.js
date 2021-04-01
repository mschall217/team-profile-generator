const generateHTML = (team) => {
    htmlpage = []
    const htmlStart = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyTeamProfile</title>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <style>
    .jumbotron{text-align: center; background-color: black; color: white; padding: 10px;}
    </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid col-12">
            <div class="container">
              <h1 class="display-4">My Team</h1>
              <p class="lead">Lets Meet the Team!</p>
            </div>
          </div>
        <div class="card-container">`
    htmlpage.push(htmlStart);
    for(i=0; i<team.length; i++){
        let card = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${team[i].name} - ${team[i].role}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${team[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${team[i].email}" class="card-link">${team[i].email}</a></li>`
        if(team[i].officeNum){
            card += `  <li class="list-group-item">Phone Number: ${team[i].officeNum}</li></ul></div>`
        }
        if(team[i].github){
            card += `<li class="list-group-item">GitHub: <a href="www.github.com/${team[i].github}" class="card-link">${team[i].github}</a></li></ul></div>`
        }
        if(team[i].school){
            card += `  <li class="list-group-item">School: ${team[i].school}</li></ul></div>`
        }
    htmlpage.push(card);
    }
    
    htmlEnd = `</div></body></html>`
    htmlpage.push(htmlEnd);
    return htmlpage;
}

module.exports = generateHTML;

