// if you need to add additional fields feel free to do so but keep things organized
export type CheckoutPageType = {
  slug: string;
  template: string;
  funnelFlux: string;
  metaTitle: string;
  metaDescription: string;
  logo: string;
  stickyCampaign: string;
  header: {
    product: string;
    logo: string;
    badge: string;
    background: string;
    safeCheckout: string;
  };
  footer: {
    card: string;
  };

  blurbs: {
    icon1: string;
    text1: string;
    icon2: string;
    text2: string;
    icon3: string;
    text3: string;
    final1: string;
    final2: string;
    final3: string;
  };

  product: {
    name: string;
    image1: string;
    text1: string;
    price1: string;
    ogPrice1: string;
    qty1: string;
    ship1: string;
    shippingId1: string;
    offerId1: string;
    stickyId1: string;
    image2: string;
    text2: string;
    price2: string;
    ogPrice2: string;
    qty2: string;
    ship2: string;
    shippingId2: string;
    offerId2: string;
    stickyId2: string;
    image3: string;
    text3: string;
    price3: string;
    ogPrice3: string;
    qty3: string;
    ship3: string;
    shippingId3: string;
    offerId3: string;
    stickyId3: string;
    image4: string;
    price4: string;
    ogPrice4: string;
    qty4: string;
    ship4: string;
    shippingId4: string;
    offerId4: string;
    stickyId4: string;
    couponValue: string;
  };
  buttonCta: string;
  content: string;

  mould_cleaner: {
    product: {
      product_image_1: string;
      product_image_2: string;
      product_image_3: string;
      product_image_4: string;
      product_image_5: string;
      product_image_6: string;
      product_image_7: string;
      product_image_8: string;
      product_image_9: string;
      product_image_10: string;
      product_image_11: string;
      title: string;
      rating: number;
      reviews: number;
      text_1: string;
      text_2: string;
      text_3: string;
      text_4: string;
    };
    partners: {
      partner_1_image: string;
      partner_2_image: string;
      partner_3_image: string;
      partner_4_image: string;
    };
    content: {
      content_1_image: string;
      content_1_title: string;
      content_1_subtitle: string;
      content_1_text: string;
      content_2_image: string;
      content_2_title: string;
      content_2_subtitle: string;
      content_2_text: string;
      content_3_image: string;
      content_3_title: string;
      content_3_subtitle: string;
      content_3_text: string;
      content_4_image: string;
      content_4_title: string;
      content_4_subtitle: string;
      content_4_text: string;
    };
    advantages: {
      adv_1_title: string;
      adv_1_text: string;
      adv_2_title: string;
      adv_2_text: string;
      adv_3_title: string;
      adv_3_text: string;
    };
    reviews: {
      review_1_image: string;
      review_1_rating: number
      review_1_text: string;
      review_1_author: string;
      review_2_image: string;
      review_2_rating: number
      review_2_text: string;
      review_2_author: string;
      review_3_image: string;
      review_3_rating: number
      review_3_text: string;
      review_3_author: string;
    };
    faqs: {
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
      q5: string;
      a5: string;
      q6: string;
      a6: string;
    };
  }
};
