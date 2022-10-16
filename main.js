/* =============================== Transforma em ascii =========================================================*/

function executartextoascii() {
  var texto = document.getElementById('valor').value
  var textoascii = []

  texto = texto.split('')

  textoascii = converteascii(texto, caracteres)

  document.getElementById('resultado').value = textoascii
}

function converteascii(texto, caracteres) {
  let textoemascii = []
  let index = 0

  while (index < texto.length) {
    let se = caracteres.indexOf(texto[index])
    textoemascii.push(se)
    index++
  }

  return textoemascii
}

/* =============================== Transforma em texto =========================================================*/

function executarasciitexto() {
  let ascii = document.getElementById('valor').value
  let asciitexto = []

  asciitexto = convertetexto(ascii.split(','), caracteres)

  document.getElementById('resultado').value = asciitexto.join('')
}

function convertetexto(ascii, caracteres) {
  let asciitexto = []
  let index = 0

  while (index < ascii.length) {
    let se = caracteres[parseInt(ascii[index])]
    asciitexto.push(se)
    index++
  }

  return asciitexto
}

/* =============================== Criptografando ==============================================================*/

function criptografar() {
  var texto = document.getElementById('valor').value
  let chave = document.getElementById('chave').value
  let criptografado = []

  chave.split()

  let textoascii = converteascii(texto, caracteres)

  let indexz = 0
  let cont = 0

  while (indexz <= textoascii.length) {
    if (cont >= chave.length) {
      cont = 0
    }
    let se = parseInt(parseInt(textoascii[indexz]) + parseInt(chave[cont]))
    criptografado.push(se)
    cont++
    indexz++
  }

  document.getElementById('resultado').value = criptografado
  console.log(criptografado)
}

/* =============================== Descriptografando ===========================================================*/

function descriptografar() {
  var texto = document.getElementById('valor').value
  let chave = document.getElementById('chave').value
  let descriptografado = []

  let indexz = 0
  
  var cont = 0
  var textoarr = texto.split(',')
  while (indexz <= textoarr.length) {
    if (cont >= chave.length) {
      cont = 0
    }
    let se = parseInt(textoarr[indexz]) - parseInt(chave[cont])
    descriptografado.push(se)
    cont++
    indexz++
  }
  console.log(descriptografado)

  descriptografado = convertetexto(descriptografado, caracteres)

  document.getElementById('resultado').value = descriptografado
  console.log(descriptografado)
}

/* =============================== Copiando texto ===============================================================*/

function copiarTexto() {
  let textoCopiado = document.getElementById('resultado')
  textoCopiado.select()
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand('copy')

  document.getElementById('valor').value = textoCopiado.value
}

/* =============================== Variaveis ====================================================================*/

var texto = document.getElementById('valor').value

var caracteres = [
  '(nul)','(soh)','(stx)','(etx)','(eot)','(enq)','(ack)','(bel)','(bs)','(ht)','(nl)','(vt)','(np)','(cr)','(so)','(si)','(dle)','(dc1)','(dc2)','(dc3)','(dc4)','(nak)','(syn)','(etb)','(can)','(em)','(sub)','(esc)','(fs)','(gs)','(rs)','(us)',' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','"',']','^','_',"'",'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','(del)','Ç','ü','é','â','ä','à','å','ç','ê','ë','è','ï','î','ì','Ä','Å','É','æ','Æ','ô','ö','ò','û','ù','ÿ'
]
