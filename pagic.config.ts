export default {
  srcDir: '.',
  ignore: [/\/examples\//, /\/public\//, /\/\./, /\/package\-lock\.json/, /\/package\.json/, /\/pagic\.config\.ts/],
  theme: 'docs',
  plugins: ['sidebar', 'script', 'gitalk', 'ga'],
  title: 'TypeScript 入门教程',
  sidebar: [
    'README.md',
    {
      link: 'introduction/README.md',
      children: [
        'introduction/what-is-typescript.md',
        'introduction/get-typescript.md',
        'introduction/hello-typescript.md'
      ]
    },
    {
      link: 'basics/README.md',
      children: [
        'basics/primitive-data-types.md',
        'basics/any.md',
        'basics/type-inference.md',
        'basics/union-types.md',
        'basics/type-of-object-interfaces.md',
        'basics/type-of-array.md',
        'basics/type-of-function.md',
        'basics/type-assertion.md',
        'basics/declaration-files.md',
        'basics/built-in-objects.md'
      ]
    },
    {
      link: 'advanced/README.md',
      children: [
        'advanced/type-aliases.md',
        'advanced/string-literal-types.md',
        'advanced/tuple.md',
        'advanced/enum.md',
        'advanced/class.md',
        'advanced/class-and-interfaces.md',
        'advanced/generics.md',
        'advanced/declaration-merging.md',
        'advanced/further-reading.md'
      ]
    },
    {
      link: 'engineering/README.md',
      children: ['engineering/lint.md', 'engineering/compiler-options.md']
    },
    'thanks/README.md'
  ],
  nav: [
    {
      text: 'GitHub',
      link: 'https://github.com/xcatliu/typescript-tutorial'
    },
    {
      text: '赞助作者',
      link: 'https://github.com/xcatliu/typescript-tutorial'
    },
    {
      text: '本网站使用 Pagic 构建',
      link: 'https://github.com/xcatliu/pagic'
    }
  ],
  gitalk: {
    clientID: '29aa4941759fc887ed4f',
    clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
    repo: 'typescript-tutorial',
    owner: 'xcatliu',
    admin: ['xcatliu']
  },
  ga: {
    id: 'UA-45256157-14'
  }
};
