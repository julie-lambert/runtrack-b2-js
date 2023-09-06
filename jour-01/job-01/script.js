function myCount(string){
    let i = 0
    while (string[i]!== undefined){
        i++;
    }
    return i
}

function myUpperCase(string){

    const min = "abcdefghijklmnopqrstuvwxyz"
    const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let myString= ""

    for(let i = 0; i < myCount(string); i++){
        for(let j = 0; j < myCount(min); j++){
            if(string[i] === min[j]){
                myString += maj[j]
                break
            }
            else if(j === 25){
                myString += string[i]
                break
            }
        }

    }
    return myString

}

//console.log(myUpperCase("Hello World"))