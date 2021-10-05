import clear from 'clear';
import chalk from 'chalk';
import { textSync } from 'figlet';
import { prompt, QuestionCollection } from 'inquirer';
import { Builder } from '../builder';

export class CLI {
  private __id: string;

  constructor() {
    this.__id = 'a id';
  }

  async run(): Promise<any> {
    clear();

    console.log(chalk.yellow(textSync('CNN', { horizontalLayout: 'full' })));

    const results = await this.getConfig();

    const builder = new Builder(results);
    await builder.run();
    console.log(builder);
  }

  getConfig(): Promise<any> {
    const question: QuestionCollection = [
      {
        name: 'name',
        type: 'input',
        message: 'Name your CNN:',
        validate: (val: any) => {
          // TODO: Add regex to make filename
          if (val === '') return 'Not a valid name';
          else return true;
        }
      },
      {
        name: 'pixels',
        type: 'number',
        message: 'What is the pixel size if your pictures:'
      },
      {
        name: 'learning_rate',
        type: 'number',
        message: 'Which learning rate should your CNN use: [0.0 - 1.0]',
        validate: (val: number) => {
          if (val > 0.0 && val < 1) return true;
          else return 'Choose a valid learning rate';
        }
      },
      {
        name: 'layer_count',
        type: 'number',
        message: 'Enter the number of hidden layers your neural network should have:'
      },
      {
        name: 'activasion_function',
        type: 'list',
        message: 'What activasion function should the CNN use:',
        choices: ['RELU', 'SIGMOID']
      },
      {
        name: 'operation_mode',
        type: 'list',
        message: 'In what operation mode do you want to start the cnn:',
        choices: ['PRODUCTIVE', 'TRAINING', 'TEST']
      }
    ];
    return prompt(question);
  }
}
