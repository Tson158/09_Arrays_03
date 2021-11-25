/*********   CODE CHALLENGE HTML **********/
        //Check in ---> Checkout system als praktische funktion z.b.

//  Theorie ****************
    //  push()  /  pop()
    //  push --> Daten rein ... (+)

    // let arr = [];
    // output(arr);
    // arr.push("ich");
    // output(arr);
    // arr.push("bin");
    // output(arr);
    // arr.push("Thomas");
    // output(arr);

    // //  pop() --> Daten raus ... (-)
    // output(arr.pop("bin"));
    // output(arr);
    // output(arr.pop());
    // output(arr);
    // output(arr.pop());
    // output(arr);



/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];


output(getHTML())
function getHTML() {

    let htmlStr = "";
            // <tag> ---> opentag
            // </tag> ---> closetag
    // const gap = controls[0];

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTag(tags[i])) {
            htmlStr += getTags(tags[i],"open");
        } else {
            htmlStr += getTags(tags[i],"close");
        }


        // htmlStr += getTags(tags[i],"open")
        // htmlStr += getTags(tags[i],"close")
        
    }
    return htmlStr;
}


//  Modul: opentag | closetag
function isOpenTag(tag) {

    const cond = (tag != stack[stack.length-1]);        // tag == tag oben auf dem Stapel?

    if (cond) {
        stack.push(tag);
        // output(stack);
        return true;
    } else {
        stack.pop();
        // output(stack);
        return false;

    }
}


// Modul: Zusammenbau: <tagStr> ---> Tests
// output(getTags("html","open")) // opentag
// output(getTags("html","close")) // closetag
// output(getTags("html","?"))     // Fehler
function getTags(tag,op) {
    switch (op) {
        case "open":
            return controls[0] + tag + controls[2]
        case "close":
            return controls[1] + tag + controls[2]
    
        default:
            return "#!";
    }

    return controls[1] + tag + controls[2]     // closetag
    // return controls[0] + tag + controls[2] // opentag
}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
