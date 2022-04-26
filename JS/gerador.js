//Gerador de Cores Randomicas
function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    return color; 
  }
  
//Gerar HTMl + Variveis
function generatorHtml(){
    return `<!DOCTYPE html>
    <html lang-en>
    
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css" />
        <style>
            html,
            body {
                font-family: 'Ubuntu', sans-serif;
                background-color: #ccccff;
                max-width: 100%;
                height: auto;
                margin: 0;
            }
    
            header {
                background-color: #0000cc;
                color: #ffffff;
                text-align: center;
                padding: 0.1em;
            }
    
            b {
                font-size: 18px;
            }
    
            * {
                box-sizing: border-box;
            }
    
            .row {
                display: flex;
                flex-wrap: wrap;
            }
    
            .left-column {
                flex: 33%;
                background-color: #fff5ef;
                padding: 20px;
            }
    
            .right-column {
                flex: 66%;
                background-color: #fff5ef;
                padding: 20px;
            }
    
            @media screen and (max-width: 700px) {
                .row {
                    flex-direction: column;
                }
            }
            .profile-all{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
    
            .profile-image {
                background-color: aqua;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25%;
                background-image: url("male-467711_640.jpg");
                height: 250px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                padding-top: 0.5em;
                border-radius: 25px;
            }
    
            .profile-text {
                text-align: left;
                margin-left: 0.3em;
                margin-top: -0.4em;
                color:#0000cc;
                padding-top: 3%;
                font-size: 35px;
            }
    
            .card {
                background-color: #ffffff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
                padding-bottom: 2em;
            }
    
            .info-panel,
            .exper-panel,
            .edu-panel {
                font-size: 16px;
                color: #666666;
                padding: 0.5em 1.5em;
                padding-left: 5%;
            }
    
            .skills-bar,
            .language-bar {
                width: 100%;
                background-color: #e6e6ff;
                border-radius: 1em;
            }
    
            .skills,
            .language {
                font-size: 12px;
                text-align: center;
                color: white;
            }
    
            .html {
                width: 90%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .css {
                width: 80%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .js {
                width: 65%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .php {
                width: 60%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .english {
                width: 100%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .spanish {
                width: 75%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .french {
                width: 60%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            .german {
                width: 40%;
                background-color: #0000cc;
                border-radius: 1em;
            }
    
            mark {
                padding: 5px;
                background-color: #0000cc;
                color: white;
                border-radius: 0.2em;
            }
    
            footer {
                text-align: center;
                text-decoration: none;
                background-color: #0000cc;
                color: #33ffff;
                padding: 1em;
            }
    
            .social-links {
                color: #ffffff;
            }
    
            .social-links :hover {
                color: #33ffff;
            }
    
            a {
                color: #33ffff;
                text-decoration: none;
            }
        </style>
    </head>
    
    <body>
        <!-- Title Across the Top -->
        <header>
            <br>
            <br>
        </header>
        <!-- Left Column Info -->
        <div class="row">
            <div class="left-column">
                <div class="card">
                    <!-- Enter Your Name -->
                    <div class="profile-all">
                        <h2 class="profile-text">John Doe</h2>
                        <div class="profile-image">
                    </div>
                    </div>
                    <div class="info-panel" style="font-size: 16px;">
                        <!-- Enter Your Basic Info -->
                        <p><i class="fa fa-briefcase fa-lg" style="color:#0000cc"></i> &nbsp; Web Designer</p>
                        <p><i class="fa fa-home fa-lg" style="color:#0000cc"></i> &nbsp; London, UK</p>
                        <p><i class="fa fa-envelope fa-lg" style="color:#0000cc"></i> &nbsp; youremail@mail.com</p>
                        <p><i class="fa fa-phone fa-lg" style="color:#0000cc"></i> &nbsp; 0123456789</p>
                        <hr>
                        <!-- Enter Your Skills Here-->
                        <p><b><i class="fa fa-asterisk fa-lg" style="color:#0000cc"></i>
                                &nbsp; Skills</b></p>
                        <p>HTML</p>
                        <div class="skills-bar">
                            <div class="skills html">90%</div>
                        </div>
                        <p>CSS</p>
                        <div class="skills-bar">
                            <div class="skills css">80%</div>
                        </div>
                        <p>JavaScript</p>
                        <div class="skills-bar">
                            <div class="skills js">65%</div>
                        </div>
                        <p>PHP</p>
                        <div class="skills-bar">
                            <div class="skills php">60%</div>
                        </div>
                        <br>
                        <hr>
                    </div>
                </div>
            </div>
    
    
        </div>
        <!-- Footer Across the Bottom -->
        <footer>
            <p>Find me on social media.</p>
            <!-- Replace The # With Your Social Links Here -->
            <div class="social-links">
                <i class="fab fa-linkedin fa-3x" href="#"></i>
                <i class="fab fa-github fa-3x" href="#"></i>
                <i class="fab fa-codepen fa-3x" href="#"></i>
                <i class="fab fa-twitter fa-3x" href="#"></i>
                <i class="fab fa-pinterest fa-3x" href="#"></i>
                <i class="fab fa-facebook fa-3x" href="#"></i>
                <i class="fab fa-instagram fa-3x" href="#"></i>
                <i class="fab fa-snapchat fa-3x" href="#"></i>
            </div>
            <p>Copyright &copy &#8226; 2022
        </footer>
    </body>
    
    </html>`
}
console.log((GeneratorHtml()));

exports.GeneratorHtml = GeneratorHtml;