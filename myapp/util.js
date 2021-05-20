const randomNCharaters =(n)=>{
    n=20
    const lowerCharacterPool =['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCharacterPool = lowerCharacterPool.map(d => d.toUpperCase());
    const numberPool =['0','1','2','3','4','5','6','7','8','9'];

    var randomChars_list = lowerCharacterPool
    .concat(upperCharacterPool)
    .concat(numberPool);
    
    var randomChars = randomChars_list.toString();
    randomChars = randomChars.replace(/,/g, "")
    var result ='';
    for(var i = 0; i<n; i++){
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    // return result;
    return result;
}
console.log(randomNCharaters(20));