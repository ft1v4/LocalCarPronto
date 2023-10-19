const btn4 = document.querySelector('#btnPP')
btn4.addEventListener('click',()=>{
    window.location = 'index.html'
})


let cpf = document.querySelector('#tx3')

cpf.addEventListener('keypress',()=>{
    let Tinput = cpf.value.length
    console.log(Tinput)

    if(Tinput === 3){
        cpf.value += '.'
    }if(Tinput === 7){
        cpf.value += '.'
    }if(Tinput === 11){
        cpf.value += '-'
    }

})


/// oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"


let cartao = document.querySelector('#tx4')

cartao.addEventListener('keypress',()=>{
    let T2input = cartao.value.length
    console.log(T2input)

    if(T2input === 4){
        cartao.value += ' '
    }if(T2input === 9){
        cartao.value += ' '
    }if(T2input === 14){
        cartao.value += ' '
    }

})