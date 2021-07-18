import { Component  } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  treeOptions: Options<Report> = {
    capitalisedHeader: true,
    customColumnOrder: [
      'owner', 'name', 'backup', 'protected'
    ]
  };

  singleRootTree: Node<Report> = {
    value: {
      name: 'Reports',
      owner: 'Eric',
      protected: true,
      backup: true
    },
    children: [
      {
        value: {
          name: 'Charts',
          owner: 'Stephanie',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          name: 'Sales',
          owner: 'Virginia',
          protected: false,
          backup: true
        },
        children: []
      },
      {
        value: {
          name: 'US',
          owner: 'Alison',
          protected: true,
          backup: false
        },
        children: [
          {
            value: {
              name: 'California',
              owner: 'Claire',
              protected: false,
              backup: false
            },
            children: []
          },
          {
            value: {
              name: 'Washington',
              owner: 'Colin',
              protected: false,
              backup: true
            },
            children: [
              {
                value: {
                  name: 'Domestic',
                  owner: 'Oliver',
                  protected: true,
                  backup: false
                },
                children: []
              },
              {
                value: {
                  name: 'International',
                  owner: 'Oliver',
                  protected: true,
                  backup: true
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  };

  arrayOfNodesTree: Node<Task>[] = [
    {
      value: {
        name: 'Tasks for Sprint 1',
        completed: true,
        owner: 'Marco'
      },
      children: [
        {
          value: {
            name: 'Complete feature #123',
            completed: true,
            owner: 'Marco'
          },
          children: []
        },
        {
          value: {
            name: 'Update documentation',
            completed: true,
            owner: 'Jane'
          },
          children: [
            {
              value: {
                name: 'Proofread documentation',
                completed: true,
                owner: 'Bob'
              },
              children: []
            }
          ]
        }
      ]
    },
    {
      value: {
        name: 'Tasks for Sprint 2',
        completed: false,
        owner: 'Erika',
      },
      children: [
        {
          value: {
            name: 'Fix bug #567',
            completed: false,
            owner: 'Marco'
          },
          children: []
        },
        {
          value: {
            name: 'Speak with clients',
            completed: true,
            owner: 'James'
          },
          children: []
        }
      ]
    }
  ]

  logNode(node: Node<Report>) {
    console.log(node);
  }

}

export interface Report {
  name: string;
  owner: string;
  protected: boolean;
  backup: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}

