//Arrays

//1.
const somaArray = (numeros) => {
    let numerosSomados = 0

    for (const numero of numeros) {
        numerosSomados += numero
    }
    return (numerosSomados)
}

//2.
const maiorNumero = (numeros) => {
    return (Math.max(...numeros))
}

//3.
const mediaArray = (numeros) => {
    const soma = numeros.reduce((total, numero) => total + numero)
    return soma / numeros.length
}

//Objetos

//4.

const contarPropriedades = (objeto) => {
    const propriedades = Object.keys(objeto)
    return propriedades.length
}

//5.
const juntarObjetos = (objeto1, objeto2) => {
    return { ...objeto1, ...objeto2 }
}

//6.
const encontrarPropriedade = (objeto, chave) => {
    const propriedades = Object.entries(objeto)

    const propriedadeEncontrada = propriedades.find(([key]) => key === chave)

    return propriedadeEncontrada
}

//Promises

//7.
const delayedPromise = () => {

    return new Promise((resolve, reject) => {
        const promessaResolvida = true
        setTimeout(() => {
            if (promessaResolvida) {
                resolve("Bem sucedido!")
            } else {
                reject("Mal sucedido!")
            }
        }, 1000)
    })
        .then(resultado => {
            console.log(resultado)
        })
        .catch(error => {
            console.log(error)
        })

}

//8.
const fetchData = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("A solicitação falhou!")

            return response.json()

        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}

//9.
const gerarNumeroAleatorio = () => {

    return new Promise((resolve, reject) => {

        const numeroAleatorio = Math.floor(Math.random() * 10000)

        setTimeout(() => {
            if (numeroAleatorio) {
                resolve(numeroAleatorio)
            } else {
                reject('Erro na solicitação')
            }

        }, 2000)

    })

        .then(numero => {
            console.log(numero)
        })
        .catch(error => {
            console.log(error)
        })

}

//timeout

//10.
const executarAposTempo = (funcao, tempo) => {
    setTimeout(() => {
        funcao
    }, tempo)
}

//11.
const cancelarExecucao = (id) => {
    clearTimeout(id)
}

//12.
const intervaloPersonalizado = (funcao, tempo) => {
    setInterval(() => {
        funcao
    }, tempo)
}

//13.
let time;

const contadorInterval = () => {
    let contador = 1
    time = setInterval(() => {
        if (contador <= 10) console.log(contador++)
    }, 1000)
}

//14.
const pararContador = () => {

    clearInterval(time)
}

//15.
const gerarNumerosAleatorio = () => {
    setInterval(() => {
        const numeroAleatorio = Math.random()
        console.log(numeroAleatorio)
    }, 500)
}

//Desestruturação e Arrays

//16.
let test = [1, 2, 15, 34]
const primeiroEUltimo = (array) => {
    const [primeiro, ...restante] = array
    const ultimo = restante.pop()
    return [primeiro, ultimo]
}

//17.
const extrairInfo = (arrayDeObjetos) => {
    let novoArray = arrayDeObjetos.map(objeto => objeto.idade)
    return (novoArray)
}

let testando = {
    titulo: "Genesis",
    autor: "sas",
    ano: 2002
}

//18.
const separarArrays = (array) => {
    let numerosPares = []
    let numerosImpares = []

    for (const numero of array) {
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        } else {
            numerosImpares.push(numero)
        }
    }

    console.log(numerosPares)
    console.log(numerosImpares)
}

//19.
const infoPessoa = (objeto) => {
    const informacoes = Object.values(objeto)
    let infoFormatada = `Nome: ${informacoes[0]}, Idade: ${informacoes[1]}, Cidade: ${informacoes[2]}`

    return (infoFormatada)
}

//20.
const desestruturarUsuario = (objeto) => {
    const [id, email] = Object.values(objeto)
    const novoObjeto = {
        id: id,
        email: email
    }
    console.log(novoObjeto)
}

//21.
const informacoesLivro = (objeto) => {
    const [titulo, autor, ano] = Object.values(objeto)
    const informacoes = `"O livro ${titulo} foi escrito por ${autor} em ${ano}`
    console.log(informacoes)
}

//Rest e Spread

//22.
const concatenarArrays = (...arrays) => {
    return [].concat(...arrays)
}

//23.
const somaNumeros = (...numeros) => {
    const arrayDeNumeros = []
    arrayDeNumeros.push(...numeros)

    let resultado = 0

    for (let numero of arrayDeNumeros) {
        resultado += numero
    }

    console.log(resultado)
}

//24.
const mesclarObjetos = (...objetos) => {
    const resultado = {}
    for (const objeto of objetos) {
        resultado = {...resultado, ...objeto}
    }
    console.log(resultado)
}