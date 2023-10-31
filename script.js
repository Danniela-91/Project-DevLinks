function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  //}

  //fazer botan funcionar
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar avatar-light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
