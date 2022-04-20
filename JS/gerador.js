//Gerador de Cores Randomicas
function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
      
    return color; 
  }

//Gerar HTMl + Variveis
function GeneratorHtml(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        body{
            background-color: ${generateColor()} ;
        }
    </style>
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`
}
console.log((GeneratorHtml()));

exports.GeneratorHtml = GeneratorHtml;