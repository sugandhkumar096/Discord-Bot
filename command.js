const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',   
    description: 'Create a new short URL',
  },                              ];
const rest = new REST({ version: '10' }).setToken('MTQyMjI2NjI1MDE2MzM4ODY1Nw.GoBuU6.j_u76FttAJ4yqqbCGfVLTgE0MBaGyOf_Osf0vc');
(async () => {

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1422266250163388657'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();