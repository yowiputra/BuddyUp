console.log ("Seeding Data ...");
console.log ("Creating Data");
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return Promise.all([
        knex('users').insert({username: 'LCS Ðupliënce ', email: 'user@example1.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'A world light years beyond your imagination.', blurb: 'I need to get up the rank, aiming for pro play, look for good support', imageurl: '', seriousness: 6000}),
        knex('users').insert({username: 'SIN FBI ', email: 'user@example2.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Adrenaline inside.', blurb: 'Looking to climb the rank, challenger mode, if you are not serious about this, do not do it.', imageurl: '', seriousness: 5000}),
        knex('users').insert({username: 'Thief of Relics ', email: 'user@example3.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'This one is totally infectious.', blurb: 'Serious queque, looking for good practice.', imageurl: '', seriousness: 4000}),
        knex('users').insert({username: 'luger123 ', email: 'user@example4.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Are you up to the challenge.', blurb: 'Planning to be a pro-player, needs a buddy to do immensive amount of queques and climb rank, advanced level only.', imageurl: '', seriousness: 7000}),
        knex('users').insert({username: 'SoulDevourer l ', email: 'user@example5.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Two ways to rune your day.', blurb: 'Climbing the ladder, good ADC and midlane.', imageurl: '', seriousness: 6000}),
        knex('users').insert({username: 'Xayira ', email: 'user@example6.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Become a Jedi master without ever leaving home.', blurb: 'top laner, looking for jungler or support. 6:1', imageurl: '', seriousness: 5840}),
        knex('users').insert({username: 'Shane', email: 'user@example7.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Byte back.', blurb: 'In need of a serious mate to play this game with, cool with any position, but top laner is the best', imageurl: '', seriousness: 6434}),
        knex('users').insert({username: 'DB.NoiA', email: 'user@example8.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Byte down hard.', blurb: 'Good at support, looking for an ADC to pair up with and level up the rank', imageurl: '', seriousness: 3855}),
        knex('users').insert({username: 'SG.tavo', email: 'user@example9.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Change the system.', blurb: 'Awesome jungler, can manage all 3 lanes, support and kills well', imageurl: '', seriousness: 3331}),
        knex('users').insert({username: 'WF.Net', email: 'user@example10.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Cool under pressure.', blurb: 'SERIOUS GAME PLAY ONLY. JOIN ME IF YOU THINK THE SAME.', imageurl: '', seriousness: 5000}),
        knex('users').insert({username: 'WG.xNova', email: 'user@example11.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Everything else is child’s play.', blurb: 'Just looking to play a game or two', imageurl: '', seriousness: 7333}),
        knex('users').insert({username: 'VP.Ramzes666', email: 'user@example12.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Feel everything.', blurb: 'Accept me, quick game play, let\'s go!', imageurl: '', seriousness: 3444}),
        knex('users').insert({username: 'canceL^^', email: 'user@example13.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Think fast.Think fast.', blurb: '', imageurl: 'Let\'s play now', seriousness: 6560}),
        knex('users').insert({username: 'Faceless.iceiceice', email: 'user@example14.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Get Nintendo or get out.', blurb: '5 seconds rule, do it', imageurl: '', seriousness: 5337}),
        knex('users').insert({username: 'Liquid.gh', email: 'user@example15.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Your game boy is about to become a man.', blurb: 'Do some killings now.', imageurl: '', seriousness: 5213}),
        knex('users').insert({username: 'TNC.1437', email: 'user@example16.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Inspire a generation.', blurb: 'Bored, up for a game or two?', imageurl: '', seriousness: 5221}),
        knex('users').insert({username: 'Draskyl', email: 'user@example17.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Interactive game action.', blurb: 'You will not regret playing with me, try it.', imageurl: '', seriousness: 4653}),
        knex('users').insert({username: 'Secret.MidOne', email: 'user@example18.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Irresistible force.', blurb: 'Free for a game right NOW', imageurl: '', seriousness: 4224}),
        knex('users').insert({username: 'Empire.fn', email: 'user@example19.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'It’s not just a game, it’s an infection.', blurb: 'Cool person in general, up for a game', imageurl: '', seriousness: 3426}),
        knex('users').insert({username: 'LFY.Monet', email: 'user@example20.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Life is short, play more.', blurb: 'IMMEDIATE CLICK, game, NOW', imageurl: '', seriousness: 3152}),
        knex('users').insert({username: 'BananaSlamJamma', email: 'user@example21.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'The more you play with it, the harder it gets..', blurb: 'Do not know stuff, my seriousness sucks but I just want to play a game or two', imageurl: '', seriousness: 2228}),
        knex('users').insert({username: 'Secret.MP', email: 'user@example22.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'No other video game stacks up.', blurb: 'noob level but fun to play with', imageurl: '', seriousness: 2334}),
        knex('users').insert({username: 'Newbee.kaka', email: 'user@example23.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Our gear is packed and ready to go.', blurb: 'Fresh to this game, need a buddy to go through this challenge with me.', imageurl: '', seriousness: 2112}),
        knex('users').insert({username: 'Empire.Ghostik', email: 'user@example24.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Play beyond.', blurb: 'Chill game', imageurl: '', seriousness: 1118}),
        knex('users').insert({username: 'TobiWan', email: 'user@example25.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Reality Bytes.', blurb: 'grab a beer, do a game with me...drunk', imageurl: '', seriousness: 1226}),
        knex('users').insert({username: 'Sneyking', email: 'user@example26.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Shift happens.', blurb: 'Looking to up my seriousness quite a bit', imageurl: '', seriousness: 1225}),
        knex('users').insert({username: 'coL.Moo', email: 'user@example27.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'So real it hurts.', blurb: 'do not care about score or stats', imageurl: '', seriousness: 1150}),
        knex('users').insert({username: 'Babyknight', email: 'user@example28.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'Take a byte out of crime.', blurb: 'noobie trying his best', imageurl: '', seriousness: 1228}),
        knex('users').insert({username: 'Fogged', email: 'user@example29.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'The fastest, most powerful, game console on earth.', blurb: 'Started last Tuesday', imageurl: '', seriousness: 5225}),
        knex('users').insert({username: 'Red.Jenkins', email: 'user@example30.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'The fighting game for real fighters.', blurb: 'do not judge me or my seriousnesss', imageurl: '', seriousness: 1254}),
        knex('users').insert({username: 'Wings.bLink', email: 'user@example31.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'The final test of the game master.', blurb: 'relax and enjoy the game', imageurl: '', seriousness: 1252}),
        knex('users').insert({username: 'Wings.Innocence', email: 'user@example32.com', password_digest: bcrypt.hashSync("123456", 10), tagline: 'The game that takes you there.', blurb: 'no difference than blindfolded, still sucks', imageurl: '', seriousness: 800})
      ])
    })
}
