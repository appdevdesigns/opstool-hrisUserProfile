var path = require('path');
var AD = require('ad-utils');
var async = require('async');

var sails,
    cwd;

//
// Global Before() and After() routines to setup sails for all our tests:
//
var lookups = {
  gender:{
    3:'Male',
    4:'Female'
  }
}

var people = null;
var listAlumni = [];

async.series([

  // 1) load Sails
  function(next) {

    // sails should lift from directory above:
    cwd = process.cwd();
    process.chdir(path.join('..','..'));


    AD.test.sails.lift({
      models:{
        // connection:'test',
        migrate:'safe'
      }
    })
    .fail(function(err){
        next(err);
    })
    .then(function(server) {

      sails = server;


      next();
          
    });

  },

    // find all people to exclude:
    function(next) {

        LHRISWorker.find({ statustype_id:7 })
        .then(function(list){
            list.forEach(function(worker){
                listAlumni.push(worker.ren_id);
            })
            next();
        })
        .catch(function(err){
            next(err);
        })
    },


    // 2) grab all people
    function(next){
// console.log('... listAlumni:', listAlumni);

        // LHRISRen.find({ skip:10, limit: 1 })
        // LHRISRen.find({ ren_id: [6, 985, 9, 15, 21] })
        LHRISRen.find({ ren_id: {'!':listAlumni }, rentype_id:3, statustype_id:5 })
        .limit(1)
        .populate('emails')
        .populate('assignments')
        .then(function(list){
            people = list;
            next();
        })
        .catch(function(err){
            next(err);
        })
    },


    // 3) convert to GR json
    function(next){
console.log('\n\n processing '+people.length+' people.');

        var numDone = 0;
        var numParallel = 5;
        function processOne(cb) {
            if (people.length == 0) {
                cb();
            } else {
                var person = people.shift();
                person.toGR()
                .then(function(p){

console.log('... person.toGR():', p)

                    processOne(cb);

                })
                .fail(function(err){
                    cb(err);
                })
            }
        }
        

        for(var i=0; i<numParallel; i++) {
            processOne(function(err){

                if (err){

                    next(err);

                } else {

                    numDone++;
                    if (numDone >= numParallel){
                        next();
                    }
                }
                
            });
        }

        // next();
    }
], function(err, results) {

  if (err) {
    console.error('!!!! error:', err);
  }

  console.log(' all done! ');
  process.exit(0);

})
  

