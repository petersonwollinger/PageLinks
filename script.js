function toggleMode() {
  const html = document.documentElement;

  // aqui  usa-se uma funcionalidade própria do javascript 'toggle' que ja faz a mesma coisa do if e else automáticamente
  html.classList.toggle("light");

  // ** se houver uma classe 'light' dentro do <html/> ele vai remover senão ele vai adicionar **

  // if(html.classList.contains('light')){
  //     html.classList.remove('light')
  // } else {
  //     html.classList.add('light')
  // }


  // pegar a tag image
const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se estiver no light mode, adicionar a imagem light(invertidakk)
    img.setAttribute('src', './assets/ratava.png')
    img.setAttribute('alt', 'foto de peterson de cabeça para baixo usando camisa preta')
  } else {
    // se estiver sem light mode, mander a imagem normalzera
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'foto de peterson usando camisa preta')
  }
}
