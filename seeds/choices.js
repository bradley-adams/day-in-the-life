
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('choices').del()
    .then(function () {
      // Inserts seed entries
      return knex('choices').insert([
        {scene_id: 1, choice_id: 1, text: 'Now. Plenty of time to get ready and take a few minutes to prepare for the day.', points: 8, consequences: 'Look, I don’t know how manage to go to bed early enough to pull this off, but I hate you. Lose 2 points.'},
        {scene_id: 1, choice_id: 2, text: 'In 30 minutes. You’ll have just enough time to shower and get there on time-ish, and the extra sleep will help', points: 5, consequences: 'You arrive at 8:40, which is not late for the lecture at least. No points.'},
        {scene_id: 1, choice_id: 3, text: 'In one hour. Showers are optional.', points: 2, consequences: 'That’s gross, you’re gross. Lose 10 points.'},

        {scene_id: 2, choice_id: 4, text: 'My greatest weakness is that I’m a perfectionist. I try too hard.', points: 2, consequences: 'Boo. Everyone hates your lame cliches. Lose 3 points.'},
        {scene_id: 2, choice_id: 5, text: 'I think my greatest weakness is that the Obama Administration and the liberal media are using fake news to undermine me. A lot of people have told me that if it wasn’t for that, everything would be really great, really amazing. You’ll see', points: 2, consequences: 'Hello Mr President, wow, it’s really amazing that you’re here. I would have thought you had more important things to do, like arranging a summit with North Korea or tweeting about how much you hate Rosie O’Donnell. Lose 10 points.'},
        {scene_id: 2, choice_id: 6, text: 'A big weakness for me is that I’m actually a cosmic horror from beyond mortal constraints of space and time, temporarily incarcerated in humanlike form, here to usher in a new age of cephalopodic rule over this insignificant sphere. That might conflict with the learning goals of EDA.', points: 2, consequences: 'Everyone laughs - they think you’re joking! Your cover is seemingly still safe. I guess honesty really is the best policy? Gain 3 points.'},

        {scene_id: 2, choice_id: 7, text: 'Deflect with Humor: “Um, that variable should be renamed to Harrison?', points: 2, consequences: 'Everyone laughs, but Harrison’s eyes narrow. He’s on to your tricks, but what will the consequences be? 0 points'},
        {scene_id: 2, choice_id: 8, text: 'That’s a great question, and I’m glad you asked. Let’s use a collaborative problem solving paradigm to achieve our learning objectives - what does the room think?', points: 2, consequences: 'Everyone sees through your obvious attempt to cover your tracks. Lose 5 points.'},
        {scene_id: 2, choice_id: 9, text: 'I’m sorry, I’m not confident on this material, can you go back over it before I answer the question?', points: 2, consequences: 'A bunch of other people nod their heads and you can tell that they appreciate the chance to go over the material. Earn 5 points.'},

      ]);
    });
};
