import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifyer.notify({
  title: 'Water Time!',
  body: 'Encha sua garrafinha!',
});

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on('countdown-start', notify);
      Emitter.on('countdown-finish', Timer.init);

      Timer.init();
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
