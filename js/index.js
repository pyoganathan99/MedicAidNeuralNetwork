data = _.shuffle(data);

var textArray = data.map(obj => obj.text);

var dictionary = extractDictionary(textArray);

var net = new brain.NeuralNetwork();

var trainingData = data.map((obj) => {

    var input = bow(obj.text,dictionary);
    var output={};
    output[obj.class]=1;

    return {
        input: input,
        output: output
    }

});

net.train(trainingData);

console.log(net.run(bow("bye from the most hello hello too",dictionary)))
