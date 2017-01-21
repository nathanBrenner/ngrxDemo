import { Injectable }       from '@angular/core';

import { QuestionBase }     from '../question-base';
import { TextboxQuestion }  from '../question-textbox';

@Injectable()
export class QuestionService {
  getRegistrationQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'username',
        label: 'Username',
   	   	required: true,
        order: 1
   	  }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key: 'verify_password',
        label: 'Verify Password',
        required: true,
        order: 4
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getLoginQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        required: true,
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
