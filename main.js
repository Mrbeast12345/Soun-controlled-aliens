https://teachablemachine.withgoogle.com/models/XjjPs3j8s/
function startClassification(){
    navigator.mediaDevices.getDisplayMedia({audio : true})
    classifier = ml5.startClassification("https://teachablemachine.withgoogle.com/models/XjjPs3j8s/model.json" , model_ready);
}
function model_ready(){
    classifier.classify(gotResult)
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}