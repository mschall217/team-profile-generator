const generateHTML = () => {
    const html = `<!DOCTYPE html>
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
        <div class="card-container">
    
        </div>
    </body>
    </html>`
    return html;
}

module.exports = generateHTML;