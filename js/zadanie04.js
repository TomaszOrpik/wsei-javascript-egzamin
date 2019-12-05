//Zadanie #1
console.log("Zadanie 1:");

const samplClassArr = document.getElementsByClassName("sample_class");

function getTagsofElements(elements) {
    let arr1 = [];
    for(let i=0; i<elements.length; i++)
        arr1.push(elements[i].tagName);
    return arr1;
}
console.log(getTagsofElements(samplClassArr));

//Zadanie #2
console.log("Zadanie 2:");

const sampleId = document.getElementById("sample_id");

function getClassesOfElement(element) {
    let arr2 = [];
    arr2 = element.className.split(" ");
    return arr2;
}
console.log(getClassesOfElement(sampleId));

//Zadanie #3
console.log("Zadanie 3:");

const sample_class2Arr = document.getElementsByClassName("sample_class_2")[0].children[0].children;

function getInnerTextOfElements(elements) {
    let arr3 = [];
    for(let i=0; i<elements.length; i++)
        arr3.push(elements[i].innerText);
    return arr3;
}
console.log(getInnerTextOfElements(sample_class2Arr));

//Zadanie #4
console.log("Zadanie 4:");

const links = document.querySelectorAll("a");

function getAddressesOfElements(elements) {
    let arr4 = [];
    for(let i=0; i<elements.length; i++) 
        arr4.push(elements[i].getAttribute("href"));

        arr4.forEach(element => {
            if(element == null)
                arr4.pop(element);
        });
        return arr4;
}
console.log(getAddressesOfElements(links));

//Zadanie #5
console.log("Zadanie 5:");

const sampleClass3children = document.getElementsByClassName("sample_class_3")[0].children;

console.log(getTagsofElements(sampleClass3children));