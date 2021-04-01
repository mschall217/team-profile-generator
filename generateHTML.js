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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <style>
    .jumbotron{text-align: center; background-color: black; color: white; padding: 40px; background-image: linear-gradient(black, white); font-family: 'Orbitron', sans-serif;}
    .card-container{ margin: 5px; text-align: center;}
    .card{margin: 5px; background-color: lightgrey; padding-bottom: 5px;}
    .card-header{font-weight: bold; font-size: 25px}
    </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid col-12">
            <div class="container">
            <h1 class="display-4">Meet Your Team</h1>
            </div>
          </div>
        <div class="card-container row justify-content-center">`
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
            card += `  <li class="list-group-item">Phone Number: ${team[i].officeNum}</li></ul><i class="fa fa-coffee "></i></div>`
        }
        if(team[i].github){
            card += `<li class="list-group-item">GitHub: <a href="www.github.com/${team[i].github}" class="card-link">${team[i].github}</a></li></ul><i class="fa fa-laptop"></i></div>`
        }
        if(team[i].school){
            card += `  <li class="list-group-item">School: ${team[i].school}</li></ul><i class="fa fa-graduation-cap"></i></div>`
        }
    htmlpage.push(card);
    }
    
    htmlEnd = `</div></body></html>`
    htmlpage.push(htmlEnd);
    return htmlpage;
}

module.exports = generateHTML;
