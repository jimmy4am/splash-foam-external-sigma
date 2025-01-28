import { Metadata } from "next";
import {
  getAllPosts,
  getPostBySlug,
  getSalesBySlug,
  getCheckoutBySlug,
  getSalesSlugs,
  getCheckoutSlugs,
  getReviewBySlug,
  getReviewSlugs,
} from "@/app/_utils/api";
import ArticlePage from "../_components/article-page";
import SalesPage from "../_components/sales-page";
import CheckoutPage from "../_components/checkout-page";
import { baseReview, baseCheckout, baseSales } from "@/lib/site-info";
import { Montserrat } from "next/font/google";
import ReviewArticlePage from "../_components/review-page";

const montserrat = Montserrat({ subsets: ["latin"] });

type Params = {
  params: {
    slug: string;
  };
};

// Helper function to determine content type from slug
const findContentType = async (slug: string) => {
  // Still check prefixes for sales and checkout pages
  if (slug.startsWith("checkout")) return "checkout";
  if (slug.startsWith("sales")) return "sales";

  try {
    // Check _reviews folder first
    const reviewSlugs = getReviewSlugs();
    if (reviewSlugs.includes(`${slug}.md`)) {
      return "review";
    }

    // Check _posts folder
    const posts = getAllPosts();
    if (posts.some((post) => post.slug === slug)) {
      return "post";
    }

    return "post"; // Default to post if not found
  } catch (error) {
    console.error("Error finding content type:", error);
    return "post"; // Default to post on error
  }
};

export default async function Page({ params }: Params) {
  const contentType = await findContentType(params.slug);

  try {
    switch (contentType) {
      case "checkout": {
        const checkoutInfo = await getCheckoutBySlug(params.slug);
        return (
          <div className={montserrat.className}>
            <CheckoutPage info={checkoutInfo} />
          </div>
        );
      }
      case "sales": {
        const salesInfo = await getSalesBySlug(params.slug);
        return <SalesPage info={salesInfo} />;
      }
      case "review": {
        const reviewInfo = await getReviewBySlug(params.slug);
        return <ReviewArticlePage post={reviewInfo} />;
      }
      default: {
        const post = await getPostBySlug(params.slug);
        return <ArticlePage basePost={post} />;
      }
    }
  } catch (error) {
    // Fallback handling based on content type
    switch (contentType) {
      case "checkout": {
        const baseCheckoutInfo = await getCheckoutBySlug(baseCheckout);
        return (
          <div className={montserrat.className}>
            <CheckoutPage info={baseCheckoutInfo} />
          </div>
        );
      }
      case "sales": {
        const baseSalesInfo = await getSalesBySlug(baseSales);
        return <SalesPage info={baseSalesInfo} />;
      }
      default: {
        const basePost = await getPostBySlug(baseReview);
        return <ArticlePage basePost={basePost} />;
      }
    }
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const contentType = await findContentType(params.slug);

  try {
    switch (contentType) {
      case "checkout": {
        const info = await getCheckoutBySlug(params.slug);
        return {
          title: info.metaTitle,
          description: info.metaDescription,
        };
      }
      case "sales": {
        const info = await getSalesBySlug(params.slug);
        return {
          title: info.metaTitle,
          description: info.metaDescription,
        };
      }
      case "review": {
        const info = await getReviewBySlug(params.slug);
        return {
          title: info.metaTitle,
          description: info.metaDescription,
        };
      }
      default: {
        const info = await getPostBySlug(params.slug);
        return {
          title: info.title,
          description: info.metaDescription,
        };
      }
    }
  } catch (error) {
    // Fallback metadata based on content type
    switch (contentType) {
      case "checkout": {
        const info = await getCheckoutBySlug(baseCheckout);
        return {
          title: info.metaTitle,
          description: info.metaDescription,
        };
      }
      case "sales": {
        const info = await getSalesBySlug(baseSales);
        return {
          title: info.metaTitle,
          description: info.metaDescription,
        };
      }
      default: {
        const info = await getPostBySlug(baseReview);
        return {
          title: info.title,
          description: info.metaDescription,
        };
      }
    }
  }
}

export async function generateStaticParams() {
  try {
    // Get all posts
    const posts = getAllPosts();
    const postParams = posts.map((post) => ({
      slug: post.slug,
    }));

    // Get all review pages
    const reviewSlugs = getReviewSlugs();
    const reviewParams = reviewSlugs.map((slug) => ({
      slug: slug.replace(/\.md$/, ""),
    }));

    // Get all sales pages
    const salesSlugs = getSalesSlugs();
    const salesParams = salesSlugs.map((slug) => ({
      slug: slug.replace(/\.md$/, ""),
    }));

    // Get all checkout pages
    const checkoutSlugs = getCheckoutSlugs();
    const checkoutParams = checkoutSlugs.map((slug) => ({
      slug: slug.replace(/\.md$/, ""),
    }));

    return [...postParams, ...reviewParams, ...salesParams, ...checkoutParams];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
