function reverseString(str){
    try{
        s = str.split('').reverse().join('');
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        console.log(s)
    }
}

reverseString('ewewr')