export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605de23d9e891931457b8f09',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5782asxk',
                  apiId: 'd17fb702-00ff-4cd3-bf04-b6361092eebc'
                },
                {
                  buildHookId: '605de23da0845128cde45467',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p6gcu8vq',
                  apiId: 'e83288c5-13d8-42bb-a77f-82d43f81669e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikebcbc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p6gcu8vq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
