const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Thank you for your valuable feedback: ${name}`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`Thank you for your valuable feedback: ${name}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        console.log(`Thank you for your valuable feedback: ${name}`);

        rl.question('What\s your favourite thing to eat for that meal? ', (whatMeal) => {
          console.log(`Thank you for your valuable feedback: ${name}`);

          rl.question('Which sport is your absolute favourite? ', (favSport) => {
            console.log(`Thank you for your valuable feedback: ${name}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
              console.log(`Thank you for your valuable feedback: ${name}. You like ${activity} while listening to ${music}.\n Your favourite type of meal is ${meal}, where you like to eat ${whatMeal}.\n Your favorite sport is ${favSport} and you have a supower which is: ${superPower}`);
              rl.close()
            });
          });
        });
      });
    });
  });
});
