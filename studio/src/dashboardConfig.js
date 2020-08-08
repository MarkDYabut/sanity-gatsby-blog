export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f2e9ff9fe2951c6bf573ba4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k2ov2qzz',
                  apiId: '428f2673-4ec0-419d-9540-cee842a2980b'
                },
                {
                  buildHookId: '5f2e9ff9bed268b083703d20',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tb738wxg',
                  apiId: '2d81683a-6e30-47af-8476-9c86798a9189'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarkDYabut/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tb738wxg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
