# 4am Media + Sigma

The goal for this project is to create all needed upsell templates and markdown files for our currently running sales funnels but in our new dynamic system using typescript, tailwind, and markdown files.

To view a live upsell, go to /chekout/upsell1?show=[upsellName]

I've provided some sample upsells for you to take a look at.

`_upsell/xtc-mega-pack.md` Preview on -> `localhost:3000/checkout/upsell1?show=xtc-mega-pack`
`_upsell/xtc-xmp-cross.md` Preview on -> `localhost:3000/checkout/upsell1?show=xtc-xmp-cross`

Take a look at the upsell components and follow our current style.

`/_components/upsell-page.tsx`

`/_components/upsell/upsell-template5.tsx`

Your goal is to create a new templates as needed for each of these upsells. Use existing templates whenever possible. Please clone them exactly but put as much content in the markdown file as possible. The `UpsellPage` type in the interfaces folder will show you how the upsells are less structured than our other types of content. Don't bother worrying about the sticky product ids or pricing, simply focus on the front end design that will be shown to the user.

#1 - https://order.x-all.com/xps/upsell2.php?show=me

- please ping me when #1 is done as it's needed right away. We need a full template for this one

For the next funnel, feel free to try and use our existing templates but bring over all the content as closely as possible. Images get uploaded to admin panel and create new markdown files starting with glab-{item} as provided

#2 - https://glabrousskin.com/skin/upsell1.php?show=me [glab-sub]
#3 - https://glabrousskin.com/skin/upsell2.php?show=me [glab-warranty]
#4 - https://glabrousskin.com/skin/upsell3.php?show=me [glab-exp-processing]
#5 - https://glabrousskin.com/skin/upsell4.php?show=me [glab-brush]
#5 - https://glabrousskin.com/skin/upsell5.php?show=me [glab-gift-quiz] (this one is a super custom template - try out the demo and see if you can create a version yourself - if not send me a message and we will figure out a better solution)

For the next funnel, do the same thing but start markdown files with barks-
#6 - https://www.barksnomore.com/woof/upsell1.php?show=me [barks-sub]
#7 - https://www.barksnomore.com/woof/upsell2.php?show=me [barks-warranty]
#8 - https://www.barksnomore.com/woof/upsell3.php?show=me [barks-exp-processing]
#9 - https://www.barksnomore.com/woof/upsell4.php?show=me [barks-otp]

For the next funnel, do the same thing but start markdown files with oricle-
#10 - https://www.oriclehearing.com/hear/upsell1.php?show=me [oricle-warranty]
#11 - https://www.oriclehearing.com/hear/upsell2.php?show=me [oricle-sub]
#12 - https://www.oriclehearing.com/hear/upsell3.php?show=me [oricle-exp-processing]
#13 - https://www.oriclehearing.com/hear/upsell5.php?show=me [oricle-gift-quiz] (this one is a super custom template - try out the demo and see if you can create a version yourself - if not send me a message and we will figure out a better solution)

For the next funnel, do the same thing but start markdown files with pee-
#14 - https://www.peebuster.com/pet/upsell1.php?show=me [pee-sub]
#15 - https://www.peebuster.com/pet/upsell2.php?show=me [pee-tablets-otp]
#16 - https://www.peebuster.com/pet/upsell3.php?show=me [pee-exp-procesing]
#17 - https://www.peebuster.com/pet/upsell4.php?show=me [pee-barks-otp]

For the next funnel, do the same thing but start markdown files with posture-
#14 - https://www.posturebenefit.com/back/upsell1.php?show=me [posture-sub]
#15 - https://www.posturebenefit.com/back/upsell2.php?show=me [posture-exp-processing] (new template please - match whats live)
#16 - https://www.posturebenefit.com/back/upsell4.php?show=me [posture-gift-quiz]

For the next funnel, do the same thing but start markdown files with breath-
#17 - https://www.buybbreath.com/upsell1.php?show=me [breath-sub]
#18 - https://www.buybbreath.com/upsell2.php?show=me [breath-otp]
#19 - https://www.buybbreath.com/upsell3.php?show=me [breath-exp-processing]
#20 - https://www.buybbreath.com/upsell4.php?show=me [breath-denta-otp] (otp = one time purchase discount flag - I put this on upsells with a dropdown selector)
#21 - https://www.buybbreath.com/upsell5.php?show=me [breath-gift-quiz]

For the next funnel, do the same thing but start markdown files with wifi-
#17 - https://www.blazewifiboost.com/wifi/upsell1.php?show=me [wifi-sub]
#18 - https://www.blazewifiboost.com/wifi/upsell2.php?show=me [wifi-warranty]
#19 - https://www.blazewifiboost.com/wifi/upsell3.php?show=me [wifi-exp-processing]
#20 - https://www.blazewifiboost.com/wifi/upsell4.php?show=me [wifi-otp]

For the next funnel, do the same thing but start markdown files with denta-
#17 - https://www.dentablast.com/blast/upsell1.php?show=me [denta-sub]
#18 - https://www.dentablast.com/blast/upsell2.php?show=me [denta-warranty]
#19 - https://www.dentablast.com/blast/upsell3.php?show=me [denta-otp]
#20 - https://www.dentablast.com/blast/upsell4.php?show=me [denta-exp-processing]
#21 - https://www.dentablast.com/blast/upsell5.php?show=me [denta-breath-otp]
#22 - https://www.dentablast.com/blast/upsell5.php?show=me [denta-gift-quiz]

For the next funnel, do the same thing but start markdown files with jet-
#23 - https://www.thejetsurge.com/jet/upsell1.php?show=me [jet-sub]
#24 - https://www.thejetsurge.com/jet/upsell2.php?show=me [jet-warranty]
#25 - https://www.thejetsurge.com/jet/upsell3.php?show=me [jet-otp]
#26 - https://www.thejetsurge.com/jet/upsell4.php?show=me [jet-exp-processing]
#27 - https://www.thejetsurge.com/jet/upsell5.php?show=me [jet-gift-quiz]

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

**Task E**

Sub n' Save Checkout Template

- will provide more details on this shortly

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
