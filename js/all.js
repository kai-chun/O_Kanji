const fileName = document.getElementById('fileName');
const fileContent = document.getElementById('fileContent');

function handleFileSelect(event) {
    readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
        mammoth.convertToHtml({arrayBuffer: arrayBuffer})
            .then(displayResult)
            .done();
    });
}

function displayResult(result) {
    fileContent.innerHTML = result.value;
    fileContent.style.border = "1px solid black";
}

function readFileInputEventAsArrayBuffer(event, callback) {
    var file = event.files[0];

    fileName.innerHTML = file.name;

    var reader = new FileReader();
    
    reader.onload = function(loadEvent) {
        var arrayBuffer = loadEvent.target.result;
        callback(arrayBuffer);
    };
    
    reader.readAsArrayBuffer(file);
}