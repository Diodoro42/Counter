let contador_Array = 0;

let btn_Increase = document.querySelector('#btn_increase');
let btn_Decrease = document.querySelector('#btn_decrease');
let btn_Reset = document.querySelector('#btn_reset')
let contador_Numero = contador_Array
let spantext = document.querySelector('#span_content')

btn_Increase.addEventListener('click', function aumentar(){
    // window.alert('olaa mundo')
    contador_Numero += 1
    console.log(contador_Numero)
    if(contador_Numero < 0){
        spantext.style.color = 'red'
        
    }

    else if(contador_Numero == 0){
        spantext.style.color = 'black'

    }

    else{
        spantext.style.color = 'green'
    }
    spantext.innerHTML = contador_Numero
})

btn_Decrease.addEventListener('click', function diminuir(){
    contador_Numero -= 1
    console.log(contador_Numero)
    if(contador_Numero < 0){
        spantext.style.color = 'red'
        
    }

    else if(contador_Numero == 0){
        spantext.style.color = 'black'

    }

    else{
        spantext.style.color = 'green'
    }
    spantext.innerHTML = contador_Numero
    
})

btn_Reset.addEventListener('click', function resetar(){
    contador_Numero = 0
    console.log(contador_Numero)
    if(contador_Numero < 0){
        spantext.style.color = 'red'
        
    }

    else if(contador_Numero == 0){
        spantext.style.color = 'black'

    }

    else{
        spantext.style.color = 'green'
    }
    spantext.innerHTML = contador_Numero
})

//tentativa de criar uma function que adiciona sequencialmente no contador
// btn_Increase.addEventListener('mousedown', function adicionarSegurar(){
//     contador_Numero += 1
//     console.log(contador_Numero)
//     if(contador_Numero < 0){
//         spantext.style.color = 'red'
        
//     }

//     else if(contador_Numero == 0){
//         spantext.style.color = 'black'

//     }

//     else{
//         spantext.style.color = 'green'
//     }
//     spantext.innerHTML = contador_Numero







