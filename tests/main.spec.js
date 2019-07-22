//CommonJS as opposed to module exports
//imports as Node (at the time of the course)
//did not yet fully support that way of referencing

const expect = require('chai').expect;

const exec = require('child_process').exec; //execute file from cmd as child process
const btcConverter = './src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return version of bitcoin-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      //console.log inputs new line
      expect(stdout.replace('\n','')).to.be.equal(pkg.version);
      done();
    });
  });
  it('should return description when bitcoin-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      //console.log inputs new line
      expect(stdout.includes('Enables one to convert Bitcoin to any currency provided.')).to.be.true;
      done();
    });
  });

  it('should return the currency option when bitcoin-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      //console.log inputs new line
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return the amount option when bitcoin-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      //console.log inputs new line
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
