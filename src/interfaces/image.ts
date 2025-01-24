export type ImageType = {
  id: string;
  url: string;
  timestamp: number;
  userId: string;
  userEmail: string;
  tags?: string[];
  hasNoTags?: boolean;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: string;
    size: string;
  };
};
