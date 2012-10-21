var fs = require('fs')
  , argv = require('optimist').demand('out').argv;

var basic = [
  'Array.forEach',
  'Array.indexOf',
  'Array.map',
  'Function.bind',
  'Object.create',
  'Object.keys'
];

var common = [
  'Array.filter',
  'Array.forEach',
  'Array.indexOf',
  'Array.map',
  'Array.reduce',
  'Function.bind',
  'Object.create',
  'Object.keys'
];

var all = [
  'Array.every',
  'Array.filter',
  'Array.forEach',
  'Array.indexOf',
  'Array.lastIndexOf',
  'Array.map',
  'Array.reduce',
  'Array.reduceRight',
  'Array.some',
  'Function.bind',
  'Object.create',
  'Object.keys'
];

if (argv.basic) {
  bundle(basic, argv.out);
} else if (argv.common) {
  bundle(common, argv.out);
} else {
  bundle(all, argv.out);
}

function bundle(files, outfile) {
  var bundle = '';
  files.forEach(function(file) {
    var contents = fs.readFileSync('./lib/' + file + '.js').toString();
    var sp = file.split('.');
    if (!argv.noif) {
      bundle += 'if (!' + sp[0] + '.prototype.' + sp[1] + ') {\n';
    }
    bundle += contents;
    if (!argv.noif) {
      bundle += '}\n\n';
    }
  });

  fs.writeFileSync(outfile, bundle);
}
