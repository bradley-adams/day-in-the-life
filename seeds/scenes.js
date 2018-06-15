
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenes').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenes').insert([
        {id: 1, title: 'Morning Before Class', text: 'Your alarm goes off. It’s one hour before you need to leave for EDA. When are you going to get up?', next: 2, image: 'https://media.istockphoto.com/vectors/little-girl-waking-up-vector-id802098412?k=6&m=802098412&s=612x612&w=0&h=lDF_JwGHl2NS3LGHKK3pg1mCl4abKmKfw_M-UjwBKFY='},
        {id: 2, title: 'Accountability', text: 'As you arrive at class, you see the question on the board is ‘what is your greatest weakness?’ How do you answer the group?', next: 3, image: 'https://thumbs.dreamstime.com/z/group-therapy-session-sitting-circle-therapist-37373270.jpg'},
        {id: 3, title: 'Morn Lecture/Floor Exercise', text: 'This morning’s lecture is with Harrison. You’re not all that confident of the material, and despite your best efforts, you zone for a few minutes when he explains something really complex, like for loops or something. Just as you are deep in some particularly deep thoughts about your hero, Beyonce, Harrison turns to you and says “How do you think we should solve this problem?” What do you say?', next: 4, image: 'http://www.cnatrainingclass.com/wp-content/uploads/2012/07/confused-sleeping-at-computer1.jpg'},

        {id: 4, title: 'Yoga', text: 'Ming rings the bell of enlightenment. You look at your paring partner and gasp. Is it that time already? You quickly save add commit and push so you do not lose your work over lunch. Are you participating today?', next: 5, image: 'http://www.lexiyoga.com/images/partner-yoga.jpg'},
        {id: 5, title: 'Lunch', text: 'Eating time and free reign is upon us. With the world at your feet you develop a plan. It is sunny outside and the birds are chirping. What do you do for lunch?', next: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZ765B5i5VTPO7034VypbhfeUmXngSzbH2TNvlYbuw57Qp1QL'},
        {id: 6, title: 'Afternoon Lecture', text: 'We enter the room and our fearless leader sits up the front at the whiteboard. He smiles as you choose a place to worship him in the room. You sit and smile back. He gathers everyone’s minds with a deafening silence. Then he starts to speak. Do you:', next: 7, image: 'https://fingertipstyping.co.uk/wp-content/uploads/2017/04/PowerpointLecture-700x313.jpg'}
      ]);
    });
};
