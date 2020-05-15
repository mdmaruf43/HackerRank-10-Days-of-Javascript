function CreateObject(a, b){
    const rectangle = {
        length: a,
        width: b,
        perimeter: 2 * (a+b),
        area: a*b,
    }

    return rectangle;
}

const rec = new CreateObject(2, 3);
console.log(rec.length);