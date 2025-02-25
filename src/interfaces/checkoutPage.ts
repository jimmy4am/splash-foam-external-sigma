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
    price1: string;
    ogPrice1: string;
    qty1: string;
    ship1: string;
    shippingId1: string;
    offerId1: string;
    stickyId1: string;
    image2: string;
    price2: string;
    ogPrice2: string;
    qty2: string;
    ship2: string;
    shippingId2: string;
    offerId2: string;
    stickyId2: string;
    image3: string;
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
    header: {
      logo: string;
      title: string;
    };
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
      offer_1_id: number;
      offer_1_text: string;
      offer_1_price: number;
      offer_1_new_price: number;
      offer_1_savings: number;
      offer_2_id: number;
      offer_2_text: string;
      offer_2_price: number;
      offer_2_new_price: number;
      offer_2_savings: number;
      offer_3_id: number;
      offer_3_text: string;
      offer_3_price: number;
      offer_3_new_price: number;
      offer_3_savings: number;
    }
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
