let input = document.querySelector('.display')

function displayga(inp) {
   input.value += inp; 

}

function clear1() {
    input.value = ''
}

function hisoblash() {
    try {
        input.value = eval(input.value)
    }catch (error) {
        input.value = 'ERROR!'
    }
}