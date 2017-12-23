//npm install nomnoml

var nomnoml = require('nomnoml');
var readline = require('readline');
var fs = require('fs');
var mindMapFile = './src/node/mindmap.nomnoml';
var outputFile = './src/node/mindmap.svg';

function genMindMap(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            src = nomnoml.renderSvg(data);
            fs.writeFile (savPath, src, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
}

genMindMap('./src/node/mindmap.svg','./src/node/mindmap.nomnoml');