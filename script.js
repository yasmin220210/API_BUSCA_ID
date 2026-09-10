let banco = [
    {
        "name": "Sabrina",
        "sobrenome": "Carpenter",
        "pais": "Estados Unidos",
        "idade": "27 anos",
        "estilo musical": "Pop, dance-pop e electropop",
        "albuns Musicas": "Short n Sweet / Mans Best Friend",
        "image": "<img src='img/Sabrina_Carpenter.jpg'>"
    }
];

function busca() {

    let pessoa = banco[0];

    document.getElementById('imagem').innerHTML = pessoa.image;
    document.getElementById('nome').innerHTML = "Nome: " + pessoa.name;
    document.getElementById('sobrenome').innerHTML = "Sobrenome: " + pessoa.sobrenome;
    document.getElementById('idade').innerHTML = "Idade: " + pessoa.idade;
    document.getElementById('pais').innerHTML = "País: " + pessoa.pais;
    document.getElementById('albuns musicais').innerHTML = "Álbuns: " + pessoa["albuns Musicas"];
    document.getElementById('estilo musical').innerHTML = "Estilo musical: " + pessoa["estilo musical"];
}

   

