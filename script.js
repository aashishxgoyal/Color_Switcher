let randomBtn = document.querySelector(".randomBtn")
let colorInput = document.querySelector("#colorInput")
let applyBtn = document.querySelector(".applyBtn")
let currentColorValue = document.querySelector(".currentColorValue")
let container = document.querySelector(".container")

const colorArray = ["red", "blue", "green", "yellow", "lightseagreen", "cyan", "tomato", "lightcoral", "acqua", "white", "black"]

const generateRandomColor  = ()=>{
    const randomNumber = Math.floor(Math.random()*colorArray.length)
    // console.log(randomNumber);          // 1, 2,5 6 enma number generate krega 
    return colorArray[randomNumber]         // or ya color name dega direct
}
// generateRandomColor();
let color = generateRandomColor()
console.log(color)

const changeColor = (color)=>{
    container.style.backgroundColor = color;        
    currentColorValue.innerText = color;            // jo color hum likhaga toh color name aa jaiga
}

const handleRandomBtnClick = ()=>{
    // console.log("random button click hua hai")
    let color = generateRandomColor();
    // console.log(color);          // jaise hi hum random par click krega vaise hi random color generate karke de dega
    changeColor(color);
}

const handleApplyBtnClick = ()=>{
    // console.log("random button click hua hai")       click karna par ya aaiga
    // console.log(colorInput.value)       // agar hum red likhaga toh console ma red likha aaiga
    const color = colorInput.value;
    changeColor(color);                 // input ma jo bhi color likhoga vo color apply ho jaiga
}

randomBtn.addEventListener("click", handleRandomBtnClick)
applyBtn.addEventListener("click", handleApplyBtnClick)

// changeColor("red")       ya humko code ma hi change karna pdega