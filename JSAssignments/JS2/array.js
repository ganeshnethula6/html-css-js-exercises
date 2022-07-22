
function concatArrays(concatArray1, concatArray2) {
    let array1 = concatArray1.value.split(",");
    let array2 = concatArray2.value.split(",");
    if (concatArray1.value.length > 0 && concatArray2.value.length) {
        let array1 = concatArray1.value.split(",");
        let array2 = concatArray2.value.split(",");
        document.getElementById("arr1").innerHTML = "Array 1: [" + array1 + "];";
        document.getElementById("arr2").innerHTML = "Array 2: [" + array2 + "];";
        let combinedArray = array1.concat(array2);
        document.getElementById("concatArray1").value = "";
        document.getElementById("concatArray2").value = "";
        document.getElementById("concat").innerHTML = "combinedArray[" + combinedArray + "];";
        console.log(combinedArray);
    }
    else {
        document.getElementById("arr1").innerHTML = " please create array"
    }
}

function createIndexArray(id) {
    let indexArray;
    console.log(id.value);
    if (id.value.length>0) {
        let s1 = id.value.trim();
        document.getElementById("indexArray").innerHTML = "Array: [" + s1 + "]";
        indexArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["indexArray"] = indexArray;
        document.getElementById("indexInputArray").indexArray = "";

    }
    else {
        document.getElementById("indexArray").innerHTML = "Please create an array ";
    }
}

function indexOfArray() {
    let s1 = window.localStorage.getItem("indexArray");
    let arrayValue = document.getElementById("index").value.trim();
    if (s1 != null && arrayValue != "") {
        let indexArray = s1.trim().split(",");
        console.log(arrayValue);
        const index = indexArray.indexOf(arrayValue);
        document.getElementById("index").value = "";
        document.getElementById("indexArrayIndex").innerHTML = index;
    }
    else {
        document.getElementById("indexArrayIndex").innerHTML = "please enter the value."
    }
}


function createJoinArray(id) {
    let joinArray;
    if (id.value.length>0) {
        let s1 = id.value.trim();
        document.getElementById("joinArray").innerHTML = "Array: [" + s1 + "]";
        joinArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["joinArray"] = joinArray;
        document.getElementById("lastIndexInputArray").joinArray = "";

    }
    else {
        document.getElementById("joinArray").innerHTML = "Please create an array ";
    }
}

function joinArray() {
    let s1 = window.localStorage.getItem("joinArray");
    if (s1 != null && s1.length>0) {
        let joinArray = s1.trim().split(",");
        let joinedArray = joinArray.join(" ");
        console.log(joinedArray);
        document.getElementById("joinedArrayTab").innerHTML = joinedArray.trim();
    }
    else {
        document.getElementById("joinedArrayTab").innerHTML = "Please create an array ";
    }
}

function createLastIndexArray(id) {
    let lastIndexArray;
    console.log(id.value);
    if (id.value.length) {
        let s1 = id.value.trim();
        document.getElementById("lastIndexArray").innerHTML = "Array: [" + s1 + "]";
        lastIndexArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["lastIndexArray"] = lastIndexArray;
        document.getElementById("lastIndexInputArray").lastIndexArray = "";

    }
    else {
        document.getElementById("lastIndexArray").innerHTML = "Please create an array ";
    }
}


function lastIndexOfArray() {
    let s1=window.localStorage.getItem("lastIndexArray");
    let arrayValue = document.getElementById("lastIndex").value.trim();
    if (s1 != null && arrayValue != "") {
        let lastIndexArray = window.localStorage.getItem("lastIndexArray").trim().split(",");
        console.log(arrayValue);
        const index = lastIndexArray.lastIndexOf(arrayValue);
        console.log(index);
        document.getElementById("lastIndex").value = "";
        document.getElementById("lastIndexArrayIndex").innerHTML = index;
    }
    else {
        document.getElementById("lastIndexArrayIndex").innerHTML = "please enter the value."
    }
}


function createPushArray(id) {
    let pushArray;
    console.log(id.value);
    let s1 = id.value.trim();
    if (s1.length> 0) {
        let s1 = id.value.trim();
        document.getElementById("pushArray").innerHTML = "Array: [" + s1 + "]";
        pushArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["pushArray"] = pushArray;
        document.getElementById("pushInputArray").innerHTML = "";

    }
    else {
        document.getElementById("pushArray").innerHTML = "Please create an array ";
    }
}


function pushElement() {
    let s1=window.localStorage.getItem("pushArray");
    let value = document.getElementById("addValue").value.trim();
    console.log(typeof pushArray);
    if (s1 != null && value.length>0) {
        let pushArray = s1.trim().split(",");
        let beforeLen = pushArray.length;
        document.getElementById("beforePushLen").innerHTML = "Length of the array before adding element: " + beforeLen;
        pushArray.push(Number(value));
        document.getElementById("addValue").value = "";
        let afterAdd = pushArray.length;
        document.getElementById("pushArrayAfter").innerHTML = "Array: [" + pushArray + " ]";
        document.getElementById("push-error").innerHTML = "";
        document.getElementById("afterPushLen").innerHTML = "Length of the array after adding element: " + afterAdd;
        window.localStorage["pushArray"] = pushArray;
    }
    else {
        document.getElementById("push-error").innerHTML = "Please enter the element ";
    }

}

function createPopArray(id) {
    let popArray;
    let s1 = id.value.trim();
    if (s1.length>0) {
        popArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["popArray"] = popArray;
        document.getElementById("popArray").innerHTML = "Array: [" + window.localStorage["popArray"] + "]";
        document.getElementById("popInputArray").innerHTML = "";

    }
    else {
        document.getElementById("popArray").innerHTML = "Please create an array ";
    }
}


function popElement() {
    let popArray = window.localStorage.getItem("popArray").trim().split(",");
    if (popArray.length >= 1 && popArray != null && popArray[0] != "") {
        let value = popArray.pop();
        window.localStorage["popArray"] = popArray;
        console.log(popArray);
        console.log(popArray);
        document.getElementById("popArray").innerHTML = "Array: [" + window.localStorage["popArray"] + "]";
        document.getElementById("popValue").innerHTML = value;
    }
    else {
        document.getElementById("popValue").innerHTML = " Array is Empty";
    }
}



function createShiftArray(id) {
    let shiftArray;
    let s1 = id.value.trim();
    console.log(id.value);
    if (s1.length>0) {
        let s1 = id.value.trim();
        shiftArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["shiftArray"] = shiftArray;
        document.getElementById("shiftArray").innerHTML = "Array: [" + window.localStorage["shiftArray"] + "]";
        document.getElementById("shiftInputArray").innerHTML = "";

    }
    else {
        document.getElementById("shiftArray").innerHTML = "Please create an array ";
    }
}

function shiftElement() {
    let s1=window.localStorage.getItem("shiftArray");
    if (s1!=null && s1.length >0) {
        let shiftArray = s1.trim().split(",");
        let value = shiftArray.shift();
        window.localStorage["shiftArray"] = shiftArray;
        console.log(shiftArray);
        console.log(shiftArray);
        document.getElementById("shiftArray").innerHTML = "Array: [" + window.localStorage["shiftArray"] + "]";
        document.getElementById("shiftValue").innerHTML = value;
    }
    else {
        document.getElementById("shiftValue").innerHTML = " Array is Empty";
    }
}

function createUnshiftArray(id) {
    let unshiftArray;
    let s1 = id.value.trim();
    if (s1.length>0) {

        document.getElementById("unShiftArray").innerHTML = "Array: [" + s1 + "]";
        unshiftArray = s1.split(",");
        window.localStorage.clear();
        window.localStorage["unshiftArray"] = unshiftArray;
        document.getElementById("befAdd").innerHTML = "Length of an array: " + unshiftArray.length;
        document.getElementById("unShiftInputArray").innerHTML = "";

    }
    else {
        document.getElementById("unShiftArray").innerHTML = "Please create an array ";
    }
}


function unShiftElement() {
    let s1 = window.localStorage.getItem("unshiftArray");
    let value = document.getElementById("unshiftValue").value.trim();
    if (value.length>0) {
        let unshiftArray = s1.trim().split(",");
        let beforeLen = unshiftArray.length;
        document.getElementById("befAdd").innerHTML = "Length of the array before adding element: " + beforeLen;
        unshiftArray.unshift(value);
        document.getElementById("unshiftValue").value = "";
        let afterAdd = unshiftArray.length;
        document.getElementById("unShiftArrayAfter").innerHTML = "Array: [" + unshiftArray + " ]";
        document.getElementById("afAdd").innerHTML = "Length of the array after adding element: " + afterAdd;
        window.localStorage["unshiftArray"] = unshiftArray;
    }
    else {
        document.getElementById("afAdd").innerHTML = "Please create an array ";
    }

}


function sortArray() {
    let s1 = document.getElementById("sortInputAray").value.trim();

    if (s1.length > 0) {
        const array = s1.split(",");
        let sortedArray = array.sort();
        document.getElementById("sortArayPara").innerHTML = "Before sorting the Array is: [" + s1 + "]";
        document.getElementById("sortedArray").innerHTML = "After sorting the Array is: " + sortedArray.join(" ");
    }
    else {
        document.getElementById("sortedArray").innerHTML = "please enter the array";
    }
}