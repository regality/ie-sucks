var fs = require('fs')
  , argv = require('optimist').demand('out').argv;

var basic = [
  'Array.prototype.forEach.js',
  'Array.prototype.indexOf.js',
  'Array.prototype.map.js',
  'Function.prototype.bind.js',
  'Object.create.js',
  'Object.keys.js'
];

var all = [
  'Array.prototype.every.js',
  'Array.prototype.filter.js',
  'Array.prototype.forEach.js',
  'Array.prototype.indexOf.js',
  'Array.prototype.lastIndexOf.js',
  'Array.prototype.map.js',
  'Array.prototype.reduce.js',
  'Array.prototype.reduceRight.js',
  'Array.prototype.some.js',
  'Function.prototype.bind.js',
  'Object.create.js',
  'Object.keys.js'
];

if (argv.basic) {
  bundle(basic, argv.out);
} else {
  bundle(all, argv.out);
}

function bundle(files, outfile) {
  var bundle = '';
  files.forEach(function(file) {
    var contents = fs.readFileSync('./lib/' + file).toString();
    var sp = file.split('.');
    sp.pop();
    var js = sp.join('.');
    bundle += 'if (!' + js + ') {\n';
    bundle += contents;
    bundle += '}\n\n';
  });

  fs.writeFileSync(outfile, bundle);
}
