import { Component } from '@angular/core';
import {
  FindOneUserGQL,
  UpdateOneUserVariables,
  connectMany,
  connectOne,
  disconnectMany,
  set,
} from '@zen/graphql';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'zen-main',
  templateUrl: 'zen-main.component.html',
})
export class ZenMainComponent {
  constructor(private findOneUserGQL: FindOneUserGQL) {}

  userInput: UpdateOneUserVariables['data'] = {
    comments: set([5, 7]),
    group: connectOne(7),
    posts: connectMany([1, 2, 3]),
  };

  user$ = this.findOneUserGQL
    .watch({
      where: {
        id: 1,
      },
    })
    .valueChanges.pipe(
      map(r => r.data?.findOneUser),
      shareReplay(1)
    );

  test() {
    const manyTestList = [
      { id: undefined },
      { id: null },
      { id: '' },
      undefined,
      null,
      { id: '1' },
      { id: '2', ex: '' },
      { id: '3', ex: '' },
    ];

    console.log('connectOneTest', connectOne({ id: 77, junk: 'sdsds' }));
    console.log('connectManyTest', connectMany(null));
    console.log('disconnectManyTest', disconnectMany(manyTestList));
    console.log('setTest', set(manyTestList));

    // this.updateOneUserGQL.mutate({ where: { id: 1 }, data: this.userInput });
  }
}
