loadModel();

$("#predict-button").click(async function () {
    // get image data from canvas
    console.log("in predict function")
    var imageData = canvas.toDataURL();

    // preprocess canvas
    let tensor = preprocessCanvas(canvas);
    
    console.log(tensor);
    // make predictions on the preprocessed image tensor
    let predictions = await model.predict(tensor).data();

    console.log(predictions);

    // get the model's prediction results
    let results = Array.from(predictions);

    displayLabel(results)
    // display the predictions in chart
    console.log(results)
});

$("#clear-button").click(async function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    clickX = new Array();
    clickY = new Array();
    clickD = new Array();
    $(".prediction-text").empty();
    $("#result_box").addClass('d-none');
});

// using TensorFlow, load the model from the static/models folder which 
// has been trained to predict the number the user draws on the canvas
async function loadModel() {
    console.log("in load model function")
    // clear the model variable
    model = undefined; 
    // load the model using a HTTPS request (where you have stored your model files)
    model = await tf.loadLayersModel("static/models/model.json");
}

function preprocessCanvas(image) {
    // resize the input image to target size of (1, 28, 28)
    let tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([28, 28])
        .mean(2)
        .expandDims(2)
        .expandDims()
        .toFloat();
    return tensor.div(255.0);
}
