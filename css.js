document.addEventListener("DOMContentLoaded", () => {
    var con = document.querySelector('.container');
    var allBor = document.getElementById('all');
    var allVal = document.getElementById('allVal');
    var code = document.getElementById('code');
    var copy = document.getElementById('btn');
    var optionElement = document.getElementById('option');
    var borderElement = document.getElementById('border');


    var allRad = 10;
    var border_style="solid";
    var border_size=1;
    var coding = "Text";

    function borderUpdate() {
        allRad = allBor.value;
        border_size=borderElement.value;

        allVal.innerText = allRad + "px"; 
        coding = `
        border-radius: ${allRad}px;
        border: ${border_size}px ${border_style} black;
        `;
        
        code.value = coding;
        con.style.cssText = coding; // Apply the styles separately
    }
    allBor.addEventListener("mousemove", borderUpdate); 
    allBor.addEventListener("change", borderUpdate); 

    borderElement.addEventListener("mousemove", borderUpdate); 
    borderElement .addEventListener("change", borderUpdate); 





    copy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy'); // Corrected the typo
        alert("code copied");
    })
    borderUpdate();
    optionElement.addEventListener('change',function(){
     border_style = this.value;
     borderUpdate();
    });
});