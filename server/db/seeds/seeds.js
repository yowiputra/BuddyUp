console.log ("Seeding Data ...");
console.log ("Creating Data");

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return Promise.all([
        knex('users').insert({id: 1, username: 'LCS Ðupliënce ', email: 'user@example1.com', password: '123456', tagline: 'A world light years beyond your imagination.', blurb: 'I need to get up the rank, aiming for pro play, look for good support', imageurl: '', skill: 30089}),
        knex('users').insert({id: 2, username: 'SIN FBI ', email: 'user@example2.com', password: '123456', tagline: 'Adrenaline inside.', blurb: 'Looking to climb the rank, challenger mode, if you are not serious about this, do not do it.', imageurl: '', skill: 30767}),
        knex('users').insert({id: 3, username: 'Thief of Relics ', email: 'user@example3.com', password: '123456', tagline: 'This one is totally infectious.', blurb: 'Serious queque, looking for good practice.', imageurl: '', skill: 29767}),
        knex('users').insert({id: 4, username: 'luger123 ', email: 'user@example4.com', password: '123456', tagline: 'Are you up to the challenge.', blurb: 'Planning to be a pro-player, needs a buddy to do immensive amount of queques and climb rank, advanced level only.', imageurl: '', skill: 32767}),
        knex('users').insert({id: 5, username: 'SoulDevourer l ', email: 'user@example5.com', password: '', tagline: 'Two ways to rune your day.', blurb: 'Climbing the ladder, good ADC and midlane.', imageurl: '', skill: 29767}),
        knex('users').insert({id: 6, username: 'Xayira ', email: 'user@example6.com', password: '123456', tagline: 'Become a Jedi master without ever leaving home.', blurb: 'top laner, looking for jungler or support. 6:1', imageurl: '', skill: 28547}),
        knex('users').insert({id: 7, username: 'Shane', email: 'user@example7.com', password: '123456', tagline: 'Byte back.', blurb: 'In need of a serious mate to play this game with, cool with any position, but top laner is the best', imageurl: '', skill: 24586}),
        knex('users').insert({id: 8, username: 'DB.NoiA', email: 'user@example8.com', password: '123456', tagline: 'Byte down hard.', blurb: 'Good at support, looking for an ADC to pair up with and level up the rank', imageurl: '', skill: 28965}),
        knex('users').insert({id: 9, username: 'SG.tavo', email: 'user@example9.com', password: '123456', tagline: 'Change the system.', blurb: 'Awesome jungler, can manage all 3 lanes, support and kills well', imageurl: '', skill: 31876}),
        knex('users').insert({id: 10, username: 'WF.Net', email: 'user@example10.com', password: '123456', tagline: 'Cool under pressure.', blurb: 'SERIOUS GAME PLAY ONLY. JOIN ME IF YOU THINK THE SAME.', imageurl: '', skill: 32678}),
        knex('users').insert({id: 11, username: 'WG.xNova', email: 'user@example11.com', password: '123456', tagline: 'Everything else is child’s play.', blurb: 'Just looking to play a game or two', imageurl: '', skill: 0}),
        knex('users').insert({id: 12, username: 'VP.Ramzes666', email: 'user@example12.com', password: '123456', tagline: 'Feel everything.', blurb: 'Accept me, quick game play, let\'s go!', imageurl: '', skill: 500}),
        knex('users').insert({id: 13, username: 'canceL^^', email: 'user@example13.com', password: '123456', tagline: 'Think fast.Think fast.', blurb: '', imageurl: 'Let\'s play now', skill: -200}),
        knex('users').insert({id: 14, username: 'Faceless.iceiceice', email: 'user@example14.com', password: '123456', tagline: 'Get Nintendo or get out.', blurb: '5 seconds rule, do it', imageurl: '', skill: 1000}),
        knex('users').insert({id: 15, username: 'Liquid.gh', email: 'user@example15.com', password: '123456', tagline: 'Your game boy is about to become a man.', blurb: 'Do some killings now.', imageurl: '', skill: 5000}),
        knex('users').insert({id: 16, username: 'TNC.1437', email: 'user@example16.com', password: '123456', tagline: 'Inspire a generation.', blurb: 'Bored, up for a game or two?', imageurl: '', skill: -2500}),
        knex('users').insert({id: 17, username: 'Draskyl', email: 'user@example17.com', password: '123456', tagline: 'Interactive game action.', blurb: 'You will not regret playing with me, try it.', imageurl: '', skill: -5000}),
        knex('users').insert({id: 18, username: 'Secret.MidOne', email: 'user@example18.com', password: '123456', tagline: 'Irresistible force.', blurb: 'Free for a game right NOW', imageurl: '', skill: 7000}),
        knex('users').insert({id: 19, username: 'Empire.fn', email: 'user@example19.com', password: '123456', tagline: 'It’s not just a game, it’s an infection.', blurb: 'Cool person in general, up for a game', imageurl: '', skill: -7000}),
        knex('users').insert({id: 20, username: 'LFY.Monet', email: 'user@example20.com', password: '123456', tagline: 'Life is short, play more.', blurb: 'IMMEDIATE CLICK, game, NOW', imageurl: '', skill: 11}),
        knex('users').insert({id: 21, username: 'BananaSlamJamma', email: 'user@example21.com', password: '123456', tagline: 'The more you play with it, the harder it gets..', blurb: 'Do not know stuff, my skill sucks but I just want to play a game or two', imageurl: '', skill: -28965}),
        knex('users').insert({id: 22, username: 'Secret.MP', email: 'user@example22.com', password: '123456', tagline: 'No other video game stacks up.', blurb: 'noob level but fun to play with', imageurl: '', skill: -30087}),
        knex('users').insert({id: 23, username: 'Newbee.kaka', email: 'user@example23.com', password: '123456', tagline: 'Our gear is packed and ready to go.', blurb: 'Fresh to this game, need a buddy to go through this challenge with me.', imageurl: '', skill: -30187}),
        knex('users').insert({id: 24, username: 'Empire.Ghostik', email: 'user@example24.com', password: '123456', tagline: 'Play beyond.', blurb: 'Chill game', imageurl: '', skill: -12879}),
        knex('users').insert({id: 25, username: 'TobiWan', email: 'user@example25.com', password: '123456', tagline: 'Reality Bytes.', blurb: 'grab a beer, do a game with me...drunk', imageurl: '', skill: -20983}),
        knex('users').insert({id: 26, username: 'Sneyking', email: 'user@example26.com', password: '123456', tagline: 'Shift happens.', blurb: 'Looking to up my skill quite a bit', imageurl: '', skill: -31827}),
        knex('users').insert({id: 27, username: 'coL.Moo', email: 'user@example27.com', password: '123456', tagline: 'So real it hurts.', blurb: 'do not care about score or stats', imageurl: '', skill: -17662}),
        knex('users').insert({id: 28, username: 'Babyknight', email: 'user@example28.com', password: '123456', tagline: 'Take a byte out of crime.', blurb: 'noobie trying his best', imageurl: '', skill: -30023}),
        knex('users').insert({id: 29, username: 'Fogged', email: 'user@example29.com', password: '123456', tagline: 'The fastest, most powerful, game console on earth.', blurb: 'Started last Tuesday', imageurl: '', skill: -9004}),
        knex('users').insert({id: 30, username: 'Red.Jenkins', email: 'user@example30.com', password: '123456', tagline: 'The fighting game for real fighters.', blurb: 'do not judge me or my skills', imageurl: '', skill: -10928}),
        knex('users').insert({id: 31, username: 'Wings.bLink', email: 'user@example31.com', password: '123456', tagline: 'The final test of the game master.', blurb: 'relax and enjoy the game', imageurl: '', skill: -29817}),
        knex('users').insert({id: 32, username: 'Wings.Innocence', email: 'user@example32.com', password: '123456', tagline: 'The game that takes you there.', blurb: 'no difference than blindfolded, still sucks', imageurl: '', skill: -19746})
      ])
    })
}
