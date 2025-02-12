import { ReviewCardType } from "@/app/_components/review/review-5/review-body/types";

export const getPoints = (product: any) => {
  const points: string[] = [];
  Object.entries(product).map(([key, value]) => {
    if (key.startsWith('point') && value) {
      points.push(value as string)
    }
  });
  return points;
};

export const getReviewsData = (post: any): ReviewCardType[] => ([
  {
    name: post.product1.name,
    image: post.product1.image,
    text: getPoints(post.product1),
    rating: post.product1.rating,
    cta: post.product1.cta,
    specialCta: post.product1.specialCta,
  },
  {
    name: post.product2.name,
    image: post.product2.image,
    text: getPoints(post.product2),
    rating: post.product2.rating,
    cta: post.product2.cta,
  },
  {
    name: post.product3.name,
    image: post.product3.image,
    text: getPoints(post.product3),
    rating: post.product3.rating,
    cta: post.product3.cta,
  },
  {
    name: post.product4.name,
    image: post.product4.image,
    text: getPoints(post.product4),
    rating: post.product4.rating,
    cta: post.product4.cta,
  },
  {
    name: post.product5.name,
    image: post.product5.image,
    text: getPoints(post.product5),
    rating: post.product5.rating,
    cta: post.product5.cta,
  }
]);

export const getRatingName = (rating: number): string => {
  if (rating > 9) return 'Excellent';
  if (rating <= 9 && rating > 7) return 'Good';
  if (rating <= 7 && rating > 6) return 'Average';
  if (rating <= 6 && rating > 5.5) return 'Fair';
  return 'Poor';
}

export const getRatingImage = (rating: number): string => {
  if (rating > 9) return '★★★★★';
  if (rating <= 9 && rating > 7) return '★★★★☆';
  if (rating <= 7 && rating > 6) return '★★★☆☆';
  if (rating <= 6 && rating > 5.5) return '★★☆☆☆';
  return '★☆☆☆☆';
}