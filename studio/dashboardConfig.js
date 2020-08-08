export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5f2ebf05f5cc1f42c2ffdbc0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6s672ibx',
                  apiId: 'b1039314-5e49-4ed3-96bb-7042271aad68'
                },
                {
                  buildHookId: '5f2ebf05848de0e2834937ca',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-uv5kn9tj',
                  apiId: '0bf5ec80-fe58-4024-b6b5-7c24dac063bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkarteaga/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-uv5kn9tj.netlify.app', category: 'apps'}
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
