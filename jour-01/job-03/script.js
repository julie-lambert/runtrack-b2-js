function myCount(string){
    let i = 0
    while (string[i]!== undefined){
        i++;
    }
    return i
}

function myIsInString(haystack, needle){

    for(let i = 0; i <= myCount(haystack)-myCount(needle); i++){
        let result = true
        for(let j = 0; j < needle.length; j++){
            if(haystack[i+j] !==needle[j]){
                result= false
                break
            }
        }
        if(result){
            return true
        }
    }
    return false
}

//console.log(myIsInString("Hello World", "ell"))