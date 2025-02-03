# 4am Media + Sigma

The goal for this project is to create a "Template 4" for our sales page from a static page design

**Current Template 1** - [https://clean.buysplashcleaner.com/](https://clean.buysplashcleaner.com/)

**Task A**

Review Page Temalate 5 -

Take a look at the `[slug]/page.tsx` and see how it's setup to handle multiple post types. You've done sales and checkout pages. Now we want to do a new template for "reviewPosts" - please reference fields from the `reviwPosts` type

Current Review Template -> [https://clean.buysplashcleaner.com/review-top-5-toilet-cleaners](https://clean.buysplashcleaner.com/review-top-5-toilet-cleaners)

Desired Template 5 (short versions) -> [https://hitsdesignclients.com/GLP-Comparaision/Short_Page/V1/](https://hitsdesignclients.com/GLP-Comparaision/Short_Page/V1/)

Desired Template 5 (long article version) -> [https://hitsdesignclients.com/GLP-Comparaision/Full_Page/v1/](https://hitsdesignclients.com/GLP-Comparaision/Full_Page/v1/)

Please reference the fields in the reviewPost when possible. Aslo include a new field called `showFullArticle` of type Boolean which when true shows the long form version of the template.

**Task B**

Review Page Template 6 - Deisred Output

Very similar task to Template 5 - just with a different design.

Desired Template 6 (short versions) -> [https://hitsdesignclients.com/GLP-Comparaision/Short_Page/V2/](https://hitsdesignclients.com/GLP-Comparaision/Short_Page/V2/)

Desired Template 6 (long article version) -> [https://hitsdesignclients.com/GLP-Comparaision/Full_Page/v2/](https://hitsdesignclients.com/GLP-Comparaision/Full_Page/v2/)

Please reference the fields in the reviewPost when possible. Put a new field into reviewPost called `showFullArticle` of type Boolean which when true shows the long form version of the template so we don't need duplicates.

**Task C**

Sales Page Template 3 - Editable Version

Create an editable version of the template. This involves switching all outputs to inputs that `setCurrentPost` with an updated value.

Please try and match text size and color, but outline inputs with a dashed yellow border to alert users that they can be changed.

So an example would be...

`<p className="text-[17px] italic text-blue-500">{info.text1}</p>`

Becomes..

`<input className="border-2 border-yellow-500 border-dashed px-2 text-[17px] italic text-blue-500" value={info.text1} onChange={(e)=>setCurrentPost({...info,
text1: e.target.value,
})}>`

The same format would follow for all text outputs, just match text size and color and use your best judgement if colors need to be changes or sizes need to be changed. Take a look at the examples provided.

For image inputs, please swith <Image> components to custom built "EditImage" component. For settings, keept the exact same as the <Image> getting replaces, then add post={info}, setPost={setCurrentPost}, field={fiedName}

Feel free to hit me up on slack if there are any questions

**Task D**

Template 4 - Editable Version

## Complete Tasks (History)

✅ **_Desired Template 3_** - [https://splash-foam-sales-7-1.vercel.app/](https://splash-foam-sales-7-1.vercel.app/)

Public Repo for static template 7.1 - [https://github.com/jimmy4am/splash-foam-sales-7.1](https://github.com/jimmy4am/splash-foam-sales-7.1)

✅ **_Desired Template 4_** - [https://splash-foam-sales-7-2.vercel.app/](https://splash-foam-sales-7-2.vercel.app/)

Public Repo for static template 7.2 - [https://github.com/jimmy4am/splash-foam-sales-7.2](https://github.com/jimmy4am/splash-foam-sales-7.2)

## This is a Next.js + Typescript + Tailwind CSS project refrencing Markdown files.

This build is designed to work across multiple funnels.

Dynamic content (product specific content..) and image links are stored in markdown files at the root - `/_sales/sales-splash-foam.md`.

Home page `/src/app/page.tsx` reads markdown content and passes it to the `SalesPage` component - `/src/app/_components/sales-page.tsx`.

`SalesPage` renders the correct template based on the `info.template` field.

## Goals

Create a templatized version of the 7.1 sales page but refrencing the content from `sales-splash-foam.md`

I should be able to swtich from template 1 to template 3 by updating the `template` field in the markdown file and refreshing the page.

## Bonus Goals

Mobile friendly responsive layout

Stick as closely as possible to my current style using tailwind as much as possible and keeping custom classes to a minimum

Keep file structure organized - put new components in the `/_components/sales/sales-3` folder.

Keep types organized if modifying or adding fields.

**For any questions or concerns, please email jimmy@fourammedia.com or message on internal Slack Channel**

## To Get Started

Clone the repo to your local machine then

_Install packages locally_

> `yarn install`

_run local dev environment_

> `yarn run dev`

# Vercel Info

# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)
- [TinaCMS](/examples/cms-tina/)
- [Enterspeed](/examples/cms-enterspeed)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
